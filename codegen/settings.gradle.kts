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

import java.io.FileInputStream
import java.nio.charset.StandardCharsets.UTF_8

rootProject.name = "codegen"
include(":smithy-aws-typescript-codegen")
include(":sdk-codegen")
include(":protocol-test-codegen")
include(":generic-client-test-codegen")

file(
    java.nio.file.Paths.get(rootProject.projectDir.absolutePath, "local.properties"))
    .takeIf { it.isFile }?.let { f ->
        java.util.Properties().apply { load(java.io.InputStreamReader(FileInputStream(f), UTF_8)) }
    }?.run {
        listOf("smithy-typescript", "smithy")
            .map { it to getProperty(it) }
            .filterNot { it.second.isNullOrEmpty() }
            .onEach { println("Found property `${it.first}`: ${it.second}") }
            .map { file(it.second) }
            .filter { it.isDirectory }
            .forEach { includeBuild(it.absolutePath) }
    }
