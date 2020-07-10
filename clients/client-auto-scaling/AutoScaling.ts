import { AutoScalingClient } from "./AutoScalingClient";
import {
  AttachInstancesCommand,
  AttachInstancesCommandInput,
  AttachInstancesCommandOutput,
} from "./commands/AttachInstancesCommand";
import {
  AttachLoadBalancerTargetGroupsCommand,
  AttachLoadBalancerTargetGroupsCommandInput,
  AttachLoadBalancerTargetGroupsCommandOutput,
} from "./commands/AttachLoadBalancerTargetGroupsCommand";
import {
  AttachLoadBalancersCommand,
  AttachLoadBalancersCommandInput,
  AttachLoadBalancersCommandOutput,
} from "./commands/AttachLoadBalancersCommand";
import {
  BatchDeleteScheduledActionCommand,
  BatchDeleteScheduledActionCommandInput,
  BatchDeleteScheduledActionCommandOutput,
} from "./commands/BatchDeleteScheduledActionCommand";
import {
  BatchPutScheduledUpdateGroupActionCommand,
  BatchPutScheduledUpdateGroupActionCommandInput,
  BatchPutScheduledUpdateGroupActionCommandOutput,
} from "./commands/BatchPutScheduledUpdateGroupActionCommand";
import {
  CompleteLifecycleActionCommand,
  CompleteLifecycleActionCommandInput,
  CompleteLifecycleActionCommandOutput,
} from "./commands/CompleteLifecycleActionCommand";
import {
  CreateAutoScalingGroupCommand,
  CreateAutoScalingGroupCommandInput,
  CreateAutoScalingGroupCommandOutput,
} from "./commands/CreateAutoScalingGroupCommand";
import {
  CreateLaunchConfigurationCommand,
  CreateLaunchConfigurationCommandInput,
  CreateLaunchConfigurationCommandOutput,
} from "./commands/CreateLaunchConfigurationCommand";
import {
  CreateOrUpdateTagsCommand,
  CreateOrUpdateTagsCommandInput,
  CreateOrUpdateTagsCommandOutput,
} from "./commands/CreateOrUpdateTagsCommand";
import {
  DeleteAutoScalingGroupCommand,
  DeleteAutoScalingGroupCommandInput,
  DeleteAutoScalingGroupCommandOutput,
} from "./commands/DeleteAutoScalingGroupCommand";
import {
  DeleteLaunchConfigurationCommand,
  DeleteLaunchConfigurationCommandInput,
  DeleteLaunchConfigurationCommandOutput,
} from "./commands/DeleteLaunchConfigurationCommand";
import {
  DeleteLifecycleHookCommand,
  DeleteLifecycleHookCommandInput,
  DeleteLifecycleHookCommandOutput,
} from "./commands/DeleteLifecycleHookCommand";
import {
  DeleteNotificationConfigurationCommand,
  DeleteNotificationConfigurationCommandInput,
  DeleteNotificationConfigurationCommandOutput,
} from "./commands/DeleteNotificationConfigurationCommand";
import {
  DeletePolicyCommand,
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "./commands/DeletePolicyCommand";
import {
  DeleteScheduledActionCommand,
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "./commands/DeleteScheduledActionCommand";
import { DeleteTagsCommand, DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand";
import {
  DescribeAdjustmentTypesCommand,
  DescribeAdjustmentTypesCommandInput,
  DescribeAdjustmentTypesCommandOutput,
} from "./commands/DescribeAdjustmentTypesCommand";
import {
  DescribeAutoScalingGroupsCommand,
  DescribeAutoScalingGroupsCommandInput,
  DescribeAutoScalingGroupsCommandOutput,
} from "./commands/DescribeAutoScalingGroupsCommand";
import {
  DescribeAutoScalingInstancesCommand,
  DescribeAutoScalingInstancesCommandInput,
  DescribeAutoScalingInstancesCommandOutput,
} from "./commands/DescribeAutoScalingInstancesCommand";
import {
  DescribeAutoScalingNotificationTypesCommand,
  DescribeAutoScalingNotificationTypesCommandInput,
  DescribeAutoScalingNotificationTypesCommandOutput,
} from "./commands/DescribeAutoScalingNotificationTypesCommand";
import {
  DescribeLaunchConfigurationsCommand,
  DescribeLaunchConfigurationsCommandInput,
  DescribeLaunchConfigurationsCommandOutput,
} from "./commands/DescribeLaunchConfigurationsCommand";
import {
  DescribeLifecycleHookTypesCommand,
  DescribeLifecycleHookTypesCommandInput,
  DescribeLifecycleHookTypesCommandOutput,
} from "./commands/DescribeLifecycleHookTypesCommand";
import {
  DescribeLifecycleHooksCommand,
  DescribeLifecycleHooksCommandInput,
  DescribeLifecycleHooksCommandOutput,
} from "./commands/DescribeLifecycleHooksCommand";
import {
  DescribeLoadBalancerTargetGroupsCommand,
  DescribeLoadBalancerTargetGroupsCommandInput,
  DescribeLoadBalancerTargetGroupsCommandOutput,
} from "./commands/DescribeLoadBalancerTargetGroupsCommand";
import {
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "./commands/DescribeLoadBalancersCommand";
import {
  DescribeMetricCollectionTypesCommand,
  DescribeMetricCollectionTypesCommandInput,
  DescribeMetricCollectionTypesCommandOutput,
} from "./commands/DescribeMetricCollectionTypesCommand";
import {
  DescribeNotificationConfigurationsCommand,
  DescribeNotificationConfigurationsCommandInput,
  DescribeNotificationConfigurationsCommandOutput,
} from "./commands/DescribeNotificationConfigurationsCommand";
import {
  DescribePoliciesCommand,
  DescribePoliciesCommandInput,
  DescribePoliciesCommandOutput,
} from "./commands/DescribePoliciesCommand";
import {
  DescribeScalingActivitiesCommand,
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "./commands/DescribeScalingActivitiesCommand";
import {
  DescribeScalingProcessTypesCommand,
  DescribeScalingProcessTypesCommandInput,
  DescribeScalingProcessTypesCommandOutput,
} from "./commands/DescribeScalingProcessTypesCommand";
import {
  DescribeScheduledActionsCommand,
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "./commands/DescribeScheduledActionsCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  DescribeTerminationPolicyTypesCommand,
  DescribeTerminationPolicyTypesCommandInput,
  DescribeTerminationPolicyTypesCommandOutput,
} from "./commands/DescribeTerminationPolicyTypesCommand";
import {
  DetachInstancesCommand,
  DetachInstancesCommandInput,
  DetachInstancesCommandOutput,
} from "./commands/DetachInstancesCommand";
import {
  DetachLoadBalancerTargetGroupsCommand,
  DetachLoadBalancerTargetGroupsCommandInput,
  DetachLoadBalancerTargetGroupsCommandOutput,
} from "./commands/DetachLoadBalancerTargetGroupsCommand";
import {
  DetachLoadBalancersCommand,
  DetachLoadBalancersCommandInput,
  DetachLoadBalancersCommandOutput,
} from "./commands/DetachLoadBalancersCommand";
import {
  DisableMetricsCollectionCommand,
  DisableMetricsCollectionCommandInput,
  DisableMetricsCollectionCommandOutput,
} from "./commands/DisableMetricsCollectionCommand";
import {
  EnableMetricsCollectionCommand,
  EnableMetricsCollectionCommandInput,
  EnableMetricsCollectionCommandOutput,
} from "./commands/EnableMetricsCollectionCommand";
import {
  EnterStandbyCommand,
  EnterStandbyCommandInput,
  EnterStandbyCommandOutput,
} from "./commands/EnterStandbyCommand";
import {
  ExecutePolicyCommand,
  ExecutePolicyCommandInput,
  ExecutePolicyCommandOutput,
} from "./commands/ExecutePolicyCommand";
import { ExitStandbyCommand, ExitStandbyCommandInput, ExitStandbyCommandOutput } from "./commands/ExitStandbyCommand";
import {
  PutLifecycleHookCommand,
  PutLifecycleHookCommandInput,
  PutLifecycleHookCommandOutput,
} from "./commands/PutLifecycleHookCommand";
import {
  PutNotificationConfigurationCommand,
  PutNotificationConfigurationCommandInput,
  PutNotificationConfigurationCommandOutput,
} from "./commands/PutNotificationConfigurationCommand";
import {
  PutScalingPolicyCommand,
  PutScalingPolicyCommandInput,
  PutScalingPolicyCommandOutput,
} from "./commands/PutScalingPolicyCommand";
import {
  PutScheduledUpdateGroupActionCommand,
  PutScheduledUpdateGroupActionCommandInput,
  PutScheduledUpdateGroupActionCommandOutput,
} from "./commands/PutScheduledUpdateGroupActionCommand";
import {
  RecordLifecycleActionHeartbeatCommand,
  RecordLifecycleActionHeartbeatCommandInput,
  RecordLifecycleActionHeartbeatCommandOutput,
} from "./commands/RecordLifecycleActionHeartbeatCommand";
import {
  ResumeProcessesCommand,
  ResumeProcessesCommandInput,
  ResumeProcessesCommandOutput,
} from "./commands/ResumeProcessesCommand";
import {
  SetDesiredCapacityCommand,
  SetDesiredCapacityCommandInput,
  SetDesiredCapacityCommandOutput,
} from "./commands/SetDesiredCapacityCommand";
import {
  SetInstanceHealthCommand,
  SetInstanceHealthCommandInput,
  SetInstanceHealthCommandOutput,
} from "./commands/SetInstanceHealthCommand";
import {
  SetInstanceProtectionCommand,
  SetInstanceProtectionCommandInput,
  SetInstanceProtectionCommandOutput,
} from "./commands/SetInstanceProtectionCommand";
import {
  SuspendProcessesCommand,
  SuspendProcessesCommandInput,
  SuspendProcessesCommandOutput,
} from "./commands/SuspendProcessesCommand";
import {
  TerminateInstanceInAutoScalingGroupCommand,
  TerminateInstanceInAutoScalingGroupCommandInput,
  TerminateInstanceInAutoScalingGroupCommandOutput,
} from "./commands/TerminateInstanceInAutoScalingGroupCommand";
import {
  UpdateAutoScalingGroupCommand,
  UpdateAutoScalingGroupCommandInput,
  UpdateAutoScalingGroupCommandOutput,
} from "./commands/UpdateAutoScalingGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon EC2 Auto Scaling</fullname>
 *
 *         <p>Amazon EC2 Auto Scaling is designed to automatically launch or terminate EC2 instances based on
 *             user-defined scaling policies, scheduled actions, and health checks. Use this service
 *             with AWS Auto Scaling, Amazon CloudWatch, and Elastic Load Balancing.</p>
 *         <p>For more information, including information about granting IAM users required
 *             permissions for Amazon EC2 Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html">Amazon EC2 Auto Scaling User Guide</a>.</p>
 */
export class AutoScaling extends AutoScalingClient {
  /**
   * <p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p>
   *         <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the
   *             number of instances being attached. If the number of instances being attached plus the
   *             desired capacity of the group exceeds the maximum size of the group, the operation
   *             fails.</p>
   *         <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are
   *             also registered with the load balancer. If there are target groups attached to your Auto Scaling
   *             group, the instances are also registered with the target groups.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 Instances to
   *                 Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public attachInstances(
    args: AttachInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachInstancesCommandOutput>;
  public attachInstances(
    args: AttachInstancesCommandInput,
    cb: (err: any, data?: AttachInstancesCommandOutput) => void
  ): void;
  public attachInstances(
    args: AttachInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachInstancesCommandOutput) => void
  ): void;
  public attachInstances(
    args: AttachInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachInstancesCommandOutput) => void),
    cb?: (err: any, data?: AttachInstancesCommandOutput) => void
  ): Promise<AttachInstancesCommandOutput> | void {
    const command = new AttachInstancesCommand(args);
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
   * <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group.</p>
   *         <p>To attach an Application Load Balancer or a Network Load Balancer instead, see <a>AttachLoadBalancerTargetGroups</a>.</p>
   *         <p>To describe the load balancers for an Auto Scaling group, use <a>DescribeLoadBalancers</a>. To detach the load balancer from the Auto Scaling group,
   *             use <a>DetachLoadBalancers</a>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-load-balancer-asg.html">Attaching a Load
   *                 Balancer to Your Auto Scaling Group</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public attachLoadBalancers(
    args: AttachLoadBalancersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachLoadBalancersCommandOutput>;
  public attachLoadBalancers(
    args: AttachLoadBalancersCommandInput,
    cb: (err: any, data?: AttachLoadBalancersCommandOutput) => void
  ): void;
  public attachLoadBalancers(
    args: AttachLoadBalancersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachLoadBalancersCommandOutput) => void
  ): void;
  public attachLoadBalancers(
    args: AttachLoadBalancersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachLoadBalancersCommandOutput) => void),
    cb?: (err: any, data?: AttachLoadBalancersCommandOutput) => void
  ): Promise<AttachLoadBalancersCommandOutput> | void {
    const command = new AttachLoadBalancersCommand(args);
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
   * <p>Attaches one or more target groups to the specified Auto Scaling group.</p>
   *         <p>To describe the target groups for an Auto Scaling group, use <a>DescribeLoadBalancerTargetGroups</a>. To detach the target group from the
   *             Auto Scaling group, use <a>DetachLoadBalancerTargetGroups</a>.</p>
   *         <p>With Application Load Balancers and Network Load Balancers, instances are registered
   *             as targets with a target group. With Classic Load Balancers, instances are registered
   *             with the load balancer. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-load-balancer-asg.html">Attaching a Load
   *                 Balancer to Your Auto Scaling Group</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public attachLoadBalancerTargetGroups(
    args: AttachLoadBalancerTargetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachLoadBalancerTargetGroupsCommandOutput>;
  public attachLoadBalancerTargetGroups(
    args: AttachLoadBalancerTargetGroupsCommandInput,
    cb: (err: any, data?: AttachLoadBalancerTargetGroupsCommandOutput) => void
  ): void;
  public attachLoadBalancerTargetGroups(
    args: AttachLoadBalancerTargetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachLoadBalancerTargetGroupsCommandOutput) => void
  ): void;
  public attachLoadBalancerTargetGroups(
    args: AttachLoadBalancerTargetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachLoadBalancerTargetGroupsCommandOutput) => void),
    cb?: (err: any, data?: AttachLoadBalancerTargetGroupsCommandOutput) => void
  ): Promise<AttachLoadBalancerTargetGroupsCommandOutput> | void {
    const command = new AttachLoadBalancerTargetGroupsCommand(args);
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
   * <p>Deletes one or more scheduled actions for the specified Auto Scaling group.</p>
   */
  public batchDeleteScheduledAction(
    args: BatchDeleteScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteScheduledActionCommandOutput>;
  public batchDeleteScheduledAction(
    args: BatchDeleteScheduledActionCommandInput,
    cb: (err: any, data?: BatchDeleteScheduledActionCommandOutput) => void
  ): void;
  public batchDeleteScheduledAction(
    args: BatchDeleteScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteScheduledActionCommandOutput) => void
  ): void;
  public batchDeleteScheduledAction(
    args: BatchDeleteScheduledActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteScheduledActionCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteScheduledActionCommandOutput) => void
  ): Promise<BatchDeleteScheduledActionCommandOutput> | void {
    const command = new BatchDeleteScheduledActionCommand(args);
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
   * <p>Creates or updates one or more scheduled scaling actions for an Auto Scaling group. If you
   *             leave a parameter unspecified when updating a scheduled scaling action, the
   *             corresponding value remains unchanged.</p>
   */
  public batchPutScheduledUpdateGroupAction(
    args: BatchPutScheduledUpdateGroupActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutScheduledUpdateGroupActionCommandOutput>;
  public batchPutScheduledUpdateGroupAction(
    args: BatchPutScheduledUpdateGroupActionCommandInput,
    cb: (err: any, data?: BatchPutScheduledUpdateGroupActionCommandOutput) => void
  ): void;
  public batchPutScheduledUpdateGroupAction(
    args: BatchPutScheduledUpdateGroupActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutScheduledUpdateGroupActionCommandOutput) => void
  ): void;
  public batchPutScheduledUpdateGroupAction(
    args: BatchPutScheduledUpdateGroupActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchPutScheduledUpdateGroupActionCommandOutput) => void),
    cb?: (err: any, data?: BatchPutScheduledUpdateGroupActionCommandOutput) => void
  ): Promise<BatchPutScheduledUpdateGroupActionCommandOutput> | void {
    const command = new BatchPutScheduledUpdateGroupActionCommand(args);
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
   * <p>Completes the lifecycle action for the specified token or instance with the specified
   *             result.</p>
   *
   *         <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling
   *             group:</p>
   *         <ol>
   *             <li>
   *                 <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to
   *                     invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates
   *                     instances.</p>
   *             </li>
   *             <li>
   *                 <p>(Optional) Create a notification target and an IAM role. The target can be
   *                     either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to
   *                     publish lifecycle notifications to the target.</p>
   *             </li>
   *             <li>
   *                 <p>Create the lifecycle hook. Specify whether the hook is used when the instances
   *                     launch or terminate.</p>
   *             </li>
   *             <li>
   *                 <p>If you need more time, record the lifecycle action heartbeat to keep the
   *                     instance in a pending state.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>If you finish before the timeout period ends, complete
   *                         the lifecycle action.</b>
   *                </p>
   *             </li>
   *          </ol>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling Lifecycle
   *                 Hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public completeLifecycleAction(
    args: CompleteLifecycleActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteLifecycleActionCommandOutput>;
  public completeLifecycleAction(
    args: CompleteLifecycleActionCommandInput,
    cb: (err: any, data?: CompleteLifecycleActionCommandOutput) => void
  ): void;
  public completeLifecycleAction(
    args: CompleteLifecycleActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteLifecycleActionCommandOutput) => void
  ): void;
  public completeLifecycleAction(
    args: CompleteLifecycleActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CompleteLifecycleActionCommandOutput) => void),
    cb?: (err: any, data?: CompleteLifecycleActionCommandOutput) => void
  ): Promise<CompleteLifecycleActionCommandOutput> | void {
    const command = new CompleteLifecycleActionCommand(args);
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
   * <p>Creates an Auto Scaling group with the specified name and attributes.</p>
   *         <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. For information about
   *             viewing this limit, see <a>DescribeAccountLimits</a>. For information about
   *             updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling Limits</a> in
   *             the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public createAutoScalingGroup(
    args: CreateAutoScalingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAutoScalingGroupCommandOutput>;
  public createAutoScalingGroup(
    args: CreateAutoScalingGroupCommandInput,
    cb: (err: any, data?: CreateAutoScalingGroupCommandOutput) => void
  ): void;
  public createAutoScalingGroup(
    args: CreateAutoScalingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAutoScalingGroupCommandOutput) => void
  ): void;
  public createAutoScalingGroup(
    args: CreateAutoScalingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAutoScalingGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateAutoScalingGroupCommandOutput) => void
  ): Promise<CreateAutoScalingGroupCommandOutput> | void {
    const command = new CreateAutoScalingGroupCommand(args);
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
   * <p>Creates a launch configuration.</p>
   *         <p>If you exceed your maximum limit of launch configurations, the call fails. For
   *             information about viewing this limit, see <a>DescribeAccountLimits</a>. For
   *             information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling Limits</a> in
   *             the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchConfiguration.html">Launch
   *                 Configurations</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public createLaunchConfiguration(
    args: CreateLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLaunchConfigurationCommandOutput>;
  public createLaunchConfiguration(
    args: CreateLaunchConfigurationCommandInput,
    cb: (err: any, data?: CreateLaunchConfigurationCommandOutput) => void
  ): void;
  public createLaunchConfiguration(
    args: CreateLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLaunchConfigurationCommandOutput) => void
  ): void;
  public createLaunchConfiguration(
    args: CreateLaunchConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLaunchConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateLaunchConfigurationCommandOutput) => void
  ): Promise<CreateLaunchConfigurationCommandOutput> | void {
    const command = new CreateLaunchConfigurationCommand(args);
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
   * <p>Creates or updates tags for the specified Auto Scaling group.</p>
   *         <p>When you specify a tag with a key that already exists, the operation overwrites the
   *             previous tag definition, and you do not get an error message.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html">Tagging Auto Scaling Groups and
   *                 Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public createOrUpdateTags(
    args: CreateOrUpdateTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOrUpdateTagsCommandOutput>;
  public createOrUpdateTags(
    args: CreateOrUpdateTagsCommandInput,
    cb: (err: any, data?: CreateOrUpdateTagsCommandOutput) => void
  ): void;
  public createOrUpdateTags(
    args: CreateOrUpdateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrUpdateTagsCommandOutput) => void
  ): void;
  public createOrUpdateTags(
    args: CreateOrUpdateTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOrUpdateTagsCommandOutput) => void),
    cb?: (err: any, data?: CreateOrUpdateTagsCommandOutput) => void
  ): Promise<CreateOrUpdateTagsCommandOutput> | void {
    const command = new CreateOrUpdateTagsCommand(args);
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
   * <p>Deletes the specified Auto Scaling group.</p>
   *         <p>If the group has instances or scaling activities in progress, you must specify the
   *             option to force the deletion in order for it to succeed.</p>
   *         <p>If the group has policies, deleting the group deletes the policies, the underlying
   *             alarm actions, and any alarm that no longer has an associated action.</p>
   *         <p>To remove instances from the Auto Scaling group before deleting it, call <a>DetachInstances</a> with the list of instances and the option to decrement
   *             the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement
   *             instances.</p>
   *         <p>To terminate all instances before deleting the Auto Scaling group, call <a>UpdateAutoScalingGroup</a> and set the minimum size and desired capacity of
   *             the Auto Scaling group to zero.</p>
   */
  public deleteAutoScalingGroup(
    args: DeleteAutoScalingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAutoScalingGroupCommandOutput>;
  public deleteAutoScalingGroup(
    args: DeleteAutoScalingGroupCommandInput,
    cb: (err: any, data?: DeleteAutoScalingGroupCommandOutput) => void
  ): void;
  public deleteAutoScalingGroup(
    args: DeleteAutoScalingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAutoScalingGroupCommandOutput) => void
  ): void;
  public deleteAutoScalingGroup(
    args: DeleteAutoScalingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAutoScalingGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteAutoScalingGroupCommandOutput) => void
  ): Promise<DeleteAutoScalingGroupCommandOutput> | void {
    const command = new DeleteAutoScalingGroupCommand(args);
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
   * <p>Deletes the specified launch configuration.</p>
   *         <p>The launch configuration must not be attached to an Auto Scaling group. When this call
   *             completes, the launch configuration is no longer available for use.</p>
   */
  public deleteLaunchConfiguration(
    args: DeleteLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLaunchConfigurationCommandOutput>;
  public deleteLaunchConfiguration(
    args: DeleteLaunchConfigurationCommandInput,
    cb: (err: any, data?: DeleteLaunchConfigurationCommandOutput) => void
  ): void;
  public deleteLaunchConfiguration(
    args: DeleteLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchConfigurationCommandOutput) => void
  ): void;
  public deleteLaunchConfiguration(
    args: DeleteLaunchConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLaunchConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteLaunchConfigurationCommandOutput) => void
  ): Promise<DeleteLaunchConfigurationCommandOutput> | void {
    const command = new DeleteLaunchConfigurationCommand(args);
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
   * <p>Deletes the specified lifecycle hook.</p>
   *         <p>If there are any outstanding lifecycle actions, they are completed first
   *                 (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating
   *             instances).</p>
   */
  public deleteLifecycleHook(
    args: DeleteLifecycleHookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLifecycleHookCommandOutput>;
  public deleteLifecycleHook(
    args: DeleteLifecycleHookCommandInput,
    cb: (err: any, data?: DeleteLifecycleHookCommandOutput) => void
  ): void;
  public deleteLifecycleHook(
    args: DeleteLifecycleHookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLifecycleHookCommandOutput) => void
  ): void;
  public deleteLifecycleHook(
    args: DeleteLifecycleHookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLifecycleHookCommandOutput) => void),
    cb?: (err: any, data?: DeleteLifecycleHookCommandOutput) => void
  ): Promise<DeleteLifecycleHookCommandOutput> | void {
    const command = new DeleteLifecycleHookCommand(args);
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
   * <p>Deletes the specified notification.</p>
   */
  public deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotificationConfigurationCommandOutput>;
  public deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    cb: (err: any, data?: DeleteNotificationConfigurationCommandOutput) => void
  ): void;
  public deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotificationConfigurationCommandOutput) => void
  ): void;
  public deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNotificationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteNotificationConfigurationCommandOutput) => void
  ): Promise<DeleteNotificationConfigurationCommandOutput> | void {
    const command = new DeleteNotificationConfigurationCommand(args);
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
   * <p>Deletes the specified scaling policy.</p>
   *         <p>Deleting either a step scaling policy or a simple scaling policy deletes the
   *             underlying alarm action, but does not delete the alarm, even if it no longer has an
   *             associated action.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a Scaling
   *                 Policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public deletePolicy(
    args: DeletePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyCommandOutput>;
  public deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeletePolicyCommandOutput) => void
  ): Promise<DeletePolicyCommandOutput> | void {
    const command = new DeletePolicyCommand(args);
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
   * <p>Deletes the specified scheduled action.</p>
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
   * <p>Deletes the specified tags.</p>
   */
  public deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  public deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTagsCommandOutput) => void),
    cb?: (err: any, data?: DeleteTagsCommandOutput) => void
  ): Promise<DeleteTagsCommandOutput> | void {
    const command = new DeleteTagsCommand(args);
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
   * <p>Describes the current Amazon EC2 Auto Scaling resource limits for your AWS account.</p>
   *         <p>For information about requesting an increase in these limits, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling
   *                 Limits</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountLimitsCommandOutput>;
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountLimitsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): Promise<DescribeAccountLimitsCommandOutput> | void {
    const command = new DescribeAccountLimitsCommand(args);
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
   * <p>Describes the policy adjustment types for use with <a>PutScalingPolicy</a>.</p>
   */
  public describeAdjustmentTypes(
    args: DescribeAdjustmentTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAdjustmentTypesCommandOutput>;
  public describeAdjustmentTypes(
    args: DescribeAdjustmentTypesCommandInput,
    cb: (err: any, data?: DescribeAdjustmentTypesCommandOutput) => void
  ): void;
  public describeAdjustmentTypes(
    args: DescribeAdjustmentTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAdjustmentTypesCommandOutput) => void
  ): void;
  public describeAdjustmentTypes(
    args: DescribeAdjustmentTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAdjustmentTypesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAdjustmentTypesCommandOutput) => void
  ): Promise<DescribeAdjustmentTypesCommandOutput> | void {
    const command = new DescribeAdjustmentTypesCommand(args);
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
   * <p>Describes one or more Auto Scaling groups.</p>
   */
  public describeAutoScalingGroups(
    args: DescribeAutoScalingGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutoScalingGroupsCommandOutput>;
  public describeAutoScalingGroups(
    args: DescribeAutoScalingGroupsCommandInput,
    cb: (err: any, data?: DescribeAutoScalingGroupsCommandOutput) => void
  ): void;
  public describeAutoScalingGroups(
    args: DescribeAutoScalingGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutoScalingGroupsCommandOutput) => void
  ): void;
  public describeAutoScalingGroups(
    args: DescribeAutoScalingGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAutoScalingGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAutoScalingGroupsCommandOutput) => void
  ): Promise<DescribeAutoScalingGroupsCommandOutput> | void {
    const command = new DescribeAutoScalingGroupsCommand(args);
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
   * <p>Describes one or more Auto Scaling instances.</p>
   */
  public describeAutoScalingInstances(
    args: DescribeAutoScalingInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutoScalingInstancesCommandOutput>;
  public describeAutoScalingInstances(
    args: DescribeAutoScalingInstancesCommandInput,
    cb: (err: any, data?: DescribeAutoScalingInstancesCommandOutput) => void
  ): void;
  public describeAutoScalingInstances(
    args: DescribeAutoScalingInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutoScalingInstancesCommandOutput) => void
  ): void;
  public describeAutoScalingInstances(
    args: DescribeAutoScalingInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAutoScalingInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAutoScalingInstancesCommandOutput) => void
  ): Promise<DescribeAutoScalingInstancesCommandOutput> | void {
    const command = new DescribeAutoScalingInstancesCommand(args);
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
   * <p>Describes the notification types that are supported by Amazon EC2 Auto Scaling.</p>
   */
  public describeAutoScalingNotificationTypes(
    args: DescribeAutoScalingNotificationTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutoScalingNotificationTypesCommandOutput>;
  public describeAutoScalingNotificationTypes(
    args: DescribeAutoScalingNotificationTypesCommandInput,
    cb: (err: any, data?: DescribeAutoScalingNotificationTypesCommandOutput) => void
  ): void;
  public describeAutoScalingNotificationTypes(
    args: DescribeAutoScalingNotificationTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutoScalingNotificationTypesCommandOutput) => void
  ): void;
  public describeAutoScalingNotificationTypes(
    args: DescribeAutoScalingNotificationTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAutoScalingNotificationTypesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAutoScalingNotificationTypesCommandOutput) => void
  ): Promise<DescribeAutoScalingNotificationTypesCommandOutput> | void {
    const command = new DescribeAutoScalingNotificationTypesCommand(args);
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
   * <p>Describes one or more launch configurations.</p>
   */
  public describeLaunchConfigurations(
    args: DescribeLaunchConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLaunchConfigurationsCommandOutput>;
  public describeLaunchConfigurations(
    args: DescribeLaunchConfigurationsCommandInput,
    cb: (err: any, data?: DescribeLaunchConfigurationsCommandOutput) => void
  ): void;
  public describeLaunchConfigurations(
    args: DescribeLaunchConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLaunchConfigurationsCommandOutput) => void
  ): void;
  public describeLaunchConfigurations(
    args: DescribeLaunchConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLaunchConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLaunchConfigurationsCommandOutput) => void
  ): Promise<DescribeLaunchConfigurationsCommandOutput> | void {
    const command = new DescribeLaunchConfigurationsCommand(args);
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
   * <p>Describes the lifecycle hooks for the specified Auto Scaling group.</p>
   */
  public describeLifecycleHooks(
    args: DescribeLifecycleHooksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLifecycleHooksCommandOutput>;
  public describeLifecycleHooks(
    args: DescribeLifecycleHooksCommandInput,
    cb: (err: any, data?: DescribeLifecycleHooksCommandOutput) => void
  ): void;
  public describeLifecycleHooks(
    args: DescribeLifecycleHooksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLifecycleHooksCommandOutput) => void
  ): void;
  public describeLifecycleHooks(
    args: DescribeLifecycleHooksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLifecycleHooksCommandOutput) => void),
    cb?: (err: any, data?: DescribeLifecycleHooksCommandOutput) => void
  ): Promise<DescribeLifecycleHooksCommandOutput> | void {
    const command = new DescribeLifecycleHooksCommand(args);
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
   * <p>Describes the available types of lifecycle hooks.</p>
   *         <p>The following hook types are supported:</p>
   *         <ul>
   *             <li>
   *                 <p>autoscaling:EC2_INSTANCE_LAUNCHING</p>
   *             </li>
   *             <li>
   *                 <p>autoscaling:EC2_INSTANCE_TERMINATING</p>
   *             </li>
   *          </ul>
   */
  public describeLifecycleHookTypes(
    args: DescribeLifecycleHookTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLifecycleHookTypesCommandOutput>;
  public describeLifecycleHookTypes(
    args: DescribeLifecycleHookTypesCommandInput,
    cb: (err: any, data?: DescribeLifecycleHookTypesCommandOutput) => void
  ): void;
  public describeLifecycleHookTypes(
    args: DescribeLifecycleHookTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLifecycleHookTypesCommandOutput) => void
  ): void;
  public describeLifecycleHookTypes(
    args: DescribeLifecycleHookTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLifecycleHookTypesCommandOutput) => void),
    cb?: (err: any, data?: DescribeLifecycleHookTypesCommandOutput) => void
  ): Promise<DescribeLifecycleHookTypesCommandOutput> | void {
    const command = new DescribeLifecycleHookTypesCommand(args);
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
   * <p>Describes the load balancers for the specified Auto Scaling group.</p>
   *         <p>This operation describes only Classic Load Balancers. If you have Application Load
   *             Balancers or Network Load Balancers, use <a>DescribeLoadBalancerTargetGroups</a> instead.</p>
   */
  public describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoadBalancersCommandOutput>;
  public describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): void;
  public describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): void;
  public describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLoadBalancersCommandOutput) => void),
    cb?: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): Promise<DescribeLoadBalancersCommandOutput> | void {
    const command = new DescribeLoadBalancersCommand(args);
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
   * <p>Describes the target groups for the specified Auto Scaling group.</p>
   */
  public describeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoadBalancerTargetGroupsCommandOutput>;
  public describeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsCommandInput,
    cb: (err: any, data?: DescribeLoadBalancerTargetGroupsCommandOutput) => void
  ): void;
  public describeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoadBalancerTargetGroupsCommandOutput) => void
  ): void;
  public describeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLoadBalancerTargetGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLoadBalancerTargetGroupsCommandOutput) => void
  ): Promise<DescribeLoadBalancerTargetGroupsCommandOutput> | void {
    const command = new DescribeLoadBalancerTargetGroupsCommand(args);
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
   * <p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p>
   *         <p>The <code>GroupStandbyInstances</code> metric is not returned by default. You must
   *             explicitly request this metric when calling <a>EnableMetricsCollection</a>.</p>
   */
  public describeMetricCollectionTypes(
    args: DescribeMetricCollectionTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMetricCollectionTypesCommandOutput>;
  public describeMetricCollectionTypes(
    args: DescribeMetricCollectionTypesCommandInput,
    cb: (err: any, data?: DescribeMetricCollectionTypesCommandOutput) => void
  ): void;
  public describeMetricCollectionTypes(
    args: DescribeMetricCollectionTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMetricCollectionTypesCommandOutput) => void
  ): void;
  public describeMetricCollectionTypes(
    args: DescribeMetricCollectionTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMetricCollectionTypesCommandOutput) => void),
    cb?: (err: any, data?: DescribeMetricCollectionTypesCommandOutput) => void
  ): Promise<DescribeMetricCollectionTypesCommandOutput> | void {
    const command = new DescribeMetricCollectionTypesCommand(args);
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
   * <p>Describes the notification actions associated with the specified Auto Scaling group.</p>
   */
  public describeNotificationConfigurations(
    args: DescribeNotificationConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotificationConfigurationsCommandOutput>;
  public describeNotificationConfigurations(
    args: DescribeNotificationConfigurationsCommandInput,
    cb: (err: any, data?: DescribeNotificationConfigurationsCommandOutput) => void
  ): void;
  public describeNotificationConfigurations(
    args: DescribeNotificationConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotificationConfigurationsCommandOutput) => void
  ): void;
  public describeNotificationConfigurations(
    args: DescribeNotificationConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNotificationConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeNotificationConfigurationsCommandOutput) => void
  ): Promise<DescribeNotificationConfigurationsCommandOutput> | void {
    const command = new DescribeNotificationConfigurationsCommand(args);
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
   * <p>Describes the policies for the specified Auto Scaling group.</p>
   */
  public describePolicies(
    args: DescribePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePoliciesCommandOutput>;
  public describePolicies(
    args: DescribePoliciesCommandInput,
    cb: (err: any, data?: DescribePoliciesCommandOutput) => void
  ): void;
  public describePolicies(
    args: DescribePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePoliciesCommandOutput) => void
  ): void;
  public describePolicies(
    args: DescribePoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePoliciesCommandOutput) => void),
    cb?: (err: any, data?: DescribePoliciesCommandOutput) => void
  ): Promise<DescribePoliciesCommandOutput> | void {
    const command = new DescribePoliciesCommand(args);
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
   * <p>Describes one or more scaling activities for the specified Auto Scaling group.</p>
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
   * <p>Describes the scaling process types for use with <a>ResumeProcesses</a> and
   *                 <a>SuspendProcesses</a>.</p>
   */
  public describeScalingProcessTypes(
    args: DescribeScalingProcessTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingProcessTypesCommandOutput>;
  public describeScalingProcessTypes(
    args: DescribeScalingProcessTypesCommandInput,
    cb: (err: any, data?: DescribeScalingProcessTypesCommandOutput) => void
  ): void;
  public describeScalingProcessTypes(
    args: DescribeScalingProcessTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingProcessTypesCommandOutput) => void
  ): void;
  public describeScalingProcessTypes(
    args: DescribeScalingProcessTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScalingProcessTypesCommandOutput) => void),
    cb?: (err: any, data?: DescribeScalingProcessTypesCommandOutput) => void
  ): Promise<DescribeScalingProcessTypesCommandOutput> | void {
    const command = new DescribeScalingProcessTypesCommand(args);
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
   * <p>Describes the actions scheduled for your Auto Scaling group that haven't run or that have not
   *             reached their end time. To describe the actions that have already run, use <a>DescribeScalingActivities</a>.</p>
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
   * <p>Describes the specified tags.</p>
   *         <p>You can use filters to limit the results. For example, you can query for the tags for
   *             a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at
   *             least one of the specified values for it to be included in the results.</p>
   *         <p>You can also specify multiple filters. The result includes information for a
   *             particular tag only if it matches all the filters. If there's no match, no special
   *             message is returned.</p>
   */
  public describeTags(
    args: DescribeTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTagsCommandOutput>;
  public describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTagsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTagsCommandOutput) => void
  ): Promise<DescribeTagsCommandOutput> | void {
    const command = new DescribeTagsCommand(args);
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
   * <p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html">Controlling Which Auto Scaling
   *                 Instances Terminate During Scale In</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public describeTerminationPolicyTypes(
    args: DescribeTerminationPolicyTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTerminationPolicyTypesCommandOutput>;
  public describeTerminationPolicyTypes(
    args: DescribeTerminationPolicyTypesCommandInput,
    cb: (err: any, data?: DescribeTerminationPolicyTypesCommandOutput) => void
  ): void;
  public describeTerminationPolicyTypes(
    args: DescribeTerminationPolicyTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTerminationPolicyTypesCommandOutput) => void
  ): void;
  public describeTerminationPolicyTypes(
    args: DescribeTerminationPolicyTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTerminationPolicyTypesCommandOutput) => void),
    cb?: (err: any, data?: DescribeTerminationPolicyTypesCommandOutput) => void
  ): Promise<DescribeTerminationPolicyTypesCommandOutput> | void {
    const command = new DescribeTerminationPolicyTypesCommand(args);
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
   * <p>Removes one or more instances from the specified Auto Scaling group.</p>
   *         <p>After the instances are detached, you can manage them independent of the Auto Scaling
   *             group.</p>
   *         <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches
   *             instances to replace the ones that are detached.</p>
   *         <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are
   *             deregistered from the load balancer. If there are target groups attached to the Auto Scaling
   *             group, the instances are deregistered from the target groups.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 Instances from
   *                 Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public detachInstances(
    args: DetachInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachInstancesCommandOutput>;
  public detachInstances(
    args: DetachInstancesCommandInput,
    cb: (err: any, data?: DetachInstancesCommandOutput) => void
  ): void;
  public detachInstances(
    args: DetachInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachInstancesCommandOutput) => void
  ): void;
  public detachInstances(
    args: DetachInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachInstancesCommandOutput) => void),
    cb?: (err: any, data?: DetachInstancesCommandOutput) => void
  ): Promise<DetachInstancesCommandOutput> | void {
    const command = new DetachInstancesCommand(args);
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
   * <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p>
   *         <p>This operation detaches only Classic Load Balancers. If you have Application Load
   *             Balancers or Network Load Balancers, use <a>DetachLoadBalancerTargetGroups</a> instead.</p>
   *         <p>When you detach a load balancer, it enters the <code>Removing</code> state while
   *             deregistering the instances in the group. When all instances are deregistered, then you
   *             can no longer describe the load balancer using <a>DescribeLoadBalancers</a>.
   *             The instances remain running.</p>
   */
  public detachLoadBalancers(
    args: DetachLoadBalancersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachLoadBalancersCommandOutput>;
  public detachLoadBalancers(
    args: DetachLoadBalancersCommandInput,
    cb: (err: any, data?: DetachLoadBalancersCommandOutput) => void
  ): void;
  public detachLoadBalancers(
    args: DetachLoadBalancersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachLoadBalancersCommandOutput) => void
  ): void;
  public detachLoadBalancers(
    args: DetachLoadBalancersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachLoadBalancersCommandOutput) => void),
    cb?: (err: any, data?: DetachLoadBalancersCommandOutput) => void
  ): Promise<DetachLoadBalancersCommandOutput> | void {
    const command = new DetachLoadBalancersCommand(args);
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
   * <p>Detaches one or more target groups from the specified Auto Scaling group.</p>
   */
  public detachLoadBalancerTargetGroups(
    args: DetachLoadBalancerTargetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachLoadBalancerTargetGroupsCommandOutput>;
  public detachLoadBalancerTargetGroups(
    args: DetachLoadBalancerTargetGroupsCommandInput,
    cb: (err: any, data?: DetachLoadBalancerTargetGroupsCommandOutput) => void
  ): void;
  public detachLoadBalancerTargetGroups(
    args: DetachLoadBalancerTargetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachLoadBalancerTargetGroupsCommandOutput) => void
  ): void;
  public detachLoadBalancerTargetGroups(
    args: DetachLoadBalancerTargetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachLoadBalancerTargetGroupsCommandOutput) => void),
    cb?: (err: any, data?: DetachLoadBalancerTargetGroupsCommandOutput) => void
  ): Promise<DetachLoadBalancerTargetGroupsCommandOutput> | void {
    const command = new DetachLoadBalancerTargetGroupsCommand(args);
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
   * <p>Disables group metrics for the specified Auto Scaling group.</p>
   */
  public disableMetricsCollection(
    args: DisableMetricsCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableMetricsCollectionCommandOutput>;
  public disableMetricsCollection(
    args: DisableMetricsCollectionCommandInput,
    cb: (err: any, data?: DisableMetricsCollectionCommandOutput) => void
  ): void;
  public disableMetricsCollection(
    args: DisableMetricsCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableMetricsCollectionCommandOutput) => void
  ): void;
  public disableMetricsCollection(
    args: DisableMetricsCollectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableMetricsCollectionCommandOutput) => void),
    cb?: (err: any, data?: DisableMetricsCollectionCommandOutput) => void
  ): Promise<DisableMetricsCollectionCommandOutput> | void {
    const command = new DisableMetricsCollectionCommand(args);
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
   * <p>Enables group metrics for the specified Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-monitoring.html">Monitoring Your Auto Scaling Groups and Instances</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public enableMetricsCollection(
    args: EnableMetricsCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableMetricsCollectionCommandOutput>;
  public enableMetricsCollection(
    args: EnableMetricsCollectionCommandInput,
    cb: (err: any, data?: EnableMetricsCollectionCommandOutput) => void
  ): void;
  public enableMetricsCollection(
    args: EnableMetricsCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableMetricsCollectionCommandOutput) => void
  ): void;
  public enableMetricsCollection(
    args: EnableMetricsCollectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableMetricsCollectionCommandOutput) => void),
    cb?: (err: any, data?: EnableMetricsCollectionCommandOutput) => void
  ): Promise<EnableMetricsCollectionCommandOutput> | void {
    const command = new EnableMetricsCollectionCommand(args);
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
   * <p>Moves the specified instances into the standby state.</p>
   *         <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can
   *             enter standby as long as the desired capacity of the Auto Scaling group after the instances are
   *             placed into standby is equal to or greater than the minimum capacity of the
   *             group.</p>
   *         <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group
   *             launches new instances to replace the instances on standby.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily Removing
   *                 Instances from Your Auto Scaling Group</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public enterStandby(
    args: EnterStandbyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnterStandbyCommandOutput>;
  public enterStandby(args: EnterStandbyCommandInput, cb: (err: any, data?: EnterStandbyCommandOutput) => void): void;
  public enterStandby(
    args: EnterStandbyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnterStandbyCommandOutput) => void
  ): void;
  public enterStandby(
    args: EnterStandbyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnterStandbyCommandOutput) => void),
    cb?: (err: any, data?: EnterStandbyCommandOutput) => void
  ): Promise<EnterStandbyCommandOutput> | void {
    const command = new EnterStandbyCommand(args);
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
   * <p>Executes the specified policy.</p>
   */
  public executePolicy(
    args: ExecutePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecutePolicyCommandOutput>;
  public executePolicy(
    args: ExecutePolicyCommandInput,
    cb: (err: any, data?: ExecutePolicyCommandOutput) => void
  ): void;
  public executePolicy(
    args: ExecutePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecutePolicyCommandOutput) => void
  ): void;
  public executePolicy(
    args: ExecutePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExecutePolicyCommandOutput) => void),
    cb?: (err: any, data?: ExecutePolicyCommandOutput) => void
  ): Promise<ExecutePolicyCommandOutput> | void {
    const command = new ExecutePolicyCommand(args);
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
   * <p>Moves the specified instances out of the standby state.</p>
   *         <p>After you put the instances back in service, the desired capacity is
   *             incremented.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily Removing
   *                 Instances from Your Auto Scaling Group</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public exitStandby(args: ExitStandbyCommandInput, options?: __HttpHandlerOptions): Promise<ExitStandbyCommandOutput>;
  public exitStandby(args: ExitStandbyCommandInput, cb: (err: any, data?: ExitStandbyCommandOutput) => void): void;
  public exitStandby(
    args: ExitStandbyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExitStandbyCommandOutput) => void
  ): void;
  public exitStandby(
    args: ExitStandbyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExitStandbyCommandOutput) => void),
    cb?: (err: any, data?: ExitStandbyCommandOutput) => void
  ): Promise<ExitStandbyCommandOutput> | void {
    const command = new ExitStandbyCommand(args);
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
   * <p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p>
   *         <p>A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance
   *             launches (before it is put into service) or as the instance terminates (before it is
   *             fully terminated).</p>
   *
   *         <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling
   *             group:</p>
   *         <ol>
   *             <li>
   *                 <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to
   *                     invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates
   *                     instances.</p>
   *             </li>
   *             <li>
   *                 <p>(Optional) Create a notification target and an IAM role. The target can be
   *                     either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to
   *                     publish lifecycle notifications to the target.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Create the lifecycle hook. Specify whether the hook is
   *                         used when the instances launch or terminate.</b>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>If you need more time, record the lifecycle action heartbeat to keep the
   *                     instance in a pending state using <a>RecordLifecycleActionHeartbeat</a>.</p>
   *             </li>
   *             <li>
   *                 <p>If you finish before the timeout period ends, complete the lifecycle action
   *                     using <a>CompleteLifecycleAction</a>.</p>
   *             </li>
   *          </ol>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling Lifecycle
   *                 Hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *         <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling
   *             group, the call fails.</p>
   *         <p>You can view the lifecycle hooks for an Auto Scaling group using <a>DescribeLifecycleHooks</a>. If you are no longer using a lifecycle hook, you
   *             can delete it using <a>DeleteLifecycleHook</a>.</p>
   */
  public putLifecycleHook(
    args: PutLifecycleHookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLifecycleHookCommandOutput>;
  public putLifecycleHook(
    args: PutLifecycleHookCommandInput,
    cb: (err: any, data?: PutLifecycleHookCommandOutput) => void
  ): void;
  public putLifecycleHook(
    args: PutLifecycleHookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLifecycleHookCommandOutput) => void
  ): void;
  public putLifecycleHook(
    args: PutLifecycleHookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutLifecycleHookCommandOutput) => void),
    cb?: (err: any, data?: PutLifecycleHookCommandOutput) => void
  ): Promise<PutLifecycleHookCommandOutput> | void {
    const command = new PutLifecycleHookCommand(args);
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
   * <p>Configures an Auto Scaling group to send notifications when specified events take place.
   *             Subscribers to the specified topic can have messages delivered to an endpoint such as a
   *             web server or an email address.</p>
   *         <p>This configuration overwrites any existing configuration.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS
   *                 Notifications When Your Auto Scaling Group Scales</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public putNotificationConfiguration(
    args: PutNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutNotificationConfigurationCommandOutput>;
  public putNotificationConfiguration(
    args: PutNotificationConfigurationCommandInput,
    cb: (err: any, data?: PutNotificationConfigurationCommandOutput) => void
  ): void;
  public putNotificationConfiguration(
    args: PutNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutNotificationConfigurationCommandOutput) => void
  ): void;
  public putNotificationConfiguration(
    args: PutNotificationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutNotificationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutNotificationConfigurationCommandOutput) => void
  ): Promise<PutNotificationConfigurationCommandOutput> | void {
    const command = new PutNotificationConfigurationCommand(args);
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
   * <p>Creates or updates a scaling policy for an Auto Scaling group. To update an existing scaling
   *             policy, use the existing policy name and set the parameters to change. Any existing
   *             parameter not changed in an update to an existing policy is not changed in this update
   *             request.</p>
   *         <p>For more information about using scaling policies to scale your Auto Scaling group
   *             automatically, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html">Dynamic
   *                 Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
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
   * <p>Creates or updates a scheduled scaling action for an Auto Scaling group. If you leave a
   *             parameter unspecified when updating a scheduled scaling action, the corresponding value
   *             remains unchanged.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled Scaling</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public putScheduledUpdateGroupAction(
    args: PutScheduledUpdateGroupActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutScheduledUpdateGroupActionCommandOutput>;
  public putScheduledUpdateGroupAction(
    args: PutScheduledUpdateGroupActionCommandInput,
    cb: (err: any, data?: PutScheduledUpdateGroupActionCommandOutput) => void
  ): void;
  public putScheduledUpdateGroupAction(
    args: PutScheduledUpdateGroupActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutScheduledUpdateGroupActionCommandOutput) => void
  ): void;
  public putScheduledUpdateGroupAction(
    args: PutScheduledUpdateGroupActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutScheduledUpdateGroupActionCommandOutput) => void),
    cb?: (err: any, data?: PutScheduledUpdateGroupActionCommandOutput) => void
  ): Promise<PutScheduledUpdateGroupActionCommandOutput> | void {
    const command = new PutScheduledUpdateGroupActionCommand(args);
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
   * <p>Records a heartbeat for the lifecycle action associated with the specified token or
   *             instance. This extends the timeout by the length of time defined using <a>PutLifecycleHook</a>.</p>
   *
   *         <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling
   *             group:</p>
   *         <ol>
   *             <li>
   *                 <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to
   *                     invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates
   *                     instances.</p>
   *             </li>
   *             <li>
   *                 <p>(Optional) Create a notification target and an IAM role. The target can be
   *                     either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to
   *                     publish lifecycle notifications to the target.</p>
   *             </li>
   *             <li>
   *                 <p>Create the lifecycle hook. Specify whether the hook is used when the instances
   *                     launch or terminate.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>If you need more time, record the lifecycle action
   *                         heartbeat to keep the instance in a pending state.</b>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>If you finish before the timeout period ends, complete the lifecycle
   *                     action.</p>
   *             </li>
   *          </ol>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroupLifecycle.html">Auto Scaling
   *                 Lifecycle</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public recordLifecycleActionHeartbeat(
    args: RecordLifecycleActionHeartbeatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecordLifecycleActionHeartbeatCommandOutput>;
  public recordLifecycleActionHeartbeat(
    args: RecordLifecycleActionHeartbeatCommandInput,
    cb: (err: any, data?: RecordLifecycleActionHeartbeatCommandOutput) => void
  ): void;
  public recordLifecycleActionHeartbeat(
    args: RecordLifecycleActionHeartbeatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecordLifecycleActionHeartbeatCommandOutput) => void
  ): void;
  public recordLifecycleActionHeartbeat(
    args: RecordLifecycleActionHeartbeatCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RecordLifecycleActionHeartbeatCommandOutput) => void),
    cb?: (err: any, data?: RecordLifecycleActionHeartbeatCommandOutput) => void
  ): Promise<RecordLifecycleActionHeartbeatCommandOutput> | void {
    const command = new RecordLifecycleActionHeartbeatCommand(args);
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
   * <p>Resumes the specified suspended automatic scaling processes, or all suspended process,
   *             for the specified Auto Scaling group.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and
   *                 Resuming Scaling Processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public resumeProcesses(
    args: ResumeProcessesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeProcessesCommandOutput>;
  public resumeProcesses(
    args: ResumeProcessesCommandInput,
    cb: (err: any, data?: ResumeProcessesCommandOutput) => void
  ): void;
  public resumeProcesses(
    args: ResumeProcessesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeProcessesCommandOutput) => void
  ): void;
  public resumeProcesses(
    args: ResumeProcessesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResumeProcessesCommandOutput) => void),
    cb?: (err: any, data?: ResumeProcessesCommandOutput) => void
  ): Promise<ResumeProcessesCommandOutput> | void {
    const command = new ResumeProcessesCommand(args);
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
   * <p>Sets the size of the specified Auto Scaling group.</p>
   *         <p>For more information about desired capacity, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html">What Is
   *                 Amazon EC2 Auto Scaling?</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public setDesiredCapacity(
    args: SetDesiredCapacityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDesiredCapacityCommandOutput>;
  public setDesiredCapacity(
    args: SetDesiredCapacityCommandInput,
    cb: (err: any, data?: SetDesiredCapacityCommandOutput) => void
  ): void;
  public setDesiredCapacity(
    args: SetDesiredCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDesiredCapacityCommandOutput) => void
  ): void;
  public setDesiredCapacity(
    args: SetDesiredCapacityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetDesiredCapacityCommandOutput) => void),
    cb?: (err: any, data?: SetDesiredCapacityCommandOutput) => void
  ): Promise<SetDesiredCapacityCommandOutput> | void {
    const command = new SetDesiredCapacityCommand(args);
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
   * <p>Sets the health status of the specified instance.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health Checks for Auto Scaling
   *                 Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public setInstanceHealth(
    args: SetInstanceHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetInstanceHealthCommandOutput>;
  public setInstanceHealth(
    args: SetInstanceHealthCommandInput,
    cb: (err: any, data?: SetInstanceHealthCommandOutput) => void
  ): void;
  public setInstanceHealth(
    args: SetInstanceHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetInstanceHealthCommandOutput) => void
  ): void;
  public setInstanceHealth(
    args: SetInstanceHealthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetInstanceHealthCommandOutput) => void),
    cb?: (err: any, data?: SetInstanceHealthCommandOutput) => void
  ): Promise<SetInstanceHealthCommandOutput> | void {
    const command = new SetInstanceHealthCommand(args);
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
   * <p>Updates the instance protection settings of the specified instances.</p>
   *         <p>For more information about preventing instances that are part of an Auto Scaling group from
   *             terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance Protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public setInstanceProtection(
    args: SetInstanceProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetInstanceProtectionCommandOutput>;
  public setInstanceProtection(
    args: SetInstanceProtectionCommandInput,
    cb: (err: any, data?: SetInstanceProtectionCommandOutput) => void
  ): void;
  public setInstanceProtection(
    args: SetInstanceProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetInstanceProtectionCommandOutput) => void
  ): void;
  public setInstanceProtection(
    args: SetInstanceProtectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetInstanceProtectionCommandOutput) => void),
    cb?: (err: any, data?: SetInstanceProtectionCommandOutput) => void
  ): Promise<SetInstanceProtectionCommandOutput> | void {
    const command = new SetInstanceProtectionCommand(args);
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
   * <p>Suspends the specified automatic scaling processes, or all processes, for the
   *             specified Auto Scaling group.</p>
   *         <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types,
   *             it can prevent other process types from functioning properly.</p>
   *         <p>To resume processes that have been suspended, use <a>ResumeProcesses</a>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and
   *                 Resuming Scaling Processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  public suspendProcesses(
    args: SuspendProcessesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SuspendProcessesCommandOutput>;
  public suspendProcesses(
    args: SuspendProcessesCommandInput,
    cb: (err: any, data?: SuspendProcessesCommandOutput) => void
  ): void;
  public suspendProcesses(
    args: SuspendProcessesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SuspendProcessesCommandOutput) => void
  ): void;
  public suspendProcesses(
    args: SuspendProcessesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SuspendProcessesCommandOutput) => void),
    cb?: (err: any, data?: SuspendProcessesCommandOutput) => void
  ): Promise<SuspendProcessesCommandOutput> | void {
    const command = new SuspendProcessesCommand(args);
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
   * <p>Terminates the specified instance and optionally adjusts the desired group
   *             size.</p>
   *         <p>This call simply makes a termination request. The instance is not terminated
   *             immediately.</p>
   */
  public terminateInstanceInAutoScalingGroup(
    args: TerminateInstanceInAutoScalingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateInstanceInAutoScalingGroupCommandOutput>;
  public terminateInstanceInAutoScalingGroup(
    args: TerminateInstanceInAutoScalingGroupCommandInput,
    cb: (err: any, data?: TerminateInstanceInAutoScalingGroupCommandOutput) => void
  ): void;
  public terminateInstanceInAutoScalingGroup(
    args: TerminateInstanceInAutoScalingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateInstanceInAutoScalingGroupCommandOutput) => void
  ): void;
  public terminateInstanceInAutoScalingGroup(
    args: TerminateInstanceInAutoScalingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TerminateInstanceInAutoScalingGroupCommandOutput) => void),
    cb?: (err: any, data?: TerminateInstanceInAutoScalingGroupCommandOutput) => void
  ): Promise<TerminateInstanceInAutoScalingGroupCommandOutput> | void {
    const command = new TerminateInstanceInAutoScalingGroupCommand(args);
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
   * <p>Updates the configuration for the specified Auto Scaling group.</p>
   *         <p>To update an Auto Scaling group, specify the name of the group and the parameter that you want
   *             to change. Any parameters that you don't specify are not changed by this update request.
   *             The new settings take effect on any scaling activities after this call returns.
   *             </p>
   *         <p>If you associate a new launch configuration or template with an Auto Scaling group, all new
   *             instances will get the updated configuration. Existing instances continue to run with
   *             the configuration that they were originally launched with. When you update a group to
   *             specify a mixed instances policy instead of a launch configuration or template, existing
   *             instances may be replaced to match the new purchasing options that you specified in the
   *             policy. For example, if the group currently has 100% On-Demand capacity and the policy
   *             specifies 50% Spot capacity, this means that half of your instances will be gradually
   *             terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches
   *             new instances before terminating the old ones, so that updating your group does not
   *             compromise the performance or availability of your application.</p>
   *         <p>Note the following about changing <code>DesiredCapacity</code>, <code>MaxSize</code>,
   *             or <code>MinSize</code>:</p>
   *         <ul>
   *             <li>
   *                 <p>If a scale-in event occurs as a result of a new <code>DesiredCapacity</code>
   *                     value that is lower than the current size of the group, the Auto Scaling group uses its
   *                     termination policy to determine which instances to terminate.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify a new value for <code>MinSize</code> without specifying a value
   *                     for <code>DesiredCapacity</code>, and the new <code>MinSize</code> is larger
   *                     than the current size of the group, this sets the group's
   *                         <code>DesiredCapacity</code> to the new <code>MinSize</code> value.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify a new value for <code>MaxSize</code> without specifying a value
   *                     for <code>DesiredCapacity</code>, and the new <code>MaxSize</code> is smaller
   *                     than the current size of the group, this sets the group's
   *                         <code>DesiredCapacity</code> to the new <code>MaxSize</code> value.</p>
   *             </li>
   *          </ul>
   *         <p>To see which parameters have been set, use <a>DescribeAutoScalingGroups</a>. You can also view the scaling policies for an Auto Scaling group using <a>DescribePolicies</a>. If the group has scaling policies, you can update them
   *             using <a>PutScalingPolicy</a>.</p>
   */
  public updateAutoScalingGroup(
    args: UpdateAutoScalingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAutoScalingGroupCommandOutput>;
  public updateAutoScalingGroup(
    args: UpdateAutoScalingGroupCommandInput,
    cb: (err: any, data?: UpdateAutoScalingGroupCommandOutput) => void
  ): void;
  public updateAutoScalingGroup(
    args: UpdateAutoScalingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAutoScalingGroupCommandOutput) => void
  ): void;
  public updateAutoScalingGroup(
    args: UpdateAutoScalingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAutoScalingGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateAutoScalingGroupCommandOutput) => void
  ): Promise<UpdateAutoScalingGroupCommandOutput> | void {
    const command = new UpdateAutoScalingGroupCommand(args);
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
