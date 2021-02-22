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

plugins {
    `java-library`
    checkstyle
    jacoco
    id("com.github.spotbugs") version "4.6.0"
}

group = "software.amazon.smithy"
version = "0.3.0"

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
}

tasks.withType<Test> {
    useJUnitPlatform()
}

dependencies {
    api("software.amazon.smithy:smithy-aws-traits:[1.5.0, 2.0[")
    api("software.amazon.smithy:smithy-waiters:[1.5.0, 2.0[")
    api("software.amazon.smithy:smithy-aws-iam-traits:[1.5.0, 2.0[")
    api("software.amazon.smithy:smithy-typescript-codegen:0.3.0")
    testCompile("org.junit.jupiter:junit-jupiter-api:5.4.0")
    testRuntime("org.junit.jupiter:junit-jupiter-engine:5.4.0")
    testCompile("org.junit.jupiter:junit-jupiter-params:5.4.0")
    testCompile("org.hamcrest:hamcrest:2.1")
}

// == CheckStyle ==
tasks["checkstyleTest"].enabled = false

// == Code coverage ==
// Always run the jacoco test report after testing.
tasks["test"].finalizedBy(tasks["jacocoTestReport"])

// Configure jacoco to generate an HTML report.
tasks.withType<JacocoReport> {
    reports {
        xml.isEnabled = false
        csv.isEnabled = false
        html.destination = file("$buildDir/reports/jacoco")
    }
}

// == Spotbugs ==
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
    val excludeFile = File("${project.rootDir}/config/spotbugs/filter.xml")
    if (excludeFile.exists()) {
        excludeFilter.set(excludeFile)
    }
}
