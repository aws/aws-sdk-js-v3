import { _UnmarshalledJob } from "./_Job";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The CreateJobResponse structure.</p>
 */
export interface CreateJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A section of the response body that provides information about the job that is created.</p>
   */
  Job?: _UnmarshalledJob;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
