import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteResourceShareOutput shape
 */
export interface DeleteResourceShareOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Indicates whether the request succeeded.</p>
   */
  returnValue?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
