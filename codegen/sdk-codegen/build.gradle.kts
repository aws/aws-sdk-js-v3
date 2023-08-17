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

import software.amazon.smithy.model.Model
import software.amazon.smithy.model.shapes.ServiceShape
import software.amazon.smithy.model.node.Node
import software.amazon.smithy.gradle.tasks.SmithyBuild
import software.amazon.smithy.aws.traits.ServiceTrait
import java.util.stream.Stream
import kotlin.streams.toList

val smithyVersion: String by project

buildscript {
    val smithyVersion: String by project

    repositories {
        mavenLocal()
        mavenCentral()
    }
    dependencies {
        "classpath"("software.amazon.smithy:smithy-cli:$smithyVersion")
        "classpath"("software.amazon.smithy:smithy-aws-traits:$smithyVersion")
    }
}

plugins {
    val smithyGradleVersion: String by project
    id("software.amazon.smithy").version(smithyGradleVersion)
}

dependencies {
    implementation(project(":smithy-aws-typescript-codegen"))
}

// This project doesn't produce a JAR.
tasks["jar"].enabled = false

// Run the SmithyBuild task manually since this project needs the built JAR
// from smithy-aws-typescript-codegen.
tasks["smithyBuildJar"].enabled = false

tasks.create<SmithyBuild>("buildSdk") {
    addRuntimeClasspath = true
}

configure<software.amazon.smithy.gradle.SmithyExtension> {
    val clientNameProp: String? by project
    if (!(clientNameProp?.isEmpty() ?: true)) {
        smithyBuildConfigs = files("smithy-build-" + clientNameProp + ".json")
        outputDirectory = file("build-single/" + clientNameProp)
    }
}

// Generates a smithy-build.json file by creating a new projection for every
// JSON file found in aws-models/. The generated smithy-build.json file is
// not committed to git since it's rebuilt each time codegen is performed.
tasks.register("generate-smithy-build") {
    doLast {
        val projectionsBuilder = Node.objectNodeBuilder()
        val modelsDirProp: String by project
        val clientNameProp: String? by project
        val models = project.file(modelsDirProp);

        fileTree(models).filter { it.isFile }.files.forEach eachFile@{ file ->
            val model = Model.assembler()
                    .addImport(file.absolutePath)
                    .assemble().result.get();
            val servicesStream: Stream<ServiceShape> = model.shapes(ServiceShape::class.javaObjectType)
            val servicesStreamSorted: Stream<ServiceShape> = servicesStream.sorted()
            val services: List<ServiceShape> = servicesStreamSorted.toList()

            if (services.size != 1) {
                throw Exception("There must be exactly one service in each aws model file, but found " +
                        "${services.size} in ${file.name}: ${services.map { it.id }}");
            }
            val service = services[0]

            val serviceTrait = service.getTrait(ServiceTrait::class.javaObjectType).get();

            val sdkId = serviceTrait.sdkId
                    .replace(" ", "-")
                    .toLowerCase();
            val version = service.version.toLowerCase();

            val clientName = sdkId.split("-").toTypedArray()
                    .map { it.capitalize() }
                    .joinToString(separator = " ")
            var manifestOverwrites = Node.parse(
                    File("smithy-aws-typescript-codegen/src/main/resources/software/amazon/smithy/aws/typescript/codegen/package.json.template")
                            .readText()
            ).expectObjectNode()
            val projectionContents = Node.objectNodeBuilder()
                    .withMember("imports", Node.fromStrings("${models.getAbsolutePath()}${File.separator}${file.name}"))
                    .withMember("plugins", Node.objectNode()
                            .withMember("typescript-codegen", Node.objectNodeBuilder()
                                    .withMember("package", "@aws-sdk/client-" + sdkId.toLowerCase())
                                    // Note that this version is replaced by Lerna when publishing.
                                    .withMember("packageVersion", "3.0.0")
                                    .withMember("packageJson", manifestOverwrites)
                                    .withMember("packageDescription", "AWS SDK for JavaScript "
                                        + clientName + " Client for Node.js, Browser and React Native")
                                    .build()))
                    .build()
            projectionsBuilder.withMember(sdkId + "." + version.toLowerCase(), projectionContents)
        }

        val buildFile = if (!(clientNameProp?.isEmpty() ?: true))
            "smithy-build-" + clientNameProp + ".json"
            else "smithy-build.json"

        file(buildFile).writeText(Node.prettyPrintJson(Node.objectNodeBuilder()
                .withMember("version", "1.0")
                .withMember("projections", projectionsBuilder.build())
                .build()))
    }
}

tasks.register("generate-default-configs-provider", JavaExec::class) {
    classpath = sourceSets["main"].runtimeClasspath
    main = "software.amazon.smithy.aws.typescript.codegen.DefaultsModeConfigGenerator"
    args(listOf(project.properties["defaultsModeConfigOutput"]))
}

// Run the `buildSdk` automatically.
tasks["build"]
        .dependsOn(tasks["generate-smithy-build"])
        .finalizedBy(tasks["buildSdk"])
