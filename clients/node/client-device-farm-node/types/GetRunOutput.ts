import { _UnmarshalledRun } from "./_Run";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the result of a get run request.</p>
 */
export interface GetRunOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The run you wish to get results from.</p>
   */
  run?: _UnmarshalledRun;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
