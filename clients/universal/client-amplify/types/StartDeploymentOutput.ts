import { _UnmarshalledJobSummary } from "./_JobSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure for start a deployment. </p>
 */
export interface StartDeploymentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Summary for the Job. </p>
   */
  jobSummary: _UnmarshalledJobSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
