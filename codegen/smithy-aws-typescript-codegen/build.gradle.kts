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
import org.gradle.api.DefaultTask
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.tasks.*
import org.gradle.language.jvm.tasks.ProcessResources
import org.gradle.api.file.DuplicatesStrategy
import java.io.File


description = "Generates TypeScript code for AWS protocols from Smithy models"
extra["displayName"] = "Smithy :: AWS :: Typescript :: Codegen"
extra["moduleName"] = "software.amazon.smithy.aws.typescript.codegen"

val smithyVersion: String by project

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
    // Smithy TypeScript
    api("software.amazon.smithy.typescript:smithy-typescript-codegen:0.36.1")

    // Smithy generic dependencies
    api("software.amazon.smithy:smithy-model:$smithyVersion")
    api("software.amazon.smithy:smithy-protocol-test-traits:$smithyVersion")
    api("software.amazon.smithy:smithy-rules-engine:$smithyVersion")
    api("software.amazon.smithy:smithy-waiters:$smithyVersion")

    // Smithy AWS dependencies
    api("software.amazon.smithy:smithy-aws-cloudformation-traits:$smithyVersion")
    api("software.amazon.smithy:smithy-aws-endpoints:$smithyVersion")
    api("software.amazon.smithy:smithy-aws-iam-traits:$smithyVersion")
    api("software.amazon.smithy:smithy-aws-traits:$smithyVersion")
}

abstract class SetAwsSdkVersionsTask : DefaultTask() {
    @get:InputDirectory
    abstract val packagesDir: DirectoryProperty
    
    @get:InputDirectory
    abstract val clientsDir: DirectoryProperty
    
    @get:OutputFile
    abstract val versionsFile: RegularFileProperty
    
    @TaskAction
    fun setVersions() {
        val outputFile = versionsFile.asFile.get()
        outputFile.parentFile.mkdirs()
        outputFile.printWriter().close()

        val roots = packagesDir.asFile.get().listFiles().orEmpty().toMutableList() + clientsDir.asFile.get().listFiles().orEmpty().toList()
        roots.forEach { packageDir ->
            val packageJsonFile = File(packageDir, "package.json")
            if (packageJsonFile.isFile()) {
                val packageJson = Node.parse(packageJsonFile.readText()).expectObjectNode()
                val packageName = packageJson.expectStringMember("name").getValue()
                val packageVersion = packageJson.expectStringMember("version").getValue()
                val isPrivate = packageJson.getBooleanMemberOrDefault("private", false)
                if (!isPrivate) {
                    outputFile.appendText("$packageName=$packageVersion\n")
                }
            }
        }
    }
}

tasks.register<SetAwsSdkVersionsTask>("set-aws-sdk-versions") {
    packagesDir.set(layout.projectDirectory.dir("../../packages"))
    clientsDir.set(layout.projectDirectory.dir("../../clients"))
    versionsFile.set(layout.buildDirectory.file("generated/resources/software/amazon/smithy/aws/typescript/codegen/sdkVersions.properties"))
}

sourceSets {
    main {
        resources {
            srcDir("src/main/resources")
            srcDir(layout.buildDirectory.dir("generated/resources"))
        }
    }
}

tasks["processResources"].dependsOn(tasks["set-aws-sdk-versions"])
tasks.named<ProcessResources>("processResources") {
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
}
