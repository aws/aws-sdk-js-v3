// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ApplicationAutoScalingClient, ApplicationAutoScalingClientConfig } from "./ApplicationAutoScalingClient";
import {
  DeleteScalingPolicyCommand,
  DeleteScalingPolicyCommandInput,
  DeleteScalingPolicyCommandOutput,
} from "./commands/DeleteScalingPolicyCommand";
import {
  DeleteScheduledActionCommand,
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "./commands/DeleteScheduledActionCommand";
import {
  DeregisterScalableTargetCommand,
  DeregisterScalableTargetCommandInput,
  DeregisterScalableTargetCommandOutput,
} from "./commands/DeregisterScalableTargetCommand";
import {
  DescribeScalableTargetsCommand,
  DescribeScalableTargetsCommandInput,
  DescribeScalableTargetsCommandOutput,
} from "./commands/DescribeScalableTargetsCommand";
import {
  DescribeScalingActivitiesCommand,
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "./commands/DescribeScalingActivitiesCommand";
import {
  DescribeScalingPoliciesCommand,
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "./commands/DescribeScalingPoliciesCommand";
import {
  DescribeScheduledActionsCommand,
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "./commands/DescribeScheduledActionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutScalingPolicyCommand,
  PutScalingPolicyCommandInput,
  PutScalingPolicyCommandOutput,
} from "./commands/PutScalingPolicyCommand";
import {
  PutScheduledActionCommand,
  PutScheduledActionCommandInput,
  PutScheduledActionCommandOutput,
} from "./commands/PutScheduledActionCommand";
import {
  RegisterScalableTargetCommand,
  RegisterScalableTargetCommandInput,
  RegisterScalableTargetCommandOutput,
} from "./commands/RegisterScalableTargetCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";

const commands = {
  DeleteScalingPolicyCommand,
  DeleteScheduledActionCommand,
  DeregisterScalableTargetCommand,
  DescribeScalableTargetsCommand,
  DescribeScalingActivitiesCommand,
  DescribeScalingPoliciesCommand,
  DescribeScheduledActionsCommand,
  ListTagsForResourceCommand,
  PutScalingPolicyCommand,
  PutScheduledActionCommand,
  RegisterScalableTargetCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface ApplicationAutoScaling {
  /**
   * @see {@link DeleteScalingPolicyCommand}
   */
  deleteScalingPolicy(
    args: DeleteScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScalingPolicyCommandOutput>;
  deleteScalingPolicy(
    args: DeleteScalingPolicyCommandInput,
    cb: (err: any, data?: DeleteScalingPolicyCommandOutput) => void
  ): void;
  deleteScalingPolicy(
    args: DeleteScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScalingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduledActionCommand}
   */
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduledActionCommandOutput>;
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterScalableTargetCommand}
   */
  deregisterScalableTarget(
    args: DeregisterScalableTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterScalableTargetCommandOutput>;
  deregisterScalableTarget(
    args: DeregisterScalableTargetCommandInput,
    cb: (err: any, data?: DeregisterScalableTargetCommandOutput) => void
  ): void;
  deregisterScalableTarget(
    args: DeregisterScalableTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterScalableTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScalableTargetsCommand}
   */
  describeScalableTargets(
    args: DescribeScalableTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalableTargetsCommandOutput>;
  describeScalableTargets(
    args: DescribeScalableTargetsCommandInput,
    cb: (err: any, data?: DescribeScalableTargetsCommandOutput) => void
  ): void;
  describeScalableTargets(
    args: DescribeScalableTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalableTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScalingActivitiesCommand}
   */
  describeScalingActivities(
    args: DescribeScalingActivitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingActivitiesCommandOutput>;
  describeScalingActivities(
    args: DescribeScalingActivitiesCommandInput,
    cb: (err: any, data?: DescribeScalingActivitiesCommandOutput) => void
  ): void;
  describeScalingActivities(
    args: DescribeScalingActivitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingActivitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScalingPoliciesCommand}
   */
  describeScalingPolicies(
    args: DescribeScalingPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingPoliciesCommandOutput>;
  describeScalingPolicies(
    args: DescribeScalingPoliciesCommandInput,
    cb: (err: any, data?: DescribeScalingPoliciesCommandOutput) => void
  ): void;
  describeScalingPolicies(
    args: DescribeScalingPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScheduledActionsCommand}
   */
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduledActionsCommandOutput>;
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): void;
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutScalingPolicyCommand}
   */
  putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutScalingPolicyCommandOutput>;
  putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    cb: (err: any, data?: PutScalingPolicyCommandOutput) => void
  ): void;
  putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutScalingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutScheduledActionCommand}
   */
  putScheduledAction(
    args: PutScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutScheduledActionCommandOutput>;
  putScheduledAction(
    args: PutScheduledActionCommandInput,
    cb: (err: any, data?: PutScheduledActionCommandOutput) => void
  ): void;
  putScheduledAction(
    args: PutScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterScalableTargetCommand}
   */
  registerScalableTarget(
    args: RegisterScalableTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterScalableTargetCommandOutput>;
  registerScalableTarget(
    args: RegisterScalableTargetCommandInput,
    cb: (err: any, data?: RegisterScalableTargetCommandOutput) => void
  ): void;
  registerScalableTarget(
    args: RegisterScalableTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterScalableTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>With Application Auto Scaling, you can configure automatic scaling for the following
 *       resources:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon AppStream 2.0 fleets</p>
 *             </li>
 *             <li>
 *                <p>Amazon Aurora Replicas</p>
 *             </li>
 *             <li>
 *                <p>Amazon Comprehend document classification and entity recognizer endpoints</p>
 *             </li>
 *             <li>
 *                <p>Amazon DynamoDB tables and global secondary indexes throughput capacity</p>
 *             </li>
 *             <li>
 *                <p>Amazon ECS services</p>
 *             </li>
 *             <li>
 *                <p>Amazon ElastiCache for Redis clusters (replication groups)</p>
 *             </li>
 *             <li>
 *                <p>Amazon EMR clusters</p>
 *             </li>
 *             <li>
 *                <p>Amazon Keyspaces (for Apache Cassandra) tables</p>
 *             </li>
 *             <li>
 *                <p>Lambda function provisioned concurrency</p>
 *             </li>
 *             <li>
 *                <p>Amazon Managed Streaming for Apache Kafka broker storage</p>
 *             </li>
 *             <li>
 *                <p>Amazon Neptune clusters</p>
 *             </li>
 *             <li>
 *                <p>Amazon SageMaker endpoint variants</p>
 *             </li>
 *             <li>
 *                <p>Amazon SageMaker Serverless endpoint provisioned concurrency</p>
 *             </li>
 *             <li>
 *                <p>Spot Fleets (Amazon EC2)</p>
 *             </li>
 *             <li>
 *                <p>Custom resources provided by your own applications or services</p>
 *             </li>
 *          </ul>
 *          <p>To learn more about Application Auto Scaling, see the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling User
 *         Guide</a>.</p>
 *          <p>
 *             <b>API Summary</b>
 *          </p>
 *          <p>The Application Auto Scaling service API includes three key sets of actions: </p>
 *          <ul>
 *             <li>
 *                <p>Register and manage scalable targets - Register Amazon Web Services or custom resources as scalable
 *           targets (a resource that Application Auto Scaling can scale), set minimum and maximum capacity limits, and
 *           retrieve information on existing scalable targets.</p>
 *             </li>
 *             <li>
 *                <p>Configure and manage automatic scaling - Define scaling policies to dynamically scale
 *           your resources in response to CloudWatch alarms, schedule one-time or recurring scaling actions,
 *           and retrieve your recent scaling activity history.</p>
 *             </li>
 *             <li>
 *                <p>Suspend and resume scaling - Temporarily suspend and later resume automatic scaling by
 *           calling the <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html">RegisterScalableTarget</a> API action for any Application Auto Scaling scalable target. You can
 *           suspend and resume (individually or in combination) scale-out activities that are
 *           triggered by a scaling policy, scale-in activities that are triggered by a scaling policy,
 *           and scheduled scaling.</p>
 *             </li>
 *          </ul>
 */
export class ApplicationAutoScaling extends ApplicationAutoScalingClient implements ApplicationAutoScaling {}
createAggregatedClient(commands, ApplicationAutoScaling);
