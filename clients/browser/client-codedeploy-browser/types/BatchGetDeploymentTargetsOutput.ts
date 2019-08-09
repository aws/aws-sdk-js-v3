import { _UnmarshalledDeploymentTarget } from "./_DeploymentTarget";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetDeploymentTargetsOutput shape
 */
export interface BatchGetDeploymentTargetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> A list of target objects for a deployment. Each target object contains details about the target, such as its status and lifecycle events. The type of the target objects depends on the deployment' compute platform. </p> <ul> <li> <p> <b>EC2/On-premises</b>: Each target object is an EC2 or on-premises instance. </p> </li> <li> <p> <b>AWS Lambda</b>: The target object is a specific version of an AWS Lambda function. </p> </li> <li> <p> <b>Amazon ECS</b>: The target object is an Amazon ECS service. </p> </li> </ul>
   */
  deploymentTargets?: Array<_UnmarshalledDeploymentTarget>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
