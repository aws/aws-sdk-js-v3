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
    val smithyVersion: String by project

    repositories {
        mavenLocal()
        mavenCentral()
    }
    dependencies {
        classpath("software.amazon.smithy:smithy-model:$smithyVersion")
    }
}

dependencies {
    val smithyVersion: String by project

    api("software.amazon.smithy:smithy-aws-cloudformation-traits:$smithyVersion")
    api("software.amazon.smithy:smithy-aws-traits:$smithyVersion")
    api("software.amazon.smithy:smithy-aws-endpoints:$smithyVersion")
    api("software.amazon.smithy:smithy-waiters:$smithyVersion")
    api("software.amazon.smithy:smithy-aws-iam-traits:$smithyVersion")
    api("software.amazon.smithy:smithy-protocol-test-traits:$smithyVersion")
    api("software.amazon.smithy:smithy-model:$smithyVersion")
    api("software.amazon.smithy:smithy-rules-engine:$smithyVersion")
    api("software.amazon.smithy.typescript:smithy-typescript-codegen:0.19.0")
}

tasks.register("set-aws-sdk-versions") {
    doLast {
        mkdir("$buildDir/generated/resources/software/amazon/smithy/aws/typescript/codegen")
        val versionsFile =
                file("$buildDir/generated/resources/software/amazon/smithy/aws/typescript/codegen/sdkVersions.properties")
        val roots = project.file("../../packages").listFiles().toMutableList() + project.file("../../clients").listFiles().toList()
        roots.forEach { packageDir ->
            val packageJsonFile = File(packageDir, "package.json")
            if (packageJsonFile.isFile()) {
                val packageJson = Node.parse(packageJsonFile.readText()).expectObjectNode()
                val packageName = packageJson.expectStringMember("name").getValue()
                val packageVersion = packageJson.expectStringMember("version").getValue()
                val isPrivate = packageJson.getBooleanMemberOrDefault("private", false)
                if (!isPrivate) {
                    versionsFile.appendText("$packageName=$packageVersion\n")
                }
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
