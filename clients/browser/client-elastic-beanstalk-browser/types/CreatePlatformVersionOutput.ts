import { _UnmarshalledPlatformSummary } from "./_PlatformSummary";
import { _UnmarshalledBuilder } from "./_Builder";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreatePlatformVersionOutput shape
 */
export interface CreatePlatformVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Detailed information about the new version of the custom platform.</p>
   */
  PlatformSummary?: _UnmarshalledPlatformSummary;

  /**
   * <p>The builder used to create the custom platform.</p>
   */
  Builder?: _UnmarshalledBuilder;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
