import { AutoScalingClient } from "./AutoScalingClient";
import { AlreadyExistsFault } from "./types/AlreadyExistsFault";
import { AttachInstancesInput } from "./types/AttachInstancesInput";
import { AttachInstancesOutput } from "./types/AttachInstancesOutput";
import { AttachLoadBalancerTargetGroupsInput } from "./types/AttachLoadBalancerTargetGroupsInput";
import { AttachLoadBalancerTargetGroupsOutput } from "./types/AttachLoadBalancerTargetGroupsOutput";
import { AttachLoadBalancersInput } from "./types/AttachLoadBalancersInput";
import { AttachLoadBalancersOutput } from "./types/AttachLoadBalancersOutput";
import { BatchDeleteScheduledActionInput } from "./types/BatchDeleteScheduledActionInput";
import { BatchDeleteScheduledActionOutput } from "./types/BatchDeleteScheduledActionOutput";
import { BatchPutScheduledUpdateGroupActionInput } from "./types/BatchPutScheduledUpdateGroupActionInput";
import { BatchPutScheduledUpdateGroupActionOutput } from "./types/BatchPutScheduledUpdateGroupActionOutput";
import { CompleteLifecycleActionInput } from "./types/CompleteLifecycleActionInput";
import { CompleteLifecycleActionOutput } from "./types/CompleteLifecycleActionOutput";
import { CreateAutoScalingGroupInput } from "./types/CreateAutoScalingGroupInput";
import { CreateAutoScalingGroupOutput } from "./types/CreateAutoScalingGroupOutput";
import { CreateLaunchConfigurationInput } from "./types/CreateLaunchConfigurationInput";
import { CreateLaunchConfigurationOutput } from "./types/CreateLaunchConfigurationOutput";
import { CreateOrUpdateTagsInput } from "./types/CreateOrUpdateTagsInput";
import { CreateOrUpdateTagsOutput } from "./types/CreateOrUpdateTagsOutput";
import { DeleteAutoScalingGroupInput } from "./types/DeleteAutoScalingGroupInput";
import { DeleteAutoScalingGroupOutput } from "./types/DeleteAutoScalingGroupOutput";
import { DeleteLaunchConfigurationInput } from "./types/DeleteLaunchConfigurationInput";
import { DeleteLaunchConfigurationOutput } from "./types/DeleteLaunchConfigurationOutput";
import { DeleteLifecycleHookInput } from "./types/DeleteLifecycleHookInput";
import { DeleteLifecycleHookOutput } from "./types/DeleteLifecycleHookOutput";
import { DeleteNotificationConfigurationInput } from "./types/DeleteNotificationConfigurationInput";
import { DeleteNotificationConfigurationOutput } from "./types/DeleteNotificationConfigurationOutput";
import { DeletePolicyInput } from "./types/DeletePolicyInput";
import { DeletePolicyOutput } from "./types/DeletePolicyOutput";
import { DeleteScheduledActionInput } from "./types/DeleteScheduledActionInput";
import { DeleteScheduledActionOutput } from "./types/DeleteScheduledActionOutput";
import { DeleteTagsInput } from "./types/DeleteTagsInput";
import { DeleteTagsOutput } from "./types/DeleteTagsOutput";
import { DescribeAccountLimitsInput } from "./types/DescribeAccountLimitsInput";
import { DescribeAccountLimitsOutput } from "./types/DescribeAccountLimitsOutput";
import { DescribeAdjustmentTypesInput } from "./types/DescribeAdjustmentTypesInput";
import { DescribeAdjustmentTypesOutput } from "./types/DescribeAdjustmentTypesOutput";
import { DescribeAutoScalingGroupsInput } from "./types/DescribeAutoScalingGroupsInput";
import { DescribeAutoScalingGroupsOutput } from "./types/DescribeAutoScalingGroupsOutput";
import { DescribeAutoScalingInstancesInput } from "./types/DescribeAutoScalingInstancesInput";
import { DescribeAutoScalingInstancesOutput } from "./types/DescribeAutoScalingInstancesOutput";
import { DescribeAutoScalingNotificationTypesInput } from "./types/DescribeAutoScalingNotificationTypesInput";
import { DescribeAutoScalingNotificationTypesOutput } from "./types/DescribeAutoScalingNotificationTypesOutput";
import { DescribeLaunchConfigurationsInput } from "./types/DescribeLaunchConfigurationsInput";
import { DescribeLaunchConfigurationsOutput } from "./types/DescribeLaunchConfigurationsOutput";
import { DescribeLifecycleHookTypesInput } from "./types/DescribeLifecycleHookTypesInput";
import { DescribeLifecycleHookTypesOutput } from "./types/DescribeLifecycleHookTypesOutput";
import { DescribeLifecycleHooksInput } from "./types/DescribeLifecycleHooksInput";
import { DescribeLifecycleHooksOutput } from "./types/DescribeLifecycleHooksOutput";
import { DescribeLoadBalancerTargetGroupsInput } from "./types/DescribeLoadBalancerTargetGroupsInput";
import { DescribeLoadBalancerTargetGroupsOutput } from "./types/DescribeLoadBalancerTargetGroupsOutput";
import { DescribeLoadBalancersInput } from "./types/DescribeLoadBalancersInput";
import { DescribeLoadBalancersOutput } from "./types/DescribeLoadBalancersOutput";
import { DescribeMetricCollectionTypesInput } from "./types/DescribeMetricCollectionTypesInput";
import { DescribeMetricCollectionTypesOutput } from "./types/DescribeMetricCollectionTypesOutput";
import { DescribeNotificationConfigurationsInput } from "./types/DescribeNotificationConfigurationsInput";
import { DescribeNotificationConfigurationsOutput } from "./types/DescribeNotificationConfigurationsOutput";
import { DescribePoliciesInput } from "./types/DescribePoliciesInput";
import { DescribePoliciesOutput } from "./types/DescribePoliciesOutput";
import { DescribeScalingActivitiesInput } from "./types/DescribeScalingActivitiesInput";
import { DescribeScalingActivitiesOutput } from "./types/DescribeScalingActivitiesOutput";
import { DescribeScalingProcessTypesInput } from "./types/DescribeScalingProcessTypesInput";
import { DescribeScalingProcessTypesOutput } from "./types/DescribeScalingProcessTypesOutput";
import { DescribeScheduledActionsInput } from "./types/DescribeScheduledActionsInput";
import { DescribeScheduledActionsOutput } from "./types/DescribeScheduledActionsOutput";
import { DescribeTagsInput } from "./types/DescribeTagsInput";
import { DescribeTagsOutput } from "./types/DescribeTagsOutput";
import { DescribeTerminationPolicyTypesInput } from "./types/DescribeTerminationPolicyTypesInput";
import { DescribeTerminationPolicyTypesOutput } from "./types/DescribeTerminationPolicyTypesOutput";
import { DetachInstancesInput } from "./types/DetachInstancesInput";
import { DetachInstancesOutput } from "./types/DetachInstancesOutput";
import { DetachLoadBalancerTargetGroupsInput } from "./types/DetachLoadBalancerTargetGroupsInput";
import { DetachLoadBalancerTargetGroupsOutput } from "./types/DetachLoadBalancerTargetGroupsOutput";
import { DetachLoadBalancersInput } from "./types/DetachLoadBalancersInput";
import { DetachLoadBalancersOutput } from "./types/DetachLoadBalancersOutput";
import { DisableMetricsCollectionInput } from "./types/DisableMetricsCollectionInput";
import { DisableMetricsCollectionOutput } from "./types/DisableMetricsCollectionOutput";
import { EnableMetricsCollectionInput } from "./types/EnableMetricsCollectionInput";
import { EnableMetricsCollectionOutput } from "./types/EnableMetricsCollectionOutput";
import { EnterStandbyInput } from "./types/EnterStandbyInput";
import { EnterStandbyOutput } from "./types/EnterStandbyOutput";
import { ExecutePolicyInput } from "./types/ExecutePolicyInput";
import { ExecutePolicyOutput } from "./types/ExecutePolicyOutput";
import { ExitStandbyInput } from "./types/ExitStandbyInput";
import { ExitStandbyOutput } from "./types/ExitStandbyOutput";
import { InvalidNextToken } from "./types/InvalidNextToken";
import { LimitExceededFault } from "./types/LimitExceededFault";
import { PutLifecycleHookInput } from "./types/PutLifecycleHookInput";
import { PutLifecycleHookOutput } from "./types/PutLifecycleHookOutput";
import { PutNotificationConfigurationInput } from "./types/PutNotificationConfigurationInput";
import { PutNotificationConfigurationOutput } from "./types/PutNotificationConfigurationOutput";
import { PutScalingPolicyInput } from "./types/PutScalingPolicyInput";
import { PutScalingPolicyOutput } from "./types/PutScalingPolicyOutput";
import { PutScheduledUpdateGroupActionInput } from "./types/PutScheduledUpdateGroupActionInput";
import { PutScheduledUpdateGroupActionOutput } from "./types/PutScheduledUpdateGroupActionOutput";
import { RecordLifecycleActionHeartbeatInput } from "./types/RecordLifecycleActionHeartbeatInput";
import { RecordLifecycleActionHeartbeatOutput } from "./types/RecordLifecycleActionHeartbeatOutput";
import { ResourceContentionFault } from "./types/ResourceContentionFault";
import { ResourceInUseFault } from "./types/ResourceInUseFault";
import { ResumeProcessesInput } from "./types/ResumeProcessesInput";
import { ResumeProcessesOutput } from "./types/ResumeProcessesOutput";
import { ScalingActivityInProgressFault } from "./types/ScalingActivityInProgressFault";
import { ServiceLinkedRoleFailure } from "./types/ServiceLinkedRoleFailure";
import { SetDesiredCapacityInput } from "./types/SetDesiredCapacityInput";
import { SetDesiredCapacityOutput } from "./types/SetDesiredCapacityOutput";
import { SetInstanceHealthInput } from "./types/SetInstanceHealthInput";
import { SetInstanceHealthOutput } from "./types/SetInstanceHealthOutput";
import { SetInstanceProtectionInput } from "./types/SetInstanceProtectionInput";
import { SetInstanceProtectionOutput } from "./types/SetInstanceProtectionOutput";
import { SuspendProcessesInput } from "./types/SuspendProcessesInput";
import { SuspendProcessesOutput } from "./types/SuspendProcessesOutput";
import { TerminateInstanceInAutoScalingGroupInput } from "./types/TerminateInstanceInAutoScalingGroupInput";
import { TerminateInstanceInAutoScalingGroupOutput } from "./types/TerminateInstanceInAutoScalingGroupOutput";
import { UpdateAutoScalingGroupInput } from "./types/UpdateAutoScalingGroupInput";
import { UpdateAutoScalingGroupOutput } from "./types/UpdateAutoScalingGroupOutput";
import { AttachInstancesCommand } from "./commands/AttachInstancesCommand";
import { AttachLoadBalancerTargetGroupsCommand } from "./commands/AttachLoadBalancerTargetGroupsCommand";
import { AttachLoadBalancersCommand } from "./commands/AttachLoadBalancersCommand";
import { BatchDeleteScheduledActionCommand } from "./commands/BatchDeleteScheduledActionCommand";
import { BatchPutScheduledUpdateGroupActionCommand } from "./commands/BatchPutScheduledUpdateGroupActionCommand";
import { CompleteLifecycleActionCommand } from "./commands/CompleteLifecycleActionCommand";
import { CreateAutoScalingGroupCommand } from "./commands/CreateAutoScalingGroupCommand";
import { CreateLaunchConfigurationCommand } from "./commands/CreateLaunchConfigurationCommand";
import { CreateOrUpdateTagsCommand } from "./commands/CreateOrUpdateTagsCommand";
import { DeleteAutoScalingGroupCommand } from "./commands/DeleteAutoScalingGroupCommand";
import { DeleteLaunchConfigurationCommand } from "./commands/DeleteLaunchConfigurationCommand";
import { DeleteLifecycleHookCommand } from "./commands/DeleteLifecycleHookCommand";
import { DeleteNotificationConfigurationCommand } from "./commands/DeleteNotificationConfigurationCommand";
import { DeletePolicyCommand } from "./commands/DeletePolicyCommand";
import { DeleteScheduledActionCommand } from "./commands/DeleteScheduledActionCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DescribeAccountLimitsCommand } from "./commands/DescribeAccountLimitsCommand";
import { DescribeAdjustmentTypesCommand } from "./commands/DescribeAdjustmentTypesCommand";
import { DescribeAutoScalingGroupsCommand } from "./commands/DescribeAutoScalingGroupsCommand";
import { DescribeAutoScalingInstancesCommand } from "./commands/DescribeAutoScalingInstancesCommand";
import { DescribeAutoScalingNotificationTypesCommand } from "./commands/DescribeAutoScalingNotificationTypesCommand";
import { DescribeLaunchConfigurationsCommand } from "./commands/DescribeLaunchConfigurationsCommand";
import { DescribeLifecycleHookTypesCommand } from "./commands/DescribeLifecycleHookTypesCommand";
import { DescribeLifecycleHooksCommand } from "./commands/DescribeLifecycleHooksCommand";
import { DescribeLoadBalancerTargetGroupsCommand } from "./commands/DescribeLoadBalancerTargetGroupsCommand";
import { DescribeLoadBalancersCommand } from "./commands/DescribeLoadBalancersCommand";
import { DescribeMetricCollectionTypesCommand } from "./commands/DescribeMetricCollectionTypesCommand";
import { DescribeNotificationConfigurationsCommand } from "./commands/DescribeNotificationConfigurationsCommand";
import { DescribePoliciesCommand } from "./commands/DescribePoliciesCommand";
import { DescribeScalingActivitiesCommand } from "./commands/DescribeScalingActivitiesCommand";
import { DescribeScalingProcessTypesCommand } from "./commands/DescribeScalingProcessTypesCommand";
import { DescribeScheduledActionsCommand } from "./commands/DescribeScheduledActionsCommand";
import { DescribeTagsCommand } from "./commands/DescribeTagsCommand";
import { DescribeTerminationPolicyTypesCommand } from "./commands/DescribeTerminationPolicyTypesCommand";
import { DetachInstancesCommand } from "./commands/DetachInstancesCommand";
import { DetachLoadBalancerTargetGroupsCommand } from "./commands/DetachLoadBalancerTargetGroupsCommand";
import { DetachLoadBalancersCommand } from "./commands/DetachLoadBalancersCommand";
import { DisableMetricsCollectionCommand } from "./commands/DisableMetricsCollectionCommand";
import { EnableMetricsCollectionCommand } from "./commands/EnableMetricsCollectionCommand";
import { EnterStandbyCommand } from "./commands/EnterStandbyCommand";
import { ExecutePolicyCommand } from "./commands/ExecutePolicyCommand";
import { ExitStandbyCommand } from "./commands/ExitStandbyCommand";
import { PutLifecycleHookCommand } from "./commands/PutLifecycleHookCommand";
import { PutNotificationConfigurationCommand } from "./commands/PutNotificationConfigurationCommand";
import { PutScalingPolicyCommand } from "./commands/PutScalingPolicyCommand";
import { PutScheduledUpdateGroupActionCommand } from "./commands/PutScheduledUpdateGroupActionCommand";
import { RecordLifecycleActionHeartbeatCommand } from "./commands/RecordLifecycleActionHeartbeatCommand";
import { ResumeProcessesCommand } from "./commands/ResumeProcessesCommand";
import { SetDesiredCapacityCommand } from "./commands/SetDesiredCapacityCommand";
import { SetInstanceHealthCommand } from "./commands/SetInstanceHealthCommand";
import { SetInstanceProtectionCommand } from "./commands/SetInstanceProtectionCommand";
import { SuspendProcessesCommand } from "./commands/SuspendProcessesCommand";
import { TerminateInstanceInAutoScalingGroupCommand } from "./commands/TerminateInstanceInAutoScalingGroupCommand";
import { UpdateAutoScalingGroupCommand } from "./commands/UpdateAutoScalingGroupCommand";

