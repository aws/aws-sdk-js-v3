import { _UnmarshalledSimulationJob } from "./_SimulationJob";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchDescribeSimulationJobOutput shape
 */
export interface BatchDescribeSimulationJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of simulation jobs.</p>
   */
  jobs?: Array<_UnmarshalledSimulationJob>;

  /**
   * <p>A list of unprocessed simulation job Amazon Resource Names (ARNs).</p>
   */
  unprocessedJobs?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
