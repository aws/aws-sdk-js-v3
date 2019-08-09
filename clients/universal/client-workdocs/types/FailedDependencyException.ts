import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.</p>
 */
export interface FailedDependencyException
  extends __ServiceException__<_FailedDependencyExceptionDetails> {
  name: "FailedDependencyException";
}

export interface _FailedDependencyExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
