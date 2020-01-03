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
    id("com.github.spotbugs") version "1.6.10"
}

group = "software.amazon.smithy"
version = "0.1.0"

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
}

tasks.withType<Test> {
    useJUnitPlatform()
}

dependencies {
    api("software.amazon.smithy:smithy-aws-traits:0.9.6")
    api("software.amazon.smithy:smithy-typescript-codegen:0.1.0")
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

// Configure the bug filter for spotbugs.
tasks.withType<com.github.spotbugs.SpotBugsTask> {
    effort = "max"
    excludeFilterConfig = project.resources.text.fromFile("${project.rootDir}/config/spotbugs/filter.xml")
}
