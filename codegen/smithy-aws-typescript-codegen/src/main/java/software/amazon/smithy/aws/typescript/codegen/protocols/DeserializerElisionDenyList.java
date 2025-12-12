/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen.protocols;

import java.util.List;
import software.amazon.smithy.utils.ListUtils;

/**
 * Used to opt services out of deserializer elision.
 */
public abstract class DeserializerElisionDenyList {

    public static final List<String> SDK_IDS = ListUtils.of("SageMaker");
}
