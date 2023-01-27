// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { ApplicationAutoScalingClient } from "./ApplicationAutoScalingClient";
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

/**
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
 *                <p>Spot Fleets (Amazon EC2)</p>
 *             </li>
 *             <li>
 *                <p>Custom resources provided by your own applications or services</p>
 *             </li>
 *          </ul>
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
 *          <p>To learn more about Application Auto Scaling, including information about granting IAM users required
 *       permissions for Application Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling User
 *         Guide</a>.</p>
 */
export class ApplicationAutoScaling extends ApplicationAutoScalingClient {
  /**
   * <p>Deletes the specified scaling policy for an Application Auto Scaling scalable target.</p>
   *          <p>Deleting a step scaling policy deletes the underlying alarm action, but does not delete
   *          the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated
   *          action.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html#delete-step-scaling-policy">Delete a step scaling policy</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html#delete-target-tracking-policy">Delete a target tracking scaling policy</a> in the
   *             <i>Application Auto Scaling User Guide</i>.</p>
   */
  public deleteScalingPolicy(
    args: DeleteScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScalingPolicyCommandOutput>;
  public deleteScalingPolicy(
    args: DeleteScalingPolicyCommandInput,
    cb: (err: any, data?: DeleteScalingPolicyCommandOutput) => void
  ): void;
  public deleteScalingPolicy(
    args: DeleteScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScalingPolicyCommandOutput) => void
  ): void;
  public deleteScalingPolicy(
    args: DeleteScalingPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteScalingPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteScalingPolicyCommandOutput) => void
  ): Promise<DeleteScalingPolicyCommandOutput> | void {
    const command = new DeleteScalingPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified scheduled action for an Application Auto Scaling scalable target.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html#delete-scheduled-action">Delete a scheduled action</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   */
  public deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduledActionCommandOutput>;
  public deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;
  public deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;
  public deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteScheduledActionCommandOutput) => void),
    cb?: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): Promise<DeleteScheduledActionCommandOutput> | void {
    const command = new DeleteScheduledActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which
   *          resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. </p>
   *          <note>
   *             <p>Deregistering a scalable target deletes the scaling policies and the scheduled
   *             actions that are associated with it.</p>
   *          </note>
   */
  public deregisterScalableTarget(
    args: DeregisterScalableTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterScalableTargetCommandOutput>;
  public deregisterScalableTarget(
    args: DeregisterScalableTargetCommandInput,
    cb: (err: any, data?: DeregisterScalableTargetCommandOutput) => void
  ): void;
  public deregisterScalableTarget(
    args: DeregisterScalableTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterScalableTargetCommandOutput) => void
  ): void;
  public deregisterScalableTarget(
    args: DeregisterScalableTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterScalableTargetCommandOutput) => void),
    cb?: (err: any, data?: DeregisterScalableTargetCommandOutput) => void
  ): Promise<DeregisterScalableTargetCommandOutput> | void {
    const command = new DeregisterScalableTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the scalable targets in the specified namespace.</p>
   *          <p>You can filter the results using <code>ResourceIds</code> and
   *             <code>ScalableDimension</code>.</p>
   */
  public describeScalableTargets(
    args: DescribeScalableTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalableTargetsCommandOutput>;
  public describeScalableTargets(
    args: DescribeScalableTargetsCommandInput,
    cb: (err: any, data?: DescribeScalableTargetsCommandOutput) => void
  ): void;
  public describeScalableTargets(
    args: DescribeScalableTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalableTargetsCommandOutput) => void
  ): void;
  public describeScalableTargets(
    args: DescribeScalableTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScalableTargetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeScalableTargetsCommandOutput) => void
  ): Promise<DescribeScalableTargetsCommandOutput> | void {
    const command = new DescribeScalableTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides descriptive information about the scaling activities in the specified namespace
   *          from the previous six weeks.</p>
   *          <p>You can filter the results using <code>ResourceId</code> and
   *             <code>ScalableDimension</code>.</p>
   *          <p>For information about viewing scaling activities using the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.</p>
   */
  public describeScalingActivities(
    args: DescribeScalingActivitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingActivitiesCommandOutput>;
  public describeScalingActivities(
    args: DescribeScalingActivitiesCommandInput,
    cb: (err: any, data?: DescribeScalingActivitiesCommandOutput) => void
  ): void;
  public describeScalingActivities(
    args: DescribeScalingActivitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingActivitiesCommandOutput) => void
  ): void;
  public describeScalingActivities(
    args: DescribeScalingActivitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScalingActivitiesCommandOutput) => void),
    cb?: (err: any, data?: DescribeScalingActivitiesCommandOutput) => void
  ): Promise<DescribeScalingActivitiesCommandOutput> | void {
    const command = new DescribeScalingActivitiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p>
   *          <p>You can filter the results using <code>ResourceId</code>,
   *          <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   */
  public describeScalingPolicies(
    args: DescribeScalingPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingPoliciesCommandOutput>;
  public describeScalingPolicies(
    args: DescribeScalingPoliciesCommandInput,
    cb: (err: any, data?: DescribeScalingPoliciesCommandOutput) => void
  ): void;
  public describeScalingPolicies(
    args: DescribeScalingPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingPoliciesCommandOutput) => void
  ): void;
  public describeScalingPolicies(
    args: DescribeScalingPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScalingPoliciesCommandOutput) => void),
    cb?: (err: any, data?: DescribeScalingPoliciesCommandOutput) => void
  ): Promise<DescribeScalingPoliciesCommandOutput> | void {
    const command = new DescribeScalingPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p>
   *          <p>You can filter the results using the <code>ResourceId</code>,
   *             <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html">Managing scheduled scaling</a> in the
   *          <i>Application Auto Scaling User Guide</i>.</p>
   */
  public describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduledActionsCommandOutput>;
  public describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): void;
  public describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): void;
  public describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScheduledActionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): Promise<DescribeScheduledActionsCommandOutput> | void {
    const command = new DescribeScheduledActionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p>
   *          <p>Each scalable target is identified by a service namespace, resource ID, and scalable
   *          dimension. A scaling policy applies to the scalable target identified by those three
   *          attributes. You cannot create a scaling policy until you have registered the resource as a
   *          scalable target.</p>
   *          <p>Multiple scaling policies can be in force at the same time for the same scalable target.
   *          You can have one or more target tracking scaling policies, one or more step scaling
   *          policies, or both. However, there is a chance that multiple policies could conflict,
   *          instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives
   *          precedence to the policy that provides the largest capacity for both scale out and scale
   *          in. For example, if one policy increases capacity by 3, another policy increases capacity
   *          by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest
   *          calculated capacity (200% of 10 = 20) and scales out to 30. </p>
   *          <p>We recommend caution, however, when using target tracking scaling policies with step
   *          scaling policies because conflicts between these policies can cause undesirable behavior.
   *          For example, if the step scaling policy initiates a scale-in activity before the target
   *          tracking policy is ready to scale in, the scale-in activity will not be blocked. After the
   *          scale-in activity completes, the target tracking policy could instruct the scalable target
   *          to scale out again. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   *          <note>
   *             <p>If a scalable target is deregistered, the scalable target is no longer available to
   *             execute scaling policies. Any scaling policies that were specified for the scalable
   *             target are deleted.</p>
   *          </note>
   */
  public putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutScalingPolicyCommandOutput>;
  public putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    cb: (err: any, data?: PutScalingPolicyCommandOutput) => void
  ): void;
  public putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutScalingPolicyCommandOutput) => void
  ): void;
  public putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutScalingPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutScalingPolicyCommandOutput) => void
  ): Promise<PutScalingPolicyCommandOutput> | void {
    const command = new PutScalingPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates a scheduled action for an Application Auto Scaling scalable target. </p>
   *          <p>Each scalable target is identified by a service namespace, resource ID, and scalable
   *          dimension. A scheduled action applies to the scalable target identified by those three
   *          attributes. You cannot create a scheduled action until you have registered the resource as
   *          a scalable target.</p>
   *          <p>When start and end times are specified with a recurring schedule using a cron expression
   *          or rates, they form the boundaries for when the recurring action starts and stops.</p>
   *          <p>To update a scheduled action, specify the parameters that you want to change. If you
   *          don't specify start and end times, the old values are deleted.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   *          <note>
   *             <p>If a scalable target is deregistered, the scalable target is no longer available to
   *             run scheduled actions. Any scheduled actions that were specified for the scalable target
   *             are deleted.</p>
   *          </note>
   */
  public putScheduledAction(
    args: PutScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutScheduledActionCommandOutput>;
  public putScheduledAction(
    args: PutScheduledActionCommandInput,
    cb: (err: any, data?: PutScheduledActionCommandOutput) => void
  ): void;
  public putScheduledAction(
    args: PutScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutScheduledActionCommandOutput) => void
  ): void;
  public putScheduledAction(
    args: PutScheduledActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutScheduledActionCommandOutput) => void),
    cb?: (err: any, data?: PutScheduledActionCommandOutput) => void
  ): Promise<PutScheduledActionCommandOutput> | void {
    const command = new PutScheduledActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers or updates a scalable target, the resource that you want to scale.</p>
   *          <p>Scalable targets are uniquely identified by the combination of resource ID, scalable
   *          dimension, and namespace, which represents some capacity dimension of the underlying
   *          service.</p>
   *          <p>When you register a new scalable target, you must specify values for the minimum and
   *          maximum capacity. If the specified resource is not active in the target service, this
   *          operation does not change the resource's current capacity. Otherwise, it changes the
   *          resource's current capacity to a value that is inside of this range.</p>
   *          <p>If you choose to add a scaling policy, current capacity is adjustable within the
   *          specified range when scaling starts. Application Auto Scaling scaling policies will not scale capacity to
   *          values that are outside of the minimum and maximum range.</p>
   *          <p>After you register a scalable target, you do not need to register it again to use other
   *          Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service
   *          namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can
   *          deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p>
   *          <p>To update a scalable target, specify the parameters that you want to change. Include the
   *          parameters that identify the scalable target: resource ID, scalable dimension, and
   *          namespace. Any parameters that you don't specify are not changed by this update request. </p>
   *          <note>
   *             <p>If you call the <code>RegisterScalableTarget</code> API to update an existing
   *             scalable target, Application Auto Scaling retrieves the current capacity of the resource. If it is below
   *             the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the capacity of the
   *             scalable target to place it within these bounds, even if you don't include the
   *                <code>MinCapacity</code> or <code>MaxCapacity</code> request parameters.</p>
   *          </note>
   */
  public registerScalableTarget(
    args: RegisterScalableTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterScalableTargetCommandOutput>;
  public registerScalableTarget(
    args: RegisterScalableTargetCommandInput,
    cb: (err: any, data?: RegisterScalableTargetCommandOutput) => void
  ): void;
  public registerScalableTarget(
    args: RegisterScalableTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterScalableTargetCommandOutput) => void
  ): void;
  public registerScalableTarget(
    args: RegisterScalableTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterScalableTargetCommandOutput) => void),
    cb?: (err: any, data?: RegisterScalableTargetCommandOutput) => void
  ): Promise<RegisterScalableTargetCommandOutput> | void {
    const command = new RegisterScalableTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
