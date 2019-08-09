import { _UnmarshalledJob } from "./_Job";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the result of a get job request.</p>
 */
export interface GetJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing information about the requested job.</p>
   */
  job?: _UnmarshalledJob;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
