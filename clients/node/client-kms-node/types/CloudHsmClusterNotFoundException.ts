import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because AWS KMS cannot find the AWS CloudHSM cluster with the specified cluster ID. Retry the request with a different cluster ID.</p>
 */
export interface CloudHsmClusterNotFoundException
  extends __ServiceException__<_CloudHsmClusterNotFoundExceptionDetails> {
  name: "CloudHsmClusterNotFoundException";
}

export interface _CloudHsmClusterNotFoundExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  message?: string;
}
