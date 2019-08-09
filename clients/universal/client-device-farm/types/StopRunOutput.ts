import { _UnmarshalledRun } from "./_Run";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the results of your stop run attempt.</p>
 */
export interface StopRunOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The run that was stopped.</p>
   */
  run?: _UnmarshalledRun;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
