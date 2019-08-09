import { _UnmarshalledProject } from "./_Project";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateProjectOutput shape
 */
export interface UpdateProjectOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the build project that was changed.</p>
   */
  project?: _UnmarshalledProject;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
