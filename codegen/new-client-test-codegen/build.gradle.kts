/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import software.amazon.smithy.gradle.tasks.SmithyBuildTask

val smithyVersion: String by project

buildscript {
    val smithyVersion: String by project

    repositories {
        mavenLocal()
        mavenCentral()
    }
    dependencies {
        "classpath"("software.amazon.smithy:smithy-cli:$smithyVersion")
    }
}

plugins {
    `java-library`

    val smithyGradleVersion: String by project
    id("software.amazon.smithy.gradle.smithy-base").version(smithyGradleVersion)
}

dependencies {
    implementation("software.amazon.smithy:smithy-aws-protocol-tests:$smithyVersion")
    implementation("software.amazon.smithy:smithy-aws-traits:$smithyVersion")
    implementation(project(":smithy-aws-typescript-codegen"))
}

// This project doesn't produce a JAR.
tasks["jar"].enabled = false

// Run the SmithyBuild task manually since this project needs the built JAR
// from smithy-aws-typescript-codegen.
tasks["smithyBuild"].enabled = false

val buildSdk = tasks.register<SmithyBuildTask>("buildSdk") {
    models.set(files("models/"))
    smithyBuildConfigs.set(files("smithy-build.json"))
}

// Run the `buildSdk` automatically.
tasks["build"].finalizedBy(buildSdk)
