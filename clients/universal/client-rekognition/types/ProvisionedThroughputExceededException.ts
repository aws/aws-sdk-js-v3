import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.</p>
 */
export interface ProvisionedThroughputExceededException
  extends __ServiceException__<_ProvisionedThroughputExceededExceptionDetails> {
  name: "ProvisionedThroughputExceededException";
}

export interface _ProvisionedThroughputExceededExceptionDetails {}
