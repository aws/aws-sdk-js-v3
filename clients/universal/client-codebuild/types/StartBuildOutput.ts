import { _UnmarshalledBuild } from "./_Build";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartBuildOutput shape
 */
export interface StartBuildOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the build to be run.</p>
   */
  build?: _UnmarshalledBuild;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
