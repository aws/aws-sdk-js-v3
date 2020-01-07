import { AutoScalingClient } from "./AutoScalingClient";
import { AttachInstancesCommandInput, AttachInstancesCommandOutput } from "./commands/AttachInstancesCommand";
import { AttachLoadBalancerTargetGroupsCommandInput, AttachLoadBalancerTargetGroupsCommandOutput } from "./commands/AttachLoadBalancerTargetGroupsCommand";
import { AttachLoadBalancersCommandInput, AttachLoadBalancersCommandOutput } from "./commands/AttachLoadBalancersCommand";
import { BatchDeleteScheduledActionCommandInput, BatchDeleteScheduledActionCommandOutput } from "./commands/BatchDeleteScheduledActionCommand";
import { BatchPutScheduledUpdateGroupActionCommandInput, BatchPutScheduledUpdateGroupActionCommandOutput } from "./commands/BatchPutScheduledUpdateGroupActionCommand";
import { CompleteLifecycleActionCommandInput, CompleteLifecycleActionCommandOutput } from "./commands/CompleteLifecycleActionCommand";
import { CreateAutoScalingGroupCommandInput, CreateAutoScalingGroupCommandOutput } from "./commands/CreateAutoScalingGroupCommand";
import { CreateLaunchConfigurationCommandInput, CreateLaunchConfigurationCommandOutput } from "./commands/CreateLaunchConfigurationCommand";
import { CreateOrUpdateTagsCommandInput, CreateOrUpdateTagsCommandOutput } from "./commands/CreateOrUpdateTagsCommand";
import { DeleteAutoScalingGroupCommandInput, DeleteAutoScalingGroupCommandOutput } from "./commands/DeleteAutoScalingGroupCommand";
import { DeleteLaunchConfigurationCommandInput, DeleteLaunchConfigurationCommandOutput } from "./commands/DeleteLaunchConfigurationCommand";
import { DeleteLifecycleHookCommandInput, DeleteLifecycleHookCommandOutput } from "./commands/DeleteLifecycleHookCommand";
import { DeleteNotificationConfigurationCommandInput, DeleteNotificationConfigurationCommandOutput } from "./commands/DeleteNotificationConfigurationCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import { DeleteScheduledActionCommandInput, DeleteScheduledActionCommandOutput } from "./commands/DeleteScheduledActionCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DescribeAccountLimitsCommandInput, DescribeAccountLimitsCommandOutput } from "./commands/DescribeAccountLimitsCommand";
import { DescribeAdjustmentTypesCommandInput, DescribeAdjustmentTypesCommandOutput } from "./commands/DescribeAdjustmentTypesCommand";
import { DescribeAutoScalingGroupsCommandInput, DescribeAutoScalingGroupsCommandOutput } from "./commands/DescribeAutoScalingGroupsCommand";
import { DescribeAutoScalingInstancesCommandInput, DescribeAutoScalingInstancesCommandOutput } from "./commands/DescribeAutoScalingInstancesCommand";
import { DescribeAutoScalingNotificationTypesCommandInput, DescribeAutoScalingNotificationTypesCommandOutput } from "./commands/DescribeAutoScalingNotificationTypesCommand";
import { DescribeLaunchConfigurationsCommandInput, DescribeLaunchConfigurationsCommandOutput } from "./commands/DescribeLaunchConfigurationsCommand";
import { DescribeLifecycleHookTypesCommandInput, DescribeLifecycleHookTypesCommandOutput } from "./commands/DescribeLifecycleHookTypesCommand";
import { DescribeLifecycleHooksCommandInput, DescribeLifecycleHooksCommandOutput } from "./commands/DescribeLifecycleHooksCommand";
import { DescribeLoadBalancerTargetGroupsCommandInput, DescribeLoadBalancerTargetGroupsCommandOutput } from "./commands/DescribeLoadBalancerTargetGroupsCommand";
import { DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput } from "./commands/DescribeLoadBalancersCommand";
import { DescribeMetricCollectionTypesCommandInput, DescribeMetricCollectionTypesCommandOutput } from "./commands/DescribeMetricCollectionTypesCommand";
import { DescribeNotificationConfigurationsCommandInput, DescribeNotificationConfigurationsCommandOutput } from "./commands/DescribeNotificationConfigurationsCommand";
import { DescribePoliciesCommandInput, DescribePoliciesCommandOutput } from "./commands/DescribePoliciesCommand";
import { DescribeScalingActivitiesCommandInput, DescribeScalingActivitiesCommandOutput } from "./commands/DescribeScalingActivitiesCommand";
import { DescribeScalingProcessTypesCommandInput, DescribeScalingProcessTypesCommandOutput } from "./commands/DescribeScalingProcessTypesCommand";
import { DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput } from "./commands/DescribeScheduledActionsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import { DescribeTerminationPolicyTypesCommandInput, DescribeTerminationPolicyTypesCommandOutput } from "./commands/DescribeTerminationPolicyTypesCommand";
import { DetachInstancesCommandInput, DetachInstancesCommandOutput } from "./commands/DetachInstancesCommand";
import { DetachLoadBalancerTargetGroupsCommandInput, DetachLoadBalancerTargetGroupsCommandOutput } from "./commands/DetachLoadBalancerTargetGroupsCommand";
import { DetachLoadBalancersCommandInput, DetachLoadBalancersCommandOutput } from "./commands/DetachLoadBalancersCommand";
import { DisableMetricsCollectionCommandInput, DisableMetricsCollectionCommandOutput } from "./commands/DisableMetricsCollectionCommand";
import { EnableMetricsCollectionCommandInput, EnableMetricsCollectionCommandOutput } from "./commands/EnableMetricsCollectionCommand";
import { EnterStandbyCommandInput, EnterStandbyCommandOutput } from "./commands/EnterStandbyCommand";
import { ExecutePolicyCommandInput, ExecutePolicyCommandOutput } from "./commands/ExecutePolicyCommand";
import { ExitStandbyCommandInput, ExitStandbyCommandOutput } from "./commands/ExitStandbyCommand";
import { PutLifecycleHookCommandInput, PutLifecycleHookCommandOutput } from "./commands/PutLifecycleHookCommand";
import { PutNotificationConfigurationCommandInput, PutNotificationConfigurationCommandOutput } from "./commands/PutNotificationConfigurationCommand";
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "./commands/PutScalingPolicyCommand";
import { PutScheduledUpdateGroupActionCommandInput, PutScheduledUpdateGroupActionCommandOutput } from "./commands/PutScheduledUpdateGroupActionCommand";
import { RecordLifecycleActionHeartbeatCommandInput, RecordLifecycleActionHeartbeatCommandOutput } from "./commands/RecordLifecycleActionHeartbeatCommand";
import { ResumeProcessesCommandInput, ResumeProcessesCommandOutput } from "./commands/ResumeProcessesCommand";
import { SetDesiredCapacityCommandInput, SetDesiredCapacityCommandOutput } from "./commands/SetDesiredCapacityCommand";
import { SetInstanceHealthCommandInput, SetInstanceHealthCommandOutput } from "./commands/SetInstanceHealthCommand";
import { SetInstanceProtectionCommandInput, SetInstanceProtectionCommandOutput } from "./commands/SetInstanceProtectionCommand";
import { SuspendProcessesCommandInput, SuspendProcessesCommandOutput } from "./commands/SuspendProcessesCommand";
import { TerminateInstanceInAutoScalingGroupCommandInput, TerminateInstanceInAutoScalingGroupCommandOutput } from "./commands/TerminateInstanceInAutoScalingGroupCommand";
import { UpdateAutoScalingGroupCommandInput, UpdateAutoScalingGroupCommandOutput } from "./commands/UpdateAutoScalingGroupCommand";
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
export declare class AutoScaling extends AutoScalingClient {
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
    attachInstances(args: AttachInstancesCommandInput, options?: __HttpHandlerOptions): Promise<AttachInstancesCommandOutput>;
    attachInstances(args: AttachInstancesCommandInput, cb: (err: any, data?: AttachInstancesCommandOutput) => void): void;
    attachInstances(args: AttachInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachInstancesCommandOutput) => void): void;
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
    attachLoadBalancerTargetGroups(args: AttachLoadBalancerTargetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<AttachLoadBalancerTargetGroupsCommandOutput>;
    attachLoadBalancerTargetGroups(args: AttachLoadBalancerTargetGroupsCommandInput, cb: (err: any, data?: AttachLoadBalancerTargetGroupsCommandOutput) => void): void;
    attachLoadBalancerTargetGroups(args: AttachLoadBalancerTargetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachLoadBalancerTargetGroupsCommandOutput) => void): void;
    /**
     * <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group.</p>
     *         <p>To attach an Application Load Balancer or a Network Load Balancer instead, see <a>AttachLoadBalancerTargetGroups</a>.</p>
     *         <p>To describe the load balancers for an Auto Scaling group, use <a>DescribeLoadBalancers</a>. To detach the load balancer from the Auto Scaling group,
     *             use <a>DetachLoadBalancers</a>.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-load-balancer-asg.html">Attaching a Load
     *                 Balancer to Your Auto Scaling Group</a> in the
     *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    attachLoadBalancers(args: AttachLoadBalancersCommandInput, options?: __HttpHandlerOptions): Promise<AttachLoadBalancersCommandOutput>;
    attachLoadBalancers(args: AttachLoadBalancersCommandInput, cb: (err: any, data?: AttachLoadBalancersCommandOutput) => void): void;
    attachLoadBalancers(args: AttachLoadBalancersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachLoadBalancersCommandOutput) => void): void;
    /**
     * <p>Deletes one or more scheduled actions for the specified Auto Scaling group.</p>
     */
    batchDeleteScheduledAction(args: BatchDeleteScheduledActionCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteScheduledActionCommandOutput>;
    batchDeleteScheduledAction(args: BatchDeleteScheduledActionCommandInput, cb: (err: any, data?: BatchDeleteScheduledActionCommandOutput) => void): void;
    batchDeleteScheduledAction(args: BatchDeleteScheduledActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteScheduledActionCommandOutput) => void): void;
    /**
     * <p>Creates or updates one or more scheduled scaling actions for an Auto Scaling group. If you
     *             leave a parameter unspecified when updating a scheduled scaling action, the
     *             corresponding value remains unchanged.</p>
     */
    batchPutScheduledUpdateGroupAction(args: BatchPutScheduledUpdateGroupActionCommandInput, options?: __HttpHandlerOptions): Promise<BatchPutScheduledUpdateGroupActionCommandOutput>;
    batchPutScheduledUpdateGroupAction(args: BatchPutScheduledUpdateGroupActionCommandInput, cb: (err: any, data?: BatchPutScheduledUpdateGroupActionCommandOutput) => void): void;
    batchPutScheduledUpdateGroupAction(args: BatchPutScheduledUpdateGroupActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchPutScheduledUpdateGroupActionCommandOutput) => void): void;
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
    completeLifecycleAction(args: CompleteLifecycleActionCommandInput, options?: __HttpHandlerOptions): Promise<CompleteLifecycleActionCommandOutput>;
    completeLifecycleAction(args: CompleteLifecycleActionCommandInput, cb: (err: any, data?: CompleteLifecycleActionCommandOutput) => void): void;
    completeLifecycleAction(args: CompleteLifecycleActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CompleteLifecycleActionCommandOutput) => void): void;
    /**
     * <p>Creates an Auto Scaling group with the specified name and attributes.</p>
     *         <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. For information about
     *             viewing this limit, see <a>DescribeAccountLimits</a>. For information about
     *             updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling Limits</a> in
     *             the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    createAutoScalingGroup(args: CreateAutoScalingGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateAutoScalingGroupCommandOutput>;
    createAutoScalingGroup(args: CreateAutoScalingGroupCommandInput, cb: (err: any, data?: CreateAutoScalingGroupCommandOutput) => void): void;
    createAutoScalingGroup(args: CreateAutoScalingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAutoScalingGroupCommandOutput) => void): void;
    /**
     * <p>Creates a launch configuration.</p>
     *         <p>If you exceed your maximum limit of launch configurations, the call fails. For
     *             information about viewing this limit, see <a>DescribeAccountLimits</a>. For
     *             information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling Limits</a> in
     *             the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchConfiguration.html">Launch
     *                 Configurations</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    createLaunchConfiguration(args: CreateLaunchConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<CreateLaunchConfigurationCommandOutput>;
    createLaunchConfiguration(args: CreateLaunchConfigurationCommandInput, cb: (err: any, data?: CreateLaunchConfigurationCommandOutput) => void): void;
    createLaunchConfiguration(args: CreateLaunchConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLaunchConfigurationCommandOutput) => void): void;
    /**
     * <p>Creates or updates tags for the specified Auto Scaling group.</p>
     *         <p>When you specify a tag with a key that already exists, the operation overwrites the
     *             previous tag definition, and you do not get an error message.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html">Tagging Auto Scaling Groups and
     *                 Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    createOrUpdateTags(args: CreateOrUpdateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateOrUpdateTagsCommandOutput>;
    createOrUpdateTags(args: CreateOrUpdateTagsCommandInput, cb: (err: any, data?: CreateOrUpdateTagsCommandOutput) => void): void;
    createOrUpdateTags(args: CreateOrUpdateTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateOrUpdateTagsCommandOutput) => void): void;
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
    deleteAutoScalingGroup(args: DeleteAutoScalingGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAutoScalingGroupCommandOutput>;
    deleteAutoScalingGroup(args: DeleteAutoScalingGroupCommandInput, cb: (err: any, data?: DeleteAutoScalingGroupCommandOutput) => void): void;
    deleteAutoScalingGroup(args: DeleteAutoScalingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAutoScalingGroupCommandOutput) => void): void;
    /**
     * <p>Deletes the specified launch configuration.</p>
     *         <p>The launch configuration must not be attached to an Auto Scaling group. When this call
     *             completes, the launch configuration is no longer available for use.</p>
     */
    deleteLaunchConfiguration(args: DeleteLaunchConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLaunchConfigurationCommandOutput>;
    deleteLaunchConfiguration(args: DeleteLaunchConfigurationCommandInput, cb: (err: any, data?: DeleteLaunchConfigurationCommandOutput) => void): void;
    deleteLaunchConfiguration(args: DeleteLaunchConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLaunchConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes the specified lifecycle hook.</p>
     *         <p>If there are any outstanding lifecycle actions, they are completed first
     *                 (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating
     *             instances).</p>
     */
    deleteLifecycleHook(args: DeleteLifecycleHookCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLifecycleHookCommandOutput>;
    deleteLifecycleHook(args: DeleteLifecycleHookCommandInput, cb: (err: any, data?: DeleteLifecycleHookCommandOutput) => void): void;
    deleteLifecycleHook(args: DeleteLifecycleHookCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLifecycleHookCommandOutput) => void): void;
    /**
     * <p>Deletes the specified notification.</p>
     */
    deleteNotificationConfiguration(args: DeleteNotificationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNotificationConfigurationCommandOutput>;
    deleteNotificationConfiguration(args: DeleteNotificationConfigurationCommandInput, cb: (err: any, data?: DeleteNotificationConfigurationCommandOutput) => void): void;
    deleteNotificationConfiguration(args: DeleteNotificationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNotificationConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes the specified scaling policy.</p>
     *         <p>Deleting either a step scaling policy or a simple scaling policy deletes the
     *             underlying alarm action, but does not delete the alarm, even if it no longer has an
     *             associated action.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a Scaling
     *                 Policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    deletePolicy(args: DeletePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyCommandOutput>;
    deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
    deletePolicy(args: DeletePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
    /**
     * <p>Deletes the specified scheduled action.</p>
     */
    deleteScheduledAction(args: DeleteScheduledActionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteScheduledActionCommandOutput>;
    deleteScheduledAction(args: DeleteScheduledActionCommandInput, cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void): void;
    deleteScheduledAction(args: DeleteScheduledActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified tags.</p>
     */
    deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
    deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    deleteTags(args: DeleteTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    /**
     * <p>Describes the current Amazon EC2 Auto Scaling resource limits for your AWS account.</p>
     *         <p>For information about requesting an increase in these limits, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling
     *                 Limits</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    describeAccountLimits(args: DescribeAccountLimitsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountLimitsCommandOutput>;
    describeAccountLimits(args: DescribeAccountLimitsCommandInput, cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void): void;
    describeAccountLimits(args: DescribeAccountLimitsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void): void;
    /**
     * <p>Describes the policy adjustment types for use with <a>PutScalingPolicy</a>.</p>
     */
    describeAdjustmentTypes(args: DescribeAdjustmentTypesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAdjustmentTypesCommandOutput>;
    describeAdjustmentTypes(args: DescribeAdjustmentTypesCommandInput, cb: (err: any, data?: DescribeAdjustmentTypesCommandOutput) => void): void;
    describeAdjustmentTypes(args: DescribeAdjustmentTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAdjustmentTypesCommandOutput) => void): void;
    /**
     * <p>Describes one or more Auto Scaling groups.</p>
     */
    describeAutoScalingGroups(args: DescribeAutoScalingGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAutoScalingGroupsCommandOutput>;
    describeAutoScalingGroups(args: DescribeAutoScalingGroupsCommandInput, cb: (err: any, data?: DescribeAutoScalingGroupsCommandOutput) => void): void;
    describeAutoScalingGroups(args: DescribeAutoScalingGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAutoScalingGroupsCommandOutput) => void): void;
    /**
     * <p>Describes one or more Auto Scaling instances.</p>
     */
    describeAutoScalingInstances(args: DescribeAutoScalingInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAutoScalingInstancesCommandOutput>;
    describeAutoScalingInstances(args: DescribeAutoScalingInstancesCommandInput, cb: (err: any, data?: DescribeAutoScalingInstancesCommandOutput) => void): void;
    describeAutoScalingInstances(args: DescribeAutoScalingInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAutoScalingInstancesCommandOutput) => void): void;
    /**
     * <p>Describes the notification types that are supported by Amazon EC2 Auto Scaling.</p>
     */
    describeAutoScalingNotificationTypes(args: DescribeAutoScalingNotificationTypesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAutoScalingNotificationTypesCommandOutput>;
    describeAutoScalingNotificationTypes(args: DescribeAutoScalingNotificationTypesCommandInput, cb: (err: any, data?: DescribeAutoScalingNotificationTypesCommandOutput) => void): void;
    describeAutoScalingNotificationTypes(args: DescribeAutoScalingNotificationTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAutoScalingNotificationTypesCommandOutput) => void): void;
    /**
     * <p>Describes one or more launch configurations.</p>
     */
    describeLaunchConfigurations(args: DescribeLaunchConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLaunchConfigurationsCommandOutput>;
    describeLaunchConfigurations(args: DescribeLaunchConfigurationsCommandInput, cb: (err: any, data?: DescribeLaunchConfigurationsCommandOutput) => void): void;
    describeLaunchConfigurations(args: DescribeLaunchConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLaunchConfigurationsCommandOutput) => void): void;
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
    describeLifecycleHookTypes(args: DescribeLifecycleHookTypesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLifecycleHookTypesCommandOutput>;
    describeLifecycleHookTypes(args: DescribeLifecycleHookTypesCommandInput, cb: (err: any, data?: DescribeLifecycleHookTypesCommandOutput) => void): void;
    describeLifecycleHookTypes(args: DescribeLifecycleHookTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLifecycleHookTypesCommandOutput) => void): void;
    /**
     * <p>Describes the lifecycle hooks for the specified Auto Scaling group.</p>
     */
    describeLifecycleHooks(args: DescribeLifecycleHooksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLifecycleHooksCommandOutput>;
    describeLifecycleHooks(args: DescribeLifecycleHooksCommandInput, cb: (err: any, data?: DescribeLifecycleHooksCommandOutput) => void): void;
    describeLifecycleHooks(args: DescribeLifecycleHooksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLifecycleHooksCommandOutput) => void): void;
    /**
     * <p>Describes the target groups for the specified Auto Scaling group.</p>
     */
    describeLoadBalancerTargetGroups(args: DescribeLoadBalancerTargetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLoadBalancerTargetGroupsCommandOutput>;
    describeLoadBalancerTargetGroups(args: DescribeLoadBalancerTargetGroupsCommandInput, cb: (err: any, data?: DescribeLoadBalancerTargetGroupsCommandOutput) => void): void;
    describeLoadBalancerTargetGroups(args: DescribeLoadBalancerTargetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLoadBalancerTargetGroupsCommandOutput) => void): void;
    /**
     * <p>Describes the load balancers for the specified Auto Scaling group.</p>
     *         <p>This operation describes only Classic Load Balancers. If you have Application Load
     *             Balancers or Network Load Balancers, use <a>DescribeLoadBalancerTargetGroups</a> instead.</p>
     */
    describeLoadBalancers(args: DescribeLoadBalancersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLoadBalancersCommandOutput>;
    describeLoadBalancers(args: DescribeLoadBalancersCommandInput, cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void): void;
    describeLoadBalancers(args: DescribeLoadBalancersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void): void;
    /**
     * <p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p>
     *         <p>The <code>GroupStandbyInstances</code> metric is not returned by default. You must
     *             explicitly request this metric when calling <a>EnableMetricsCollection</a>.</p>
     */
    describeMetricCollectionTypes(args: DescribeMetricCollectionTypesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMetricCollectionTypesCommandOutput>;
    describeMetricCollectionTypes(args: DescribeMetricCollectionTypesCommandInput, cb: (err: any, data?: DescribeMetricCollectionTypesCommandOutput) => void): void;
    describeMetricCollectionTypes(args: DescribeMetricCollectionTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMetricCollectionTypesCommandOutput) => void): void;
    /**
     * <p>Describes the notification actions associated with the specified Auto Scaling group.</p>
     */
    describeNotificationConfigurations(args: DescribeNotificationConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNotificationConfigurationsCommandOutput>;
    describeNotificationConfigurations(args: DescribeNotificationConfigurationsCommandInput, cb: (err: any, data?: DescribeNotificationConfigurationsCommandOutput) => void): void;
    describeNotificationConfigurations(args: DescribeNotificationConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeNotificationConfigurationsCommandOutput) => void): void;
    /**
     * <p>Describes the policies for the specified Auto Scaling group.</p>
     */
    describePolicies(args: DescribePoliciesCommandInput, options?: __HttpHandlerOptions): Promise<DescribePoliciesCommandOutput>;
    describePolicies(args: DescribePoliciesCommandInput, cb: (err: any, data?: DescribePoliciesCommandOutput) => void): void;
    describePolicies(args: DescribePoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePoliciesCommandOutput) => void): void;
    /**
     * <p>Describes one or more scaling activities for the specified Auto Scaling group.</p>
     */
    describeScalingActivities(args: DescribeScalingActivitiesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeScalingActivitiesCommandOutput>;
    describeScalingActivities(args: DescribeScalingActivitiesCommandInput, cb: (err: any, data?: DescribeScalingActivitiesCommandOutput) => void): void;
    describeScalingActivities(args: DescribeScalingActivitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeScalingActivitiesCommandOutput) => void): void;
    /**
     * <p>Describes the scaling process types for use with <a>ResumeProcesses</a> and
     *                 <a>SuspendProcesses</a>.</p>
     */
    describeScalingProcessTypes(args: DescribeScalingProcessTypesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeScalingProcessTypesCommandOutput>;
    describeScalingProcessTypes(args: DescribeScalingProcessTypesCommandInput, cb: (err: any, data?: DescribeScalingProcessTypesCommandOutput) => void): void;
    describeScalingProcessTypes(args: DescribeScalingProcessTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeScalingProcessTypesCommandOutput) => void): void;
    /**
     * <p>Describes the actions scheduled for your Auto Scaling group that haven't run or that have not
     *             reached their end time. To describe the actions that have already run, use <a>DescribeScalingActivities</a>.</p>
     */
    describeScheduledActions(args: DescribeScheduledActionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeScheduledActionsCommandOutput>;
    describeScheduledActions(args: DescribeScheduledActionsCommandInput, cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void): void;
    describeScheduledActions(args: DescribeScheduledActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void): void;
    /**
     * <p>Describes the specified tags.</p>
     *         <p>You can use filters to limit the results. For example, you can query for the tags for
     *             a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at
     *             least one of the specified values for it to be included in the results.</p>
     *         <p>You can also specify multiple filters. The result includes information for a
     *             particular tag only if it matches all the filters. If there's no match, no special
     *             message is returned.</p>
     */
    describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
    describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
    describeTags(args: DescribeTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
    /**
     * <p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html">Controlling Which Auto Scaling
     *                 Instances Terminate During Scale In</a> in the
     *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    describeTerminationPolicyTypes(args: DescribeTerminationPolicyTypesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTerminationPolicyTypesCommandOutput>;
    describeTerminationPolicyTypes(args: DescribeTerminationPolicyTypesCommandInput, cb: (err: any, data?: DescribeTerminationPolicyTypesCommandOutput) => void): void;
    describeTerminationPolicyTypes(args: DescribeTerminationPolicyTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTerminationPolicyTypesCommandOutput) => void): void;
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
    detachInstances(args: DetachInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DetachInstancesCommandOutput>;
    detachInstances(args: DetachInstancesCommandInput, cb: (err: any, data?: DetachInstancesCommandOutput) => void): void;
    detachInstances(args: DetachInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachInstancesCommandOutput) => void): void;
    /**
     * <p>Detaches one or more target groups from the specified Auto Scaling group.</p>
     */
    detachLoadBalancerTargetGroups(args: DetachLoadBalancerTargetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DetachLoadBalancerTargetGroupsCommandOutput>;
    detachLoadBalancerTargetGroups(args: DetachLoadBalancerTargetGroupsCommandInput, cb: (err: any, data?: DetachLoadBalancerTargetGroupsCommandOutput) => void): void;
    detachLoadBalancerTargetGroups(args: DetachLoadBalancerTargetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachLoadBalancerTargetGroupsCommandOutput) => void): void;
    /**
     * <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p>
     *         <p>This operation detaches only Classic Load Balancers. If you have Application Load
     *             Balancers or Network Load Balancers, use <a>DetachLoadBalancerTargetGroups</a> instead.</p>
     *         <p>When you detach a load balancer, it enters the <code>Removing</code> state while
     *             deregistering the instances in the group. When all instances are deregistered, then you
     *             can no longer describe the load balancer using <a>DescribeLoadBalancers</a>.
     *             The instances remain running.</p>
     */
    detachLoadBalancers(args: DetachLoadBalancersCommandInput, options?: __HttpHandlerOptions): Promise<DetachLoadBalancersCommandOutput>;
    detachLoadBalancers(args: DetachLoadBalancersCommandInput, cb: (err: any, data?: DetachLoadBalancersCommandOutput) => void): void;
    detachLoadBalancers(args: DetachLoadBalancersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachLoadBalancersCommandOutput) => void): void;
    /**
     * <p>Disables group metrics for the specified Auto Scaling group.</p>
     */
    disableMetricsCollection(args: DisableMetricsCollectionCommandInput, options?: __HttpHandlerOptions): Promise<DisableMetricsCollectionCommandOutput>;
    disableMetricsCollection(args: DisableMetricsCollectionCommandInput, cb: (err: any, data?: DisableMetricsCollectionCommandOutput) => void): void;
    disableMetricsCollection(args: DisableMetricsCollectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableMetricsCollectionCommandOutput) => void): void;
    /**
     * <p>Enables group metrics for the specified Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-monitoring.html">Monitoring Your Auto Scaling Groups and Instances</a> in the
     *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    enableMetricsCollection(args: EnableMetricsCollectionCommandInput, options?: __HttpHandlerOptions): Promise<EnableMetricsCollectionCommandOutput>;
    enableMetricsCollection(args: EnableMetricsCollectionCommandInput, cb: (err: any, data?: EnableMetricsCollectionCommandOutput) => void): void;
    enableMetricsCollection(args: EnableMetricsCollectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableMetricsCollectionCommandOutput) => void): void;
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
    enterStandby(args: EnterStandbyCommandInput, options?: __HttpHandlerOptions): Promise<EnterStandbyCommandOutput>;
    enterStandby(args: EnterStandbyCommandInput, cb: (err: any, data?: EnterStandbyCommandOutput) => void): void;
    enterStandby(args: EnterStandbyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnterStandbyCommandOutput) => void): void;
    /**
     * <p>Executes the specified policy.</p>
     */
    executePolicy(args: ExecutePolicyCommandInput, options?: __HttpHandlerOptions): Promise<ExecutePolicyCommandOutput>;
    executePolicy(args: ExecutePolicyCommandInput, cb: (err: any, data?: ExecutePolicyCommandOutput) => void): void;
    executePolicy(args: ExecutePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExecutePolicyCommandOutput) => void): void;
    /**
     * <p>Moves the specified instances out of the standby state.</p>
     *         <p>After you put the instances back in service, the desired capacity is
     *             incremented.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily Removing
     *                 Instances from Your Auto Scaling Group</a> in the
     *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    exitStandby(args: ExitStandbyCommandInput, options?: __HttpHandlerOptions): Promise<ExitStandbyCommandOutput>;
    exitStandby(args: ExitStandbyCommandInput, cb: (err: any, data?: ExitStandbyCommandOutput) => void): void;
    exitStandby(args: ExitStandbyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExitStandbyCommandOutput) => void): void;
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
    putLifecycleHook(args: PutLifecycleHookCommandInput, options?: __HttpHandlerOptions): Promise<PutLifecycleHookCommandOutput>;
    putLifecycleHook(args: PutLifecycleHookCommandInput, cb: (err: any, data?: PutLifecycleHookCommandOutput) => void): void;
    putLifecycleHook(args: PutLifecycleHookCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutLifecycleHookCommandOutput) => void): void;
    /**
     * <p>Configures an Auto Scaling group to send notifications when specified events take place.
     *             Subscribers to the specified topic can have messages delivered to an endpoint such as a
     *             web server or an email address.</p>
     *         <p>This configuration overwrites any existing configuration.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS
     *                 Notifications When Your Auto Scaling Group Scales</a> in the
     *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    putNotificationConfiguration(args: PutNotificationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutNotificationConfigurationCommandOutput>;
    putNotificationConfiguration(args: PutNotificationConfigurationCommandInput, cb: (err: any, data?: PutNotificationConfigurationCommandOutput) => void): void;
    putNotificationConfiguration(args: PutNotificationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutNotificationConfigurationCommandOutput) => void): void;
    /**
     * <p>Creates or updates a scaling policy for an Auto Scaling group. To update an existing scaling
     *             policy, use the existing policy name and set the parameters to change. Any existing
     *             parameter not changed in an update to an existing policy is not changed in this update
     *             request.</p>
     *         <p>For more information about using scaling policies to scale your Auto Scaling group
     *             automatically, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html">Dynamic
     *                 Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    putScalingPolicy(args: PutScalingPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutScalingPolicyCommandOutput>;
    putScalingPolicy(args: PutScalingPolicyCommandInput, cb: (err: any, data?: PutScalingPolicyCommandOutput) => void): void;
    putScalingPolicy(args: PutScalingPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutScalingPolicyCommandOutput) => void): void;
    /**
     * <p>Creates or updates a scheduled scaling action for an Auto Scaling group. If you leave a
     *             parameter unspecified when updating a scheduled scaling action, the corresponding value
     *             remains unchanged.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled Scaling</a> in the
     *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    putScheduledUpdateGroupAction(args: PutScheduledUpdateGroupActionCommandInput, options?: __HttpHandlerOptions): Promise<PutScheduledUpdateGroupActionCommandOutput>;
    putScheduledUpdateGroupAction(args: PutScheduledUpdateGroupActionCommandInput, cb: (err: any, data?: PutScheduledUpdateGroupActionCommandOutput) => void): void;
    putScheduledUpdateGroupAction(args: PutScheduledUpdateGroupActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutScheduledUpdateGroupActionCommandOutput) => void): void;
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
    recordLifecycleActionHeartbeat(args: RecordLifecycleActionHeartbeatCommandInput, options?: __HttpHandlerOptions): Promise<RecordLifecycleActionHeartbeatCommandOutput>;
    recordLifecycleActionHeartbeat(args: RecordLifecycleActionHeartbeatCommandInput, cb: (err: any, data?: RecordLifecycleActionHeartbeatCommandOutput) => void): void;
    recordLifecycleActionHeartbeat(args: RecordLifecycleActionHeartbeatCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RecordLifecycleActionHeartbeatCommandOutput) => void): void;
    /**
     * <p>Resumes the specified suspended automatic scaling processes, or all suspended process,
     *             for the specified Auto Scaling group.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and
     *                 Resuming Scaling Processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    resumeProcesses(args: ResumeProcessesCommandInput, options?: __HttpHandlerOptions): Promise<ResumeProcessesCommandOutput>;
    resumeProcesses(args: ResumeProcessesCommandInput, cb: (err: any, data?: ResumeProcessesCommandOutput) => void): void;
    resumeProcesses(args: ResumeProcessesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResumeProcessesCommandOutput) => void): void;
    /**
     * <p>Sets the size of the specified Auto Scaling group.</p>
     *         <p>For more information about desired capacity, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html">What Is
     *                 Amazon EC2 Auto Scaling?</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    setDesiredCapacity(args: SetDesiredCapacityCommandInput, options?: __HttpHandlerOptions): Promise<SetDesiredCapacityCommandOutput>;
    setDesiredCapacity(args: SetDesiredCapacityCommandInput, cb: (err: any, data?: SetDesiredCapacityCommandOutput) => void): void;
    setDesiredCapacity(args: SetDesiredCapacityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetDesiredCapacityCommandOutput) => void): void;
    /**
     * <p>Sets the health status of the specified instance.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health Checks for Auto Scaling
     *                 Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    setInstanceHealth(args: SetInstanceHealthCommandInput, options?: __HttpHandlerOptions): Promise<SetInstanceHealthCommandOutput>;
    setInstanceHealth(args: SetInstanceHealthCommandInput, cb: (err: any, data?: SetInstanceHealthCommandOutput) => void): void;
    setInstanceHealth(args: SetInstanceHealthCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetInstanceHealthCommandOutput) => void): void;
    /**
     * <p>Updates the instance protection settings of the specified instances.</p>
     *         <p>For more information about preventing instances that are part of an Auto Scaling group from
     *             terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance Protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    setInstanceProtection(args: SetInstanceProtectionCommandInput, options?: __HttpHandlerOptions): Promise<SetInstanceProtectionCommandOutput>;
    setInstanceProtection(args: SetInstanceProtectionCommandInput, cb: (err: any, data?: SetInstanceProtectionCommandOutput) => void): void;
    setInstanceProtection(args: SetInstanceProtectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetInstanceProtectionCommandOutput) => void): void;
    /**
     * <p>Suspends the specified automatic scaling processes, or all processes, for the
     *             specified Auto Scaling group.</p>
     *         <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types,
     *             it can prevent other process types from functioning properly.</p>
     *         <p>To resume processes that have been suspended, use <a>ResumeProcesses</a>.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and
     *                 Resuming Scaling Processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    suspendProcesses(args: SuspendProcessesCommandInput, options?: __HttpHandlerOptions): Promise<SuspendProcessesCommandOutput>;
    suspendProcesses(args: SuspendProcessesCommandInput, cb: (err: any, data?: SuspendProcessesCommandOutput) => void): void;
    suspendProcesses(args: SuspendProcessesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SuspendProcessesCommandOutput) => void): void;
    /**
     * <p>Terminates the specified instance and optionally adjusts the desired group
     *             size.</p>
     *         <p>This call simply makes a termination request. The instance is not terminated
     *             immediately.</p>
     */
    terminateInstanceInAutoScalingGroup(args: TerminateInstanceInAutoScalingGroupCommandInput, options?: __HttpHandlerOptions): Promise<TerminateInstanceInAutoScalingGroupCommandOutput>;
    terminateInstanceInAutoScalingGroup(args: TerminateInstanceInAutoScalingGroupCommandInput, cb: (err: any, data?: TerminateInstanceInAutoScalingGroupCommandOutput) => void): void;
    terminateInstanceInAutoScalingGroup(args: TerminateInstanceInAutoScalingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TerminateInstanceInAutoScalingGroupCommandOutput) => void): void;
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
    updateAutoScalingGroup(args: UpdateAutoScalingGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAutoScalingGroupCommandOutput>;
    updateAutoScalingGroup(args: UpdateAutoScalingGroupCommandInput, cb: (err: any, data?: UpdateAutoScalingGroupCommandOutput) => void): void;
    updateAutoScalingGroup(args: UpdateAutoScalingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAutoScalingGroupCommandOutput) => void): void;
}
