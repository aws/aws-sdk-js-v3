import { _UnmarshalledProject } from "./_Project";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetProjectsOutput shape
 */
export interface BatchGetProjectsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the requested build projects.</p>
   */
  projects?: Array<_UnmarshalledProject>;

  /**
   * <p>The names of build projects for which information could not be found.</p>
   */
  projectsNotFound?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
