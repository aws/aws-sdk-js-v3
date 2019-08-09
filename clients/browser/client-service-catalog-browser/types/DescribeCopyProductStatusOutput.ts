import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCopyProductStatusOutput shape
 */
export interface DescribeCopyProductStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the copy product operation.</p>
   */
  CopyProductStatus?: "SUCCEEDED" | "IN_PROGRESS" | "FAILED" | string;

  /**
   * <p>The identifier of the copied product.</p>
   */
  TargetProductId?: string;

  /**
   * <p>The status message.</p>
   */
  StatusDetail?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
