import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetDeploymentTargetsInput shape
 */
export interface BatchGetDeploymentTargetsInput {
  /**
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * <p> The unique IDs of the deployment targets. The compute platform of the deployment determines the type of the targets and their formats. The maximum number of deployment target IDs you can specify is 25.</p> <ul> <li> <p> For deployments that use the EC2/On-premises compute platform, the target IDs are EC2 or on-premises instances IDs, and their target type is <code>instanceTarget</code>. </p> </li> <li> <p> For deployments that use the AWS Lambda compute platform, the target IDs are the names of Lambda functions, and their target type is <code>instanceTarget</code>. </p> </li> <li> <p> For deployments that use the Amazon ECS compute platform, the target IDs are pairs of Amazon ECS clusters and services specified using the format <code>&lt;clustername&gt;:&lt;servicename&gt;</code>. Their target type is <code>ecsTarget</code>. </p> </li> </ul>
   */
  targetIds?: Array<string> | Iterable<string>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
