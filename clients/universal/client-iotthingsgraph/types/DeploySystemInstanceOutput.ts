import { _UnmarshalledSystemInstanceSummary } from "./_SystemInstanceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeploySystemInstanceOutput shape
 */
export interface DeploySystemInstanceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains summary information about a system instance that was deployed. </p>
   */
  summary: _UnmarshalledSystemInstanceSummary;

  /**
   * <p>The ID of the Greengrass deployment used to deploy the system instance.</p>
   */
  greengrassDeploymentId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
