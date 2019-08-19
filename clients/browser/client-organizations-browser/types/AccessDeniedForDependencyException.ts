import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation that you attempted requires you to have the <code>iam:CreateServiceLinkedRole</code> for <code>organizations.amazonaws.com</code> permission so that AWS Organizations can create the required service-linked role. You don't have that permission.</p>
 */
export interface AccessDeniedForDependencyException
  extends __ServiceException__<_AccessDeniedForDependencyExceptionDetails> {
  name: "AccessDeniedForDependencyException";
}

export interface _AccessDeniedForDependencyExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;

  /**
   * _AccessDeniedForDependencyExceptionReason shape
   */
  Reason?: "ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE" | string;
}
