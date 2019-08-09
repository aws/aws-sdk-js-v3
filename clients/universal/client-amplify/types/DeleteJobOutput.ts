import { _UnmarshalledJobSummary } from "./_JobSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure for the delete job request. </p>
 */
export interface DeleteJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Structure for the summary of a Job. </p>
   */
  jobSummary: _UnmarshalledJobSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
