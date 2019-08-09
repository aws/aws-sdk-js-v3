import { _UnmarshalledInstanceSummary } from "./_InstanceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a BatchGetDeploymentInstances operation.</p>
 */
export interface BatchGetDeploymentInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the instance.</p>
   */
  instancesSummary?: Array<_UnmarshalledInstanceSummary>;

  /**
   * <p>Information about errors that might have occurred during the API call.</p>
   */
  errorMessage?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
