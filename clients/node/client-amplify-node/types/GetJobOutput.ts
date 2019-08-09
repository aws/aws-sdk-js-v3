import { _UnmarshalledJob } from "./_Job";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetJobOutput shape
 */
export interface GetJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Structure for an execution job for an Amplify App. </p>
   */
  job: _UnmarshalledJob;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
