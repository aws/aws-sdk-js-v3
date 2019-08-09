import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource specified doesn't exist. </p>
 */
export interface ResourceExistsException
  extends __ServiceException__<_ResourceExistsExceptionDetails> {
  name: "ResourceExistsException";
}

export interface _ResourceExistsExceptionDetails {
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
