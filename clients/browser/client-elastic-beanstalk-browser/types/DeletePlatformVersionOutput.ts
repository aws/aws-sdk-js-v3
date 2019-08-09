import { _UnmarshalledPlatformSummary } from "./_PlatformSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeletePlatformVersionOutput shape
 */
export interface DeletePlatformVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Detailed information about the version of the custom platform.</p>
   */
  PlatformSummary?: _UnmarshalledPlatformSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
