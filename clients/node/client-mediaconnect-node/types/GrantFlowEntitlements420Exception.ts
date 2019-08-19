import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface GrantFlowEntitlements420Exception
  extends __ServiceException__<_GrantFlowEntitlements420ExceptionDetails> {
  name: "GrantFlowEntitlements420Exception";
}

export interface _GrantFlowEntitlements420ExceptionDetails {
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string;
}
