import { _UnmarshalledBuild } from "./_Build";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StopBuildOutput shape
 */
export interface StopBuildOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the build.</p>
   */
  build?: _UnmarshalledBuild;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
