/*
 * Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

package software.amazon.smithy.aws.typescript.codegen;

import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.aws.traits.auth.SigV4Trait;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;

/**
 * Utility methods related to AWS traits.
 */
final class AwsTraitsUtils {

    private AwsTraitsUtils() {}

    static boolean isAwsService(TypeScriptSettings settings, Model model) {
        return isAwsService(settings.getService(model));
    }

    static boolean isAwsService(ServiceShape serviceShape) {
        return serviceShape.hasTrait(ServiceTrait.class);
    }

    static boolean isSigV4Service(TypeScriptSettings settings, Model model) {
        return isSigV4Service(settings.getService(model));
    }

    static boolean isSigV4Service(ServiceShape serviceShape) {
        return serviceShape.hasTrait(SigV4Trait.class);
    }
}
