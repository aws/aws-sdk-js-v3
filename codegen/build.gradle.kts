/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import org.jreleaser.model.Active

plugins {
    `java-library`
    `maven-publish`
    signing
    checkstyle
    jacoco
    id("com.github.spotbugs") version "4.7.1"
    id("org.jreleaser") version "1.18.0"
}

allprojects {
    repositories {
        mavenLocal()
        mavenCentral()
    }
    group = "software.amazon.smithy.typescript"
    version = "0.33.0"
}

// The root project doesn't produce a JAR.
tasks["jar"].enabled = false

// Load the Sonatype user/password for use in publishing tasks.
val sonatypeUser: String? by project
val sonatypePassword: String? by project

repositories {
    mavenLocal()
    mavenCentral()
}

subprojects {
    val subproject = this

    /*
     * Java
     * ====================================================
     */
    if (subproject.name == "smithy-aws-typescript-codegen") {
        apply(plugin = "java-library")

        java {
            sourceCompatibility = JavaVersion.VERSION_17
            targetCompatibility = JavaVersion.VERSION_17
        }

        tasks.withType<JavaCompile> {
            options.encoding = "UTF-8"
        }

        // Use Junit5's test runner.
        tasks.withType<Test> {
            useJUnitPlatform()
        }

        // Apply junit 5 and hamcrest test dependencies to all java projects.
        dependencies {
            testImplementation("org.junit.jupiter:junit-jupiter-api:5.4.0")
            testImplementation("org.junit.jupiter:junit-jupiter-engine:5.4.0")
            testImplementation("org.junit.jupiter:junit-jupiter-params:5.4.0")
            testImplementation("org.hamcrest:hamcrest:2.1")
        }

        // Reusable license copySpec
        val licenseSpec = copySpec {
            from("${project.rootDir}/LICENSE")
            from("${project.rootDir}/NOTICE")
        }

        // Set up tasks that build source and javadoc jars.
        tasks.register<Jar>("sourcesJar") {
            metaInf.with(licenseSpec)
            from(sourceSets.main.get().allSource)
            archiveClassifier.set("sources")
        }

        tasks.register<Jar>("javadocJar") {
            metaInf.with(licenseSpec)
            from(tasks.javadoc)
            archiveClassifier.set("javadoc")
        }

        // Configure jars to include license related info
        tasks.jar {
            metaInf.with(licenseSpec)
            inputs.property("moduleName", subproject.extra["moduleName"])
            manifest {
                attributes["Automatic-Module-Name"] = subproject.extra["moduleName"]
            }
        }

        // Always run javadoc after build.
        tasks["build"].finalizedBy(tasks["javadoc"])

        /*
         * Maven
         * ====================================================
         */
        apply(plugin = "maven-publish")
        apply(plugin = "signing")

        repositories {
            mavenLocal()
            mavenCentral()
        }

        publishing {
            repositories {
                maven {
                    name = "stagingRepository"
                    url = uri("${rootProject.buildDir}/staging")
                }
            }

            publications {
                create<MavenPublication>("mavenJava") {
                    from(components["java"])

                    // Ship the source and javadoc jars.
                    artifact(tasks["sourcesJar"])
                    artifact(tasks["javadocJar"])

                    // Include extra information in the POMs.
                    afterEvaluate {
                        pom {
                            name.set(subproject.extra["displayName"].toString())
                            description.set(subproject.description)
                            url.set("https://github.com/aws/aws-sdk-js-v3.git")
                            licenses {
                                license {
                                    name.set("Apache License 2.0")
                                    url.set("http://www.apache.org/licenses/LICENSE-2.0.txt")
                                    distribution.set("repo")
                                }
                            }
                            developers {
                                developer {
                                    id.set("smithy")
                                    name.set("Smithy")
                                    organization.set("Amazon Web Services")
                                    organizationUrl.set("https://aws.amazon.com")
                                    roles.add("developer")
                                }
                            }
                            scm {
                                url.set("https://github.com/aws/aws-sdk-js-v3.git")
                            }
                        }
                    }
                }
            }
        }

        // Don't sign the artifacts if we didn't get a key and password to use.
        val signingKey: String? by project
        val signingPassword: String? by project
        if (signingKey != null && signingPassword != null) {
            signing {
                useInMemoryPgpKeys(signingKey, signingPassword)
                sign(publishing.publications["mavenJava"])
            }
        }

        /*
         * CheckStyle
         * ====================================================
         */
        apply(plugin = "checkstyle")

        checkstyle {
            configDirectory.set(rootProject.file("gradleConfig/checkstyle"))
        }

        tasks["checkstyleTest"].enabled = false

        /*
         * Tests
         * ====================================================
         *
         * Configure the running of tests.
         */
        // Log on passed, skipped, and failed test events if the `-Plog-tests` property is set.
        if (project.hasProperty("log-tests")) {
            tasks.test {
                testLogging.events("passed", "skipped", "failed")
            }
        }

        /*
         * Code coverage
         * ====================================================
         */
        apply(plugin = "jacoco")

        // Always run the jacoco test report after testing.
        tasks["test"].finalizedBy(tasks["jacocoTestReport"])

        // Configure jacoco to generate an HTML report.
        tasks.jacocoTestReport {
            reports {
                xml.required.set(false)
                csv.required.set(false)
                html.outputLocation.set(file("$buildDir/reports/jacoco"))
            }
        }

        /*
         * Spotbugs
         * ====================================================
         */
        apply(plugin = "com.github.spotbugs")

        // We don't need to lint tests.
        tasks["spotbugsTest"].enabled = false


        // Log on passed, skipped, and failed test events if the `-Plog-tests` property is set.
        if (project.hasProperty("log-tests")) {
            tasks.test {
                testLogging.events("passed", "skipped", "failed")
            }
        }

        // Configure the bug filter for spotbugs.
        spotbugs {
            setEffort("max")
            val excludeFile = rootProject.file("gradleConfig/spotbugs/filter.xml")
            if (excludeFile.exists()) {
                excludeFilter.set(excludeFile)
            }
        }
    }
}

/*
 * Jreleaser (https://jreleaser.org) config.
 */
jreleaser {
    dryrun = false
    gitRootSearch = true

    // Used for creating a tagged release, uploading files and generating changelog.
    // In the future we can set this up to push release tags to GitHub, but for now it's
    // set up to do nothing.
    // https://jreleaser.org/guide/latest/reference/release/index.html
    release {
        generic {
            enabled = true
            skipRelease = true
        }
    }

    // Used to announce a release to configured announcers.
    // https://jreleaser.org/guide/latest/reference/announce/index.html
    announce {
        active = Active.NEVER
    }

    // Signing configuration.
    // https://jreleaser.org/guide/latest/reference/signing.html
    signing {
        active = Active.ALWAYS
        armored = true
    }

    // Configuration for deploying to Maven Central.
    // https://jreleaser.org/guide/latest/examples/maven/maven-central.html#_gradle
    deploy {
        maven {
            mavenCentral {
                create("maven-central") {
                    active = Active.ALWAYS
                    url = "https://central.sonatype.com/api/v1/publisher"
                    stagingRepositories.add("${rootProject.buildDir}/staging")
                }
            }
        }
    }
}
