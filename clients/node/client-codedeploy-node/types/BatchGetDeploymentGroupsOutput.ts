import { _UnmarshalledDeploymentGroupInfo } from "./_DeploymentGroupInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a BatchGetDeploymentGroups operation.</p>
 */
export interface BatchGetDeploymentGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the deployment groups.</p>
   */
  deploymentGroupsInfo?: Array<_UnmarshalledDeploymentGroupInfo>;

  /**
   * <p>Information about errors that might have occurred during the API call.</p>
   */
  errorMessage?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
