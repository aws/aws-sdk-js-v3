package software.amazon.smithy.aws.typescript.codegen.propertyaccess;

import java.util.regex.Pattern;

public class PropertyAccessor {
    /**
     * Starts with alpha or underscore, and contains only alphanumeric and underscores. 
     */
    public static final Pattern validJavaScriptPropertyName = Pattern.compile("^(?![0-9])[a-zA-Z0-9$_]+$");

    /**
     * @param propertyName - property being accessed.
     * @return brackets wrapping the name if it's not a valid JavaScript property name.
     */
    public static String getPropertyAccessor(String propertyName) {
        if (validJavaScriptPropertyName.matcher(propertyName).matches()) {
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
