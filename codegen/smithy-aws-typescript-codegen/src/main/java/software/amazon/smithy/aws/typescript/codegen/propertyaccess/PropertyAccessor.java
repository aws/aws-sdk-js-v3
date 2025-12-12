/*
 * Copyright 2022 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

package software.amazon.smithy.aws.typescript.codegen.propertyaccess;

import java.util.regex.Pattern;

public final class PropertyAccessor {

    /**
     * Starts with alpha or underscore, and contains only alphanumeric and underscores.
     */
    public static final Pattern VALID_JAVASCRIPT_PROPERTY_NAME = Pattern.compile("^(?![0-9])[a-zA-Z0-9$_]+$");

    private PropertyAccessor() {}

    /**
     * @param propertyName - property being accessed.
     * @return brackets wrapping the name if it's not a valid JavaScript property name.
     */
    public static String getPropertyAccessor(String propertyName) {
        if (VALID_JAVASCRIPT_PROPERTY_NAME.matcher(propertyName).matches()) {
            return "." + propertyName;
        }
        if (propertyName.contains("\"")) {
            // This doesn't handle cases of the special characters being pre-escaped in the propertyName,
            // but that case does not currently need to be addressed.
            return "[`" + propertyName + "`]";
        }
        return "[\"" + propertyName + "\"]";
    }

    /**
     * @param variable - object host.
     * @param propertyName - property being accessed.
     * @return e.g. someObject.prop or someObject['property name'] or reluctantly someObject[`bad"property"name`].
     */
    public static String getFrom(String variable, String propertyName) {
        return variable + getPropertyAccessor(propertyName);
    }
}
