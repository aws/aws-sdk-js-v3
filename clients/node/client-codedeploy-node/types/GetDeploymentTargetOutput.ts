import { _UnmarshalledDeploymentTarget } from "./_DeploymentTarget";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDeploymentTargetOutput shape
 */
export interface GetDeploymentTargetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> A deployment target that contains information about a deployment such as its status, lifecyle events, and when it was last updated. It also contains metadata about the deployment target. The deployment target metadata depends on the deployment target's type (<code>instanceTarget</code>, <code>lambdaTarget</code>, or <code>ecsTarget</code>). </p>
   */
  deploymentTarget?: _UnmarshalledDeploymentTarget;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
