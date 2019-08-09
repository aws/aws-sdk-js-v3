import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Parameter Store does not support changing a parameter type in a hierarchy. For example, you can't change a parameter from a String type to a SecureString type. You must create a new, unique parameter.</p>
 */
export interface HierarchyTypeMismatchException
  extends __ServiceException__<_HierarchyTypeMismatchExceptionDetails> {
  name: "HierarchyTypeMismatchException";
}

export interface _HierarchyTypeMismatchExceptionDetails {
  /**
   * <p>Parameter Store does not support changing a parameter type in a hierarchy. For example, you can't change a parameter from a String type to a SecureString type. You must create a new, unique parameter.</p>
   */
  message?: string;
}
