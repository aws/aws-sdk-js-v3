import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the state of the specified resource isn't valid for this request. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 */
export interface KMSInvalidStateException
  extends __ServiceException__<_KMSInvalidStateExceptionDetails> {
  name: "KMSInvalidStateException";
}

export interface _KMSInvalidStateExceptionDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
