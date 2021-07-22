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

import software.amazon.smithy.model.node.Node


description = "Generates TypeScript code for AWS protocols from Smithy models"
extra["displayName"] = "Smithy :: AWS :: Typescript :: Codegen"
extra["moduleName"] = "software.amazon.smithy.aws.typescript.codegen"

buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath("software.amazon.smithy:smithy-model:[1.9.0, 1.10.0[")
    }
}

dependencies {
    api("software.amazon.smithy:smithy-aws-cloudformation-traits:[1.9.0, 1.10.0[")
    api("software.amazon.smithy:smithy-aws-traits:[1.9.0, 1.10.0[")
    api("software.amazon.smithy:smithy-waiters:[1.9.0, 1.10.0[")
    api("software.amazon.smithy:smithy-aws-iam-traits:[1.9.0, 1.10.0[")
    api("software.amazon.smithy:smithy-protocol-test-traits:[1.9.0, 1.10.0[")
    api("software.amazon.smithy.typescript:smithy-typescript-codegen:0.5.0")
}

tasks.register("set-aws-sdk-versions") {
    doLast {
        mkdir("$buildDir/generated/resources/software/amazon/smithy/aws/typescript/codegen")
        var versionsFile =
                file("$buildDir/generated/resources/software/amazon/smithy/aws/typescript/codegen/sdkVersions.properties")
        var roots = project.file("../../packages").listFiles().toMutableList() + project.file("../../clients").listFiles().toList()
        roots.forEach { packageDir ->
            var packageJsonFile = File(packageDir, "package.json")
            if (packageJsonFile.isFile()) {
                var packageJson = Node.parse(packageJsonFile.readText()).expectObjectNode()
                var packageName = packageJson.expectStringMember("name").getValue()
                var packageVersion = packageJson.expectStringMember("version").getValue()
                versionsFile.appendText("$packageName=$packageVersion\n")
            }
        }
    }
}

sourceSets {
    main {
        resources {
            setSrcDirs(listOf("src/main/resources", "$buildDir/generated/resources"))
        }
    }
}

tasks["processResources"].dependsOn(tasks["set-aws-sdk-versions"])
