import { _UnmarshalledSigningJob } from "./_SigningJob";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSigningJobsOutput shape
 */
export interface ListSigningJobsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of your signing jobs.</p>
   */
  jobs?: Array<_UnmarshalledSigningJob>;

  /**
   * <p>String for specifying the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
