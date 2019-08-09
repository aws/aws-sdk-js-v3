import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A limit is exceeded.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>Limit exceeded.</p>
   */
  ResourceType?:
    | "USER"
    | "GROUP"
    | "NAMESPACE"
    | "DATA_SOURCE"
    | "DATA_SET"
    | "VPC_CONNECTION"
    | "INGESTION"
    | string;

  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}
