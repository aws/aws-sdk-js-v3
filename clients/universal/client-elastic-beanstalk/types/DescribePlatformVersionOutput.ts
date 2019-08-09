import { _UnmarshalledPlatformDescription } from "./_PlatformDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePlatformVersionOutput shape
 */
export interface DescribePlatformVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Detailed information about the version of the platform.</p>
   */
  PlatformDescription?: _UnmarshalledPlatformDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
