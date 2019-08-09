import { _UnmarshalledProjectDetails } from "./_ProjectDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure used in response to a request to create a project. </p>
 */
export interface CreateProjectOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Detailed information about the created AWS Mobile Hub project. </p>
   */
  details?: _UnmarshalledProjectDetails;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
