import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This resource is currently unavailable.</p>
 */
export interface ResourceUnavailableException
  extends __ServiceException__<_ResourceUnavailableExceptionDetails> {
  name: "ResourceUnavailableException";
}

export interface _ResourceUnavailableExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>The resource type for this request.</p>
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
