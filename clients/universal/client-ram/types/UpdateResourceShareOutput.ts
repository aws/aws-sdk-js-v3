import { _UnmarshalledResourceShare } from "./_ResourceShare";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateResourceShareOutput shape
 */
export interface UpdateResourceShareOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the resource share.</p>
   */
  resourceShare?: _UnmarshalledResourceShare;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
