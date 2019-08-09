import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more resources can't be found.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>The AWS request ID for this request.</p>
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