export class AutoScaling extends AutoScalingClient {
  /**
   * <p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p> <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails.</p> <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 Instances to Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {ServiceLinkedRoleFailure} <p>The service-linked role is not yet ready for use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachInstances(
    args: AttachInstancesInput
  ): Promise<AttachInstancesOutput>;
  public attachInstances(
    args: AttachInstancesInput,
    cb: (err: any, data?: AttachInstancesOutput) => void
  ): void;
  public attachInstances(
    args: AttachInstancesInput,
    cb?: (err: any, data?: AttachInstancesOutput) => void
  ): Promise<AttachInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches one or more target groups to the specified Auto Scaling group. </p> <p>To describe the target groups for an Auto Scaling group, use <a>DescribeLoadBalancerTargetGroups</a>. To detach the target group from the Auto Scaling group, use <a>DetachLoadBalancerTargetGroups</a>.</p> <p>With Application Load Balancers and Network Load Balancers, instances are registered as targets with a target group. With Classic Load Balancers, instances are registered with the load balancer. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-load-balancer-asg.html">Attaching a Load Balancer to Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {ServiceLinkedRoleFailure} <p>The service-linked role is not yet ready for use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachLoadBalancerTargetGroups(
    args: AttachLoadBalancerTargetGroupsInput
  ): Promise<AttachLoadBalancerTargetGroupsOutput>;
  public attachLoadBalancerTargetGroups(
    args: AttachLoadBalancerTargetGroupsInput,
    cb: (err: any, data?: AttachLoadBalancerTargetGroupsOutput) => void
  ): void;
  public attachLoadBalancerTargetGroups(
    args: AttachLoadBalancerTargetGroupsInput,
    cb?: (err: any, data?: AttachLoadBalancerTargetGroupsOutput) => void
  ): Promise<AttachLoadBalancerTargetGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachLoadBalancerTargetGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group.</p> <p>To attach an Application Load Balancer or a Network Load Balancer instead, see <a>AttachLoadBalancerTargetGroups</a>.</p> <p>To describe the load balancers for an Auto Scaling group, use <a>DescribeLoadBalancers</a>. To detach the load balancer from the Auto Scaling group, use <a>DetachLoadBalancers</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-load-balancer-asg.html">Attaching a Load Balancer to Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {ServiceLinkedRoleFailure} <p>The service-linked role is not yet ready for use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachLoadBalancers(
    args: AttachLoadBalancersInput
  ): Promise<AttachLoadBalancersOutput>;
  public attachLoadBalancers(
    args: AttachLoadBalancersInput,
    cb: (err: any, data?: AttachLoadBalancersOutput) => void
  ): void;
  public attachLoadBalancers(
    args: AttachLoadBalancersInput,
    cb?: (err: any, data?: AttachLoadBalancersOutput) => void
  ): Promise<AttachLoadBalancersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachLoadBalancersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes one or more scheduled actions for the specified Auto Scaling group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDeleteScheduledAction(
    args: BatchDeleteScheduledActionInput
  ): Promise<BatchDeleteScheduledActionOutput>;
  public batchDeleteScheduledAction(
    args: BatchDeleteScheduledActionInput,
    cb: (err: any, data?: BatchDeleteScheduledActionOutput) => void
  ): void;
  public batchDeleteScheduledAction(
    args: BatchDeleteScheduledActionInput,
    cb?: (err: any, data?: BatchDeleteScheduledActionOutput) => void
  ): Promise<BatchDeleteScheduledActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDeleteScheduledActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates one or more scheduled scaling actions for an Auto Scaling group. If you leave a parameter unspecified when updating a scheduled scaling action, the corresponding value remains unchanged.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsFault} <p>You already have an Auto Scaling group or launch configuration with this name.</p>
   *   - {LimitExceededFault} <p>You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see <a>DescribeAccountLimits</a>.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchPutScheduledUpdateGroupAction(
    args: BatchPutScheduledUpdateGroupActionInput
  ): Promise<BatchPutScheduledUpdateGroupActionOutput>;
  public batchPutScheduledUpdateGroupAction(
    args: BatchPutScheduledUpdateGroupActionInput,
    cb: (err: any, data?: BatchPutScheduledUpdateGroupActionOutput) => void
  ): void;
  public batchPutScheduledUpdateGroupAction(
    args: BatchPutScheduledUpdateGroupActionInput,
    cb?: (err: any, data?: BatchPutScheduledUpdateGroupActionOutput) => void
  ): Promise<BatchPutScheduledUpdateGroupActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchPutScheduledUpdateGroupActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, complete the lifecycle action.</b> </p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling Lifecycle Hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public completeLifecycleAction(
    args: CompleteLifecycleActionInput
  ): Promise<CompleteLifecycleActionOutput>;
  public completeLifecycleAction(
    args: CompleteLifecycleActionInput,
    cb: (err: any, data?: CompleteLifecycleActionOutput) => void
  ): void;
  public completeLifecycleAction(
    args: CompleteLifecycleActionInput,
    cb?: (err: any, data?: CompleteLifecycleActionOutput) => void
  ): Promise<CompleteLifecycleActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CompleteLifecycleActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Auto Scaling group with the specified name and attributes.</p> <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. For information about viewing this limit, see <a>DescribeAccountLimits</a>. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling Limits</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsFault} <p>You already have an Auto Scaling group or launch configuration with this name.</p>
   *   - {LimitExceededFault} <p>You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see <a>DescribeAccountLimits</a>.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {ServiceLinkedRoleFailure} <p>The service-linked role is not yet ready for use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAutoScalingGroup(
    args: CreateAutoScalingGroupInput
  ): Promise<CreateAutoScalingGroupOutput>;
  public createAutoScalingGroup(
    args: CreateAutoScalingGroupInput,
    cb: (err: any, data?: CreateAutoScalingGroupOutput) => void
  ): void;
  public createAutoScalingGroup(
    args: CreateAutoScalingGroupInput,
    cb?: (err: any, data?: CreateAutoScalingGroupOutput) => void
  ): Promise<CreateAutoScalingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAutoScalingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a launch configuration.</p> <p>If you exceed your maximum limit of launch configurations, the call fails. For information about viewing this limit, see <a>DescribeAccountLimits</a>. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling Limits</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchConfiguration.html">Launch Configurations</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsFault} <p>You already have an Auto Scaling group or launch configuration with this name.</p>
   *   - {LimitExceededFault} <p>You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see <a>DescribeAccountLimits</a>.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLaunchConfiguration(
    args: CreateLaunchConfigurationInput
  ): Promise<CreateLaunchConfigurationOutput>;
  public createLaunchConfiguration(
    args: CreateLaunchConfigurationInput,
    cb: (err: any, data?: CreateLaunchConfigurationOutput) => void
  ): void;
  public createLaunchConfiguration(
    args: CreateLaunchConfigurationInput,
    cb?: (err: any, data?: CreateLaunchConfigurationOutput) => void
  ): Promise<CreateLaunchConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLaunchConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates tags for the specified Auto Scaling group.</p> <p>When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html">Tagging Auto Scaling Groups and Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededFault} <p>You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see <a>DescribeAccountLimits</a>.</p>
   *   - {AlreadyExistsFault} <p>You already have an Auto Scaling group or launch configuration with this name.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {ResourceInUseFault} <p>The operation can't be performed because the resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createOrUpdateTags(
    args: CreateOrUpdateTagsInput
  ): Promise<CreateOrUpdateTagsOutput>;
  public createOrUpdateTags(
    args: CreateOrUpdateTagsInput,
    cb: (err: any, data?: CreateOrUpdateTagsOutput) => void
  ): void;
  public createOrUpdateTags(
    args: CreateOrUpdateTagsInput,
    cb?: (err: any, data?: CreateOrUpdateTagsOutput) => void
  ): Promise<CreateOrUpdateTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateOrUpdateTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed.</p> <p>If the group has policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>To remove instances from the Auto Scaling group before deleting it, call <a>DetachInstances</a> with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call <a>UpdateAutoScalingGroup</a> and set the minimum size and desired capacity of the Auto Scaling group to zero.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ScalingActivityInProgressFault} <p>The operation can't be performed because there are scaling activities in progress.</p>
   *   - {ResourceInUseFault} <p>The operation can't be performed because the resource is in use.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAutoScalingGroup(
    args: DeleteAutoScalingGroupInput
  ): Promise<DeleteAutoScalingGroupOutput>;
  public deleteAutoScalingGroup(
    args: DeleteAutoScalingGroupInput,
    cb: (err: any, data?: DeleteAutoScalingGroupOutput) => void
  ): void;
  public deleteAutoScalingGroup(
    args: DeleteAutoScalingGroupInput,
    cb?: (err: any, data?: DeleteAutoScalingGroupOutput) => void
  ): Promise<DeleteAutoScalingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAutoScalingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseFault} <p>The operation can't be performed because the resource is in use.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLaunchConfiguration(
    args: DeleteLaunchConfigurationInput
  ): Promise<DeleteLaunchConfigurationOutput>;
  public deleteLaunchConfiguration(
    args: DeleteLaunchConfigurationInput,
    cb: (err: any, data?: DeleteLaunchConfigurationOutput) => void
  ): void;
  public deleteLaunchConfiguration(
    args: DeleteLaunchConfigurationInput,
    cb?: (err: any, data?: DeleteLaunchConfigurationOutput) => void
  ): Promise<DeleteLaunchConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLaunchConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLifecycleHook(
    args: DeleteLifecycleHookInput
  ): Promise<DeleteLifecycleHookOutput>;
  public deleteLifecycleHook(
    args: DeleteLifecycleHookInput,
    cb: (err: any, data?: DeleteLifecycleHookOutput) => void
  ): void;
  public deleteLifecycleHook(
    args: DeleteLifecycleHookInput,
    cb?: (err: any, data?: DeleteLifecycleHookOutput) => void
  ): Promise<DeleteLifecycleHookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLifecycleHookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified notification.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationInput
  ): Promise<DeleteNotificationConfigurationOutput>;
  public deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationInput,
    cb: (err: any, data?: DeleteNotificationConfigurationOutput) => void
  ): void;
  public deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationInput,
    cb?: (err: any, data?: DeleteNotificationConfigurationOutput) => void
  ): Promise<DeleteNotificationConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNotificationConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a Scaling Policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {ServiceLinkedRoleFailure} <p>The service-linked role is not yet ready for use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePolicy(args: DeletePolicyInput): Promise<DeletePolicyOutput>;
  public deletePolicy(
    args: DeletePolicyInput,
    cb: (err: any, data?: DeletePolicyOutput) => void
  ): void;
  public deletePolicy(
    args: DeletePolicyInput,
    cb?: (err: any, data?: DeletePolicyOutput) => void
  ): Promise<DeletePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified scheduled action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteScheduledAction(
    args: DeleteScheduledActionInput
  ): Promise<DeleteScheduledActionOutput>;
  public deleteScheduledAction(
    args: DeleteScheduledActionInput,
    cb: (err: any, data?: DeleteScheduledActionOutput) => void
  ): void;
  public deleteScheduledAction(
    args: DeleteScheduledActionInput,
    cb?: (err: any, data?: DeleteScheduledActionOutput) => void
  ): Promise<DeleteScheduledActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteScheduledActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified tags.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {ResourceInUseFault} <p>The operation can't be performed because the resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTags(args: DeleteTagsInput): Promise<DeleteTagsOutput>;
  public deleteTags(
    args: DeleteTagsInput,
    cb: (err: any, data?: DeleteTagsOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsInput,
    cb?: (err: any, data?: DeleteTagsOutput) => void
  ): Promise<DeleteTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the current Amazon EC2 Auto Scaling resource limits for your AWS account.</p> <p>For information about requesting an increase in these limits, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling Limits</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAccountLimits(
    args: DescribeAccountLimitsInput
  ): Promise<DescribeAccountLimitsOutput>;
  public describeAccountLimits(
    args: DescribeAccountLimitsInput,
    cb: (err: any, data?: DescribeAccountLimitsOutput) => void
  ): void;
  public describeAccountLimits(
    args: DescribeAccountLimitsInput,
    cb?: (err: any, data?: DescribeAccountLimitsOutput) => void
  ): Promise<DescribeAccountLimitsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAccountLimitsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the policy adjustment types for use with <a>PutScalingPolicy</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAdjustmentTypes(
    args: DescribeAdjustmentTypesInput
  ): Promise<DescribeAdjustmentTypesOutput>;
  public describeAdjustmentTypes(
    args: DescribeAdjustmentTypesInput,
    cb: (err: any, data?: DescribeAdjustmentTypesOutput) => void
  ): void;
  public describeAdjustmentTypes(
    args: DescribeAdjustmentTypesInput,
    cb?: (err: any, data?: DescribeAdjustmentTypesOutput) => void
  ): Promise<DescribeAdjustmentTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAdjustmentTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more Auto Scaling groups.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextToken} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAutoScalingGroups(
    args: DescribeAutoScalingGroupsInput
  ): Promise<DescribeAutoScalingGroupsOutput>;
  public describeAutoScalingGroups(
    args: DescribeAutoScalingGroupsInput,
    cb: (err: any, data?: DescribeAutoScalingGroupsOutput) => void
  ): void;
  public describeAutoScalingGroups(
    args: DescribeAutoScalingGroupsInput,
    cb?: (err: any, data?: DescribeAutoScalingGroupsOutput) => void
  ): Promise<DescribeAutoScalingGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAutoScalingGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more Auto Scaling instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextToken} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAutoScalingInstances(
    args: DescribeAutoScalingInstancesInput
  ): Promise<DescribeAutoScalingInstancesOutput>;
  public describeAutoScalingInstances(
    args: DescribeAutoScalingInstancesInput,
    cb: (err: any, data?: DescribeAutoScalingInstancesOutput) => void
  ): void;
  public describeAutoScalingInstances(
    args: DescribeAutoScalingInstancesInput,
    cb?: (err: any, data?: DescribeAutoScalingInstancesOutput) => void
  ): Promise<DescribeAutoScalingInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAutoScalingInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the notification types that are supported by Amazon EC2 Auto Scaling.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAutoScalingNotificationTypes(
    args: DescribeAutoScalingNotificationTypesInput
  ): Promise<DescribeAutoScalingNotificationTypesOutput>;
  public describeAutoScalingNotificationTypes(
    args: DescribeAutoScalingNotificationTypesInput,
    cb: (err: any, data?: DescribeAutoScalingNotificationTypesOutput) => void
  ): void;
  public describeAutoScalingNotificationTypes(
    args: DescribeAutoScalingNotificationTypesInput,
    cb?: (err: any, data?: DescribeAutoScalingNotificationTypesOutput) => void
  ): Promise<DescribeAutoScalingNotificationTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAutoScalingNotificationTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more launch configurations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextToken} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLaunchConfigurations(
    args: DescribeLaunchConfigurationsInput
  ): Promise<DescribeLaunchConfigurationsOutput>;
  public describeLaunchConfigurations(
    args: DescribeLaunchConfigurationsInput,
    cb: (err: any, data?: DescribeLaunchConfigurationsOutput) => void
  ): void;
  public describeLaunchConfigurations(
    args: DescribeLaunchConfigurationsInput,
    cb?: (err: any, data?: DescribeLaunchConfigurationsOutput) => void
  ): Promise<DescribeLaunchConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLaunchConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p>autoscaling:EC2_INSTANCE_LAUNCHING</p> </li> <li> <p>autoscaling:EC2_INSTANCE_TERMINATING</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLifecycleHookTypes(
    args: DescribeLifecycleHookTypesInput
  ): Promise<DescribeLifecycleHookTypesOutput>;
  public describeLifecycleHookTypes(
    args: DescribeLifecycleHookTypesInput,
    cb: (err: any, data?: DescribeLifecycleHookTypesOutput) => void
  ): void;
  public describeLifecycleHookTypes(
    args: DescribeLifecycleHookTypesInput,
    cb?: (err: any, data?: DescribeLifecycleHookTypesOutput) => void
  ): Promise<DescribeLifecycleHookTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLifecycleHookTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the lifecycle hooks for the specified Auto Scaling group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLifecycleHooks(
    args: DescribeLifecycleHooksInput
  ): Promise<DescribeLifecycleHooksOutput>;
  public describeLifecycleHooks(
    args: DescribeLifecycleHooksInput,
    cb: (err: any, data?: DescribeLifecycleHooksOutput) => void
  ): void;
  public describeLifecycleHooks(
    args: DescribeLifecycleHooksInput,
    cb?: (err: any, data?: DescribeLifecycleHooksOutput) => void
  ): Promise<DescribeLifecycleHooksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLifecycleHooksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the target groups for the specified Auto Scaling group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsInput
  ): Promise<DescribeLoadBalancerTargetGroupsOutput>;
  public describeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsInput,
    cb: (err: any, data?: DescribeLoadBalancerTargetGroupsOutput) => void
  ): void;
  public describeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsInput,
    cb?: (err: any, data?: DescribeLoadBalancerTargetGroupsOutput) => void
  ): Promise<DescribeLoadBalancerTargetGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLoadBalancerTargetGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers or Network Load Balancers, use <a>DescribeLoadBalancerTargetGroups</a> instead.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLoadBalancers(
    args: DescribeLoadBalancersInput
  ): Promise<DescribeLoadBalancersOutput>;
  public describeLoadBalancers(
    args: DescribeLoadBalancersInput,
    cb: (err: any, data?: DescribeLoadBalancersOutput) => void
  ): void;
  public describeLoadBalancers(
    args: DescribeLoadBalancersInput,
    cb?: (err: any, data?: DescribeLoadBalancersOutput) => void
  ): Promise<DescribeLoadBalancersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLoadBalancersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p> <p>The <code>GroupStandbyInstances</code> metric is not returned by default. You must explicitly request this metric when calling <a>EnableMetricsCollection</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMetricCollectionTypes(
    args: DescribeMetricCollectionTypesInput
  ): Promise<DescribeMetricCollectionTypesOutput>;
  public describeMetricCollectionTypes(
    args: DescribeMetricCollectionTypesInput,
    cb: (err: any, data?: DescribeMetricCollectionTypesOutput) => void
  ): void;
  public describeMetricCollectionTypes(
    args: DescribeMetricCollectionTypesInput,
    cb?: (err: any, data?: DescribeMetricCollectionTypesOutput) => void
  ): Promise<DescribeMetricCollectionTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMetricCollectionTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the notification actions associated with the specified Auto Scaling group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextToken} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeNotificationConfigurations(
    args: DescribeNotificationConfigurationsInput
  ): Promise<DescribeNotificationConfigurationsOutput>;
  public describeNotificationConfigurations(
    args: DescribeNotificationConfigurationsInput,
    cb: (err: any, data?: DescribeNotificationConfigurationsOutput) => void
  ): void;
  public describeNotificationConfigurations(
    args: DescribeNotificationConfigurationsInput,
    cb?: (err: any, data?: DescribeNotificationConfigurationsOutput) => void
  ): Promise<DescribeNotificationConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeNotificationConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the policies for the specified Auto Scaling group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextToken} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {ServiceLinkedRoleFailure} <p>The service-linked role is not yet ready for use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePolicies(
    args: DescribePoliciesInput
  ): Promise<DescribePoliciesOutput>;
  public describePolicies(
    args: DescribePoliciesInput,
    cb: (err: any, data?: DescribePoliciesOutput) => void
  ): void;
  public describePolicies(
    args: DescribePoliciesInput,
    cb?: (err: any, data?: DescribePoliciesOutput) => void
  ): Promise<DescribePoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more scaling activities for the specified Auto Scaling group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextToken} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeScalingActivities(
    args: DescribeScalingActivitiesInput
  ): Promise<DescribeScalingActivitiesOutput>;
  public describeScalingActivities(
    args: DescribeScalingActivitiesInput,
    cb: (err: any, data?: DescribeScalingActivitiesOutput) => void
  ): void;
  public describeScalingActivities(
    args: DescribeScalingActivitiesInput,
    cb?: (err: any, data?: DescribeScalingActivitiesOutput) => void
  ): Promise<DescribeScalingActivitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeScalingActivitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the scaling process types for use with <a>ResumeProcesses</a> and <a>SuspendProcesses</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeScalingProcessTypes(
    args: DescribeScalingProcessTypesInput
  ): Promise<DescribeScalingProcessTypesOutput>;
  public describeScalingProcessTypes(
    args: DescribeScalingProcessTypesInput,
    cb: (err: any, data?: DescribeScalingProcessTypesOutput) => void
  ): void;
  public describeScalingProcessTypes(
    args: DescribeScalingProcessTypesInput,
    cb?: (err: any, data?: DescribeScalingProcessTypesOutput) => void
  ): Promise<DescribeScalingProcessTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeScalingProcessTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the actions scheduled for your Auto Scaling group that haven't run or that have not reached their end time. To describe the actions that have already run, use <a>DescribeScalingActivities</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextToken} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeScheduledActions(
    args: DescribeScheduledActionsInput
  ): Promise<DescribeScheduledActionsOutput>;
  public describeScheduledActions(
    args: DescribeScheduledActionsInput,
    cb: (err: any, data?: DescribeScheduledActionsOutput) => void
  ): void;
  public describeScheduledActions(
    args: DescribeScheduledActionsInput,
    cb?: (err: any, data?: DescribeScheduledActionsOutput) => void
  ): Promise<DescribeScheduledActionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeScheduledActionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified tags.</p> <p>You can use filters to limit the results. For example, you can query for the tags for a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at least one of the specified values for it to be included in the results.</p> <p>You can also specify multiple filters. The result includes information for a particular tag only if it matches all the filters. If there's no match, no special message is returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextToken} <p>The <code>NextToken</code> value is not valid.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTags(args: DescribeTagsInput): Promise<DescribeTagsOutput>;
  public describeTags(
    args: DescribeTagsInput,
    cb: (err: any, data?: DescribeTagsOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsInput,
    cb?: (err: any, data?: DescribeTagsOutput) => void
  ): Promise<DescribeTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html">Controlling Which Auto Scaling Instances Terminate During Scale In</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTerminationPolicyTypes(
    args: DescribeTerminationPolicyTypesInput
  ): Promise<DescribeTerminationPolicyTypesOutput>;
  public describeTerminationPolicyTypes(
    args: DescribeTerminationPolicyTypesInput,
    cb: (err: any, data?: DescribeTerminationPolicyTypesOutput) => void
  ): void;
  public describeTerminationPolicyTypes(
    args: DescribeTerminationPolicyTypesInput,
    cb?: (err: any, data?: DescribeTerminationPolicyTypesOutput) => void
  ): Promise<DescribeTerminationPolicyTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTerminationPolicyTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 Instances from Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachInstances(
    args: DetachInstancesInput
  ): Promise<DetachInstancesOutput>;
  public detachInstances(
    args: DetachInstancesInput,
    cb: (err: any, data?: DetachInstancesOutput) => void
  ): void;
  public detachInstances(
    args: DetachInstancesInput,
    cb?: (err: any, data?: DetachInstancesOutput) => void
  ): Promise<DetachInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches one or more target groups from the specified Auto Scaling group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachLoadBalancerTargetGroups(
    args: DetachLoadBalancerTargetGroupsInput
  ): Promise<DetachLoadBalancerTargetGroupsOutput>;
  public detachLoadBalancerTargetGroups(
    args: DetachLoadBalancerTargetGroupsInput,
    cb: (err: any, data?: DetachLoadBalancerTargetGroupsOutput) => void
  ): void;
  public detachLoadBalancerTargetGroups(
    args: DetachLoadBalancerTargetGroupsInput,
    cb?: (err: any, data?: DetachLoadBalancerTargetGroupsOutput) => void
  ): Promise<DetachLoadBalancerTargetGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachLoadBalancerTargetGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers or Network Load Balancers, use <a>DetachLoadBalancerTargetGroups</a> instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using <a>DescribeLoadBalancers</a>. The instances remain running.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachLoadBalancers(
    args: DetachLoadBalancersInput
  ): Promise<DetachLoadBalancersOutput>;
  public detachLoadBalancers(
    args: DetachLoadBalancersInput,
    cb: (err: any, data?: DetachLoadBalancersOutput) => void
  ): void;
  public detachLoadBalancers(
    args: DetachLoadBalancersInput,
    cb?: (err: any, data?: DetachLoadBalancersOutput) => void
  ): Promise<DetachLoadBalancersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachLoadBalancersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables group metrics for the specified Auto Scaling group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableMetricsCollection(
    args: DisableMetricsCollectionInput
  ): Promise<DisableMetricsCollectionOutput>;
  public disableMetricsCollection(
    args: DisableMetricsCollectionInput,
    cb: (err: any, data?: DisableMetricsCollectionOutput) => void
  ): void;
  public disableMetricsCollection(
    args: DisableMetricsCollectionInput,
    cb?: (err: any, data?: DisableMetricsCollectionOutput) => void
  ): Promise<DisableMetricsCollectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableMetricsCollectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables group metrics for the specified Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-monitoring.html">Monitoring Your Auto Scaling Groups and Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableMetricsCollection(
    args: EnableMetricsCollectionInput
  ): Promise<EnableMetricsCollectionOutput>;
  public enableMetricsCollection(
    args: EnableMetricsCollectionInput,
    cb: (err: any, data?: EnableMetricsCollectionOutput) => void
  ): void;
  public enableMetricsCollection(
    args: EnableMetricsCollectionInput,
    cb?: (err: any, data?: EnableMetricsCollectionOutput) => void
  ): Promise<EnableMetricsCollectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableMetricsCollectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Moves the specified instances into the standby state.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily Removing Instances from Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enterStandby(args: EnterStandbyInput): Promise<EnterStandbyOutput>;
  public enterStandby(
    args: EnterStandbyInput,
    cb: (err: any, data?: EnterStandbyOutput) => void
  ): void;
  public enterStandby(
    args: EnterStandbyInput,
    cb?: (err: any, data?: EnterStandbyOutput) => void
  ): Promise<EnterStandbyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnterStandbyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Executes the specified policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ScalingActivityInProgressFault} <p>The operation can't be performed because there are scaling activities in progress.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public executePolicy(args: ExecutePolicyInput): Promise<ExecutePolicyOutput>;
  public executePolicy(
    args: ExecutePolicyInput,
    cb: (err: any, data?: ExecutePolicyOutput) => void
  ): void;
  public executePolicy(
    args: ExecutePolicyInput,
    cb?: (err: any, data?: ExecutePolicyOutput) => void
  ): Promise<ExecutePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExecutePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Moves the specified instances out of the standby state.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily Removing Instances from Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public exitStandby(args: ExitStandbyInput): Promise<ExitStandbyOutput>;
  public exitStandby(
    args: ExitStandbyInput,
    cb: (err: any, data?: ExitStandbyOutput) => void
  ): void;
  public exitStandby(
    args: ExitStandbyInput,
    cb?: (err: any, data?: ExitStandbyOutput) => void
  ): Promise<ExitStandbyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExitStandbyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance launches (before it is put into service) or as the instance terminates (before it is fully terminated).</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state using using <a>RecordLifecycleActionHeartbeat</a>.</p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action using <a>CompleteLifecycleAction</a>.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling Lifecycle Hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using <a>DescribeLifecycleHooks</a>. If you are no longer using a lifecycle hook, you can delete it using <a>DeleteLifecycleHook</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededFault} <p>You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see <a>DescribeAccountLimits</a>.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putLifecycleHook(
    args: PutLifecycleHookInput
  ): Promise<PutLifecycleHookOutput>;
  public putLifecycleHook(
    args: PutLifecycleHookInput,
    cb: (err: any, data?: PutLifecycleHookOutput) => void
  ): void;
  public putLifecycleHook(
    args: PutLifecycleHookInput,
    cb?: (err: any, data?: PutLifecycleHookOutput) => void
  ): Promise<PutLifecycleHookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutLifecycleHookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS Notifications When Your Auto Scaling Group Scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededFault} <p>You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see <a>DescribeAccountLimits</a>.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {ServiceLinkedRoleFailure} <p>The service-linked role is not yet ready for use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putNotificationConfiguration(
    args: PutNotificationConfigurationInput
  ): Promise<PutNotificationConfigurationOutput>;
  public putNotificationConfiguration(
    args: PutNotificationConfigurationInput,
    cb: (err: any, data?: PutNotificationConfigurationOutput) => void
  ): void;
  public putNotificationConfiguration(
    args: PutNotificationConfigurationInput,
    cb?: (err: any, data?: PutNotificationConfigurationOutput) => void
  ): Promise<PutNotificationConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutNotificationConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates a policy for an Auto Scaling group. To update an existing policy, use the existing policy name and set the parameters to change. Any existing parameter not changed in an update to an existing policy is not changed in this update request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededFault} <p>You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see <a>DescribeAccountLimits</a>.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {ServiceLinkedRoleFailure} <p>The service-linked role is not yet ready for use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putScalingPolicy(
    args: PutScalingPolicyInput
  ): Promise<PutScalingPolicyOutput>;
  public putScalingPolicy(
    args: PutScalingPolicyInput,
    cb: (err: any, data?: PutScalingPolicyOutput) => void
  ): void;
  public putScalingPolicy(
    args: PutScalingPolicyInput,
    cb?: (err: any, data?: PutScalingPolicyOutput) => void
  ): Promise<PutScalingPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutScalingPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates a scheduled scaling action for an Auto Scaling group. If you leave a parameter unspecified when updating a scheduled scaling action, the corresponding value remains unchanged.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsFault} <p>You already have an Auto Scaling group or launch configuration with this name.</p>
   *   - {LimitExceededFault} <p>You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see <a>DescribeAccountLimits</a>.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putScheduledUpdateGroupAction(
    args: PutScheduledUpdateGroupActionInput
  ): Promise<PutScheduledUpdateGroupActionOutput>;
  public putScheduledUpdateGroupAction(
    args: PutScheduledUpdateGroupActionInput,
    cb: (err: any, data?: PutScheduledUpdateGroupActionOutput) => void
  ): void;
  public putScheduledUpdateGroupAction(
    args: PutScheduledUpdateGroupActionInput,
    cb?: (err: any, data?: PutScheduledUpdateGroupActionOutput) => void
  ): Promise<PutScheduledUpdateGroupActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutScheduledUpdateGroupActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using <a>PutLifecycleHook</a>.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroupLifecycle.html">Auto Scaling Lifecycle</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public recordLifecycleActionHeartbeat(
    args: RecordLifecycleActionHeartbeatInput
  ): Promise<RecordLifecycleActionHeartbeatOutput>;
  public recordLifecycleActionHeartbeat(
    args: RecordLifecycleActionHeartbeatInput,
    cb: (err: any, data?: RecordLifecycleActionHeartbeatOutput) => void
  ): void;
  public recordLifecycleActionHeartbeat(
    args: RecordLifecycleActionHeartbeatInput,
    cb?: (err: any, data?: RecordLifecycleActionHeartbeatOutput) => void
  ): Promise<RecordLifecycleActionHeartbeatOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RecordLifecycleActionHeartbeatCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resumes the specified suspended automatic scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and Resuming Scaling Processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseFault} <p>The operation can't be performed because the resource is in use.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resumeProcesses(
    args: ResumeProcessesInput
  ): Promise<ResumeProcessesOutput>;
  public resumeProcesses(
    args: ResumeProcessesInput,
    cb: (err: any, data?: ResumeProcessesOutput) => void
  ): void;
  public resumeProcesses(
    args: ResumeProcessesInput,
    cb?: (err: any, data?: ResumeProcessesOutput) => void
  ): Promise<ResumeProcessesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResumeProcessesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the size of the specified Auto Scaling group.</p> <p>For more information about desired capacity, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html">What Is Amazon EC2 Auto Scaling?</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ScalingActivityInProgressFault} <p>The operation can't be performed because there are scaling activities in progress.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setDesiredCapacity(
    args: SetDesiredCapacityInput
  ): Promise<SetDesiredCapacityOutput>;
  public setDesiredCapacity(
    args: SetDesiredCapacityInput,
    cb: (err: any, data?: SetDesiredCapacityOutput) => void
  ): void;
  public setDesiredCapacity(
    args: SetDesiredCapacityInput,
    cb?: (err: any, data?: SetDesiredCapacityOutput) => void
  ): Promise<SetDesiredCapacityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetDesiredCapacityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the health status of the specified instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health Checks for Auto Scaling Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setInstanceHealth(
    args: SetInstanceHealthInput
  ): Promise<SetInstanceHealthOutput>;
  public setInstanceHealth(
    args: SetInstanceHealthInput,
    cb: (err: any, data?: SetInstanceHealthOutput) => void
  ): void;
  public setInstanceHealth(
    args: SetInstanceHealthInput,
    cb?: (err: any, data?: SetInstanceHealthOutput) => void
  ): Promise<SetInstanceHealthOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetInstanceHealthCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the instance protection settings of the specified instances.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance Protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededFault} <p>You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see <a>DescribeAccountLimits</a>.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setInstanceProtection(
    args: SetInstanceProtectionInput
  ): Promise<SetInstanceProtectionOutput>;
  public setInstanceProtection(
    args: SetInstanceProtectionInput,
    cb: (err: any, data?: SetInstanceProtectionOutput) => void
  ): void;
  public setInstanceProtection(
    args: SetInstanceProtectionInput,
    cb?: (err: any, data?: SetInstanceProtectionOutput) => void
  ): Promise<SetInstanceProtectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetInstanceProtectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Suspends the specified automatic scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly.</p> <p>To resume processes that have been suspended, use <a>ResumeProcesses</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and Resuming Scaling Processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseFault} <p>The operation can't be performed because the resource is in use.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public suspendProcesses(
    args: SuspendProcessesInput
  ): Promise<SuspendProcessesOutput>;
  public suspendProcesses(
    args: SuspendProcessesInput,
    cb: (err: any, data?: SuspendProcessesOutput) => void
  ): void;
  public suspendProcesses(
    args: SuspendProcessesInput,
    cb?: (err: any, data?: SuspendProcessesOutput) => void
  ): Promise<SuspendProcessesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SuspendProcessesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Terminates the specified instance and optionally adjusts the desired group size.</p> <p>This call simply makes a termination request. The instance is not terminated immediately.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ScalingActivityInProgressFault} <p>The operation can't be performed because there are scaling activities in progress.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public terminateInstanceInAutoScalingGroup(
    args: TerminateInstanceInAutoScalingGroupInput
  ): Promise<TerminateInstanceInAutoScalingGroupOutput>;
  public terminateInstanceInAutoScalingGroup(
    args: TerminateInstanceInAutoScalingGroupInput,
    cb: (err: any, data?: TerminateInstanceInAutoScalingGroupOutput) => void
  ): void;
  public terminateInstanceInAutoScalingGroup(
    args: TerminateInstanceInAutoScalingGroupInput,
    cb?: (err: any, data?: TerminateInstanceInAutoScalingGroupOutput) => void
  ): Promise<TerminateInstanceInAutoScalingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TerminateInstanceInAutoScalingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the configuration for the specified Auto Scaling group.</p> <p>To update an Auto Scaling group, specify the name of the group and the parameter that you want to change. Any parameters that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns. Scaling activities that are currently in progress aren't affected.</p> <p>If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration, but existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application.</p> <p>Note the following about changing <code>DesiredCapacity</code>, <code>MaxSize</code>, or <code>MinSize</code>:</p> <ul> <li> <p>If a scale-in event occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.</p> </li> <li> <p>If you specify a new value for <code>MinSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MinSize</code> is larger than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MinSize</code> value.</p> </li> <li> <p>If you specify a new value for <code>MaxSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MaxSize</code> is smaller than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MaxSize</code> value.</p> </li> </ul> <p>To see which parameters have been set, use <a>DescribeAutoScalingGroups</a>. You can also view the scaling policies for an Auto Scaling group using <a>DescribePolicies</a>. If the group has scaling policies, you can update them using <a>PutScalingPolicy</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ScalingActivityInProgressFault} <p>The operation can't be performed because there are scaling activities in progress.</p>
   *   - {ResourceContentionFault} <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
   *   - {ServiceLinkedRoleFailure} <p>The service-linked role is not yet ready for use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAutoScalingGroup(
    args: UpdateAutoScalingGroupInput
  ): Promise<UpdateAutoScalingGroupOutput>;
  public updateAutoScalingGroup(
    args: UpdateAutoScalingGroupInput,
    cb: (err: any, data?: UpdateAutoScalingGroupOutput) => void
  ): void;
  public updateAutoScalingGroup(
    args: UpdateAutoScalingGroupInput,
    cb?: (err: any, data?: UpdateAutoScalingGroupOutput) => void
  ): Promise<UpdateAutoScalingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAutoScalingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
