import { _UnmarshalledInstanceSummary } from "./_InstanceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Represents the output of a GetDeploymentInstance operation. </p>
 */
export interface GetDeploymentInstanceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Information about the instance. </p>
   */
  instanceSummary?: _UnmarshalledInstanceSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
