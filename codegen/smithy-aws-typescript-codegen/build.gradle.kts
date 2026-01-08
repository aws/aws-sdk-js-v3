/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import org.gradle.api.DefaultTask
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.file.DuplicatesStrategy
import org.gradle.api.file.RegularFileProperty
import org.gradle.language.jvm.tasks.ProcessResources
import software.amazon.smithy.model.node.Node
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
    api("software.amazon.smithy.typescript:smithy-typescript-codegen:0.41.1")

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
    abstract val libDir: DirectoryProperty

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

        val roots = dirToList(libDir) + dirToList(packagesDir) + dirToList(clientsDir)
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

    private fun dirToList(dir: DirectoryProperty): List<File> {
        return dir.asFile
            .get()
            .listFiles()
            .orEmpty()
            .toMutableList()
    }
}

tasks.register<SetAwsSdkVersionsTask>("set-aws-sdk-versions") {
    libDir.set(layout.projectDirectory.dir("../../lib"))
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
