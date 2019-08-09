import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the AWS CloudHSM cluster that is associated with the custom key store is not active. Initialize and activate the cluster and try the command again. For detailed instructions, see <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/getting-started.html">Getting Started</a> in the <i>AWS CloudHSM User Guide</i>.</p>
 */
export interface CloudHsmClusterNotActiveException
  extends __ServiceException__<_CloudHsmClusterNotActiveExceptionDetails> {
  name: "CloudHsmClusterNotActiveException";
}

export interface _CloudHsmClusterNotActiveExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  message?: string;
}
