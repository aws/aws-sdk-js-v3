import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>In order to grant the necessary access to the DDoS Response Team, the user submitting <code>AssociateDRTRole</code> must have the <code>iam:PassRole</code> permission. This error indicates the user did not have the appropriate permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an AWS Service</a>. </p>
 */
export interface AccessDeniedForDependencyException
  extends __ServiceException__<_AccessDeniedForDependencyExceptionDetails> {
  name: "AccessDeniedForDependencyException";
}

export interface _AccessDeniedForDependencyExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
