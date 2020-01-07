"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AutoScalingClient_1 = require("./AutoScalingClient");
const AttachInstancesCommand_1 = require("./commands/AttachInstancesCommand");
const AttachLoadBalancerTargetGroupsCommand_1 = require("./commands/AttachLoadBalancerTargetGroupsCommand");
const AttachLoadBalancersCommand_1 = require("./commands/AttachLoadBalancersCommand");
const BatchDeleteScheduledActionCommand_1 = require("./commands/BatchDeleteScheduledActionCommand");
const BatchPutScheduledUpdateGroupActionCommand_1 = require("./commands/BatchPutScheduledUpdateGroupActionCommand");
const CompleteLifecycleActionCommand_1 = require("./commands/CompleteLifecycleActionCommand");
const CreateAutoScalingGroupCommand_1 = require("./commands/CreateAutoScalingGroupCommand");
const CreateLaunchConfigurationCommand_1 = require("./commands/CreateLaunchConfigurationCommand");
const CreateOrUpdateTagsCommand_1 = require("./commands/CreateOrUpdateTagsCommand");
const DeleteAutoScalingGroupCommand_1 = require("./commands/DeleteAutoScalingGroupCommand");
const DeleteLaunchConfigurationCommand_1 = require("./commands/DeleteLaunchConfigurationCommand");
const DeleteLifecycleHookCommand_1 = require("./commands/DeleteLifecycleHookCommand");
const DeleteNotificationConfigurationCommand_1 = require("./commands/DeleteNotificationConfigurationCommand");
const DeletePolicyCommand_1 = require("./commands/DeletePolicyCommand");
const DeleteScheduledActionCommand_1 = require("./commands/DeleteScheduledActionCommand");
const DeleteTagsCommand_1 = require("./commands/DeleteTagsCommand");
const DescribeAccountLimitsCommand_1 = require("./commands/DescribeAccountLimitsCommand");
const DescribeAdjustmentTypesCommand_1 = require("./commands/DescribeAdjustmentTypesCommand");
const DescribeAutoScalingGroupsCommand_1 = require("./commands/DescribeAutoScalingGroupsCommand");
const DescribeAutoScalingInstancesCommand_1 = require("./commands/DescribeAutoScalingInstancesCommand");
const DescribeAutoScalingNotificationTypesCommand_1 = require("./commands/DescribeAutoScalingNotificationTypesCommand");
const DescribeLaunchConfigurationsCommand_1 = require("./commands/DescribeLaunchConfigurationsCommand");
const DescribeLifecycleHookTypesCommand_1 = require("./commands/DescribeLifecycleHookTypesCommand");
const DescribeLifecycleHooksCommand_1 = require("./commands/DescribeLifecycleHooksCommand");
const DescribeLoadBalancerTargetGroupsCommand_1 = require("./commands/DescribeLoadBalancerTargetGroupsCommand");
const DescribeLoadBalancersCommand_1 = require("./commands/DescribeLoadBalancersCommand");
const DescribeMetricCollectionTypesCommand_1 = require("./commands/DescribeMetricCollectionTypesCommand");
const DescribeNotificationConfigurationsCommand_1 = require("./commands/DescribeNotificationConfigurationsCommand");
const DescribePoliciesCommand_1 = require("./commands/DescribePoliciesCommand");
const DescribeScalingActivitiesCommand_1 = require("./commands/DescribeScalingActivitiesCommand");
const DescribeScalingProcessTypesCommand_1 = require("./commands/DescribeScalingProcessTypesCommand");
const DescribeScheduledActionsCommand_1 = require("./commands/DescribeScheduledActionsCommand");
const DescribeTagsCommand_1 = require("./commands/DescribeTagsCommand");
const DescribeTerminationPolicyTypesCommand_1 = require("./commands/DescribeTerminationPolicyTypesCommand");
const DetachInstancesCommand_1 = require("./commands/DetachInstancesCommand");
const DetachLoadBalancerTargetGroupsCommand_1 = require("./commands/DetachLoadBalancerTargetGroupsCommand");
const DetachLoadBalancersCommand_1 = require("./commands/DetachLoadBalancersCommand");
const DisableMetricsCollectionCommand_1 = require("./commands/DisableMetricsCollectionCommand");
const EnableMetricsCollectionCommand_1 = require("./commands/EnableMetricsCollectionCommand");
const EnterStandbyCommand_1 = require("./commands/EnterStandbyCommand");
const ExecutePolicyCommand_1 = require("./commands/ExecutePolicyCommand");
const ExitStandbyCommand_1 = require("./commands/ExitStandbyCommand");
const PutLifecycleHookCommand_1 = require("./commands/PutLifecycleHookCommand");
const PutNotificationConfigurationCommand_1 = require("./commands/PutNotificationConfigurationCommand");
const PutScalingPolicyCommand_1 = require("./commands/PutScalingPolicyCommand");
const PutScheduledUpdateGroupActionCommand_1 = require("./commands/PutScheduledUpdateGroupActionCommand");
const RecordLifecycleActionHeartbeatCommand_1 = require("./commands/RecordLifecycleActionHeartbeatCommand");
const ResumeProcessesCommand_1 = require("./commands/ResumeProcessesCommand");
const SetDesiredCapacityCommand_1 = require("./commands/SetDesiredCapacityCommand");
const SetInstanceHealthCommand_1 = require("./commands/SetInstanceHealthCommand");
const SetInstanceProtectionCommand_1 = require("./commands/SetInstanceProtectionCommand");
const SuspendProcessesCommand_1 = require("./commands/SuspendProcessesCommand");
const TerminateInstanceInAutoScalingGroupCommand_1 = require("./commands/TerminateInstanceInAutoScalingGroupCommand");
const UpdateAutoScalingGroupCommand_1 = require("./commands/UpdateAutoScalingGroupCommand");
/**
 * <fullname>Amazon EC2 Auto Scaling</fullname>
 *
 *         <p>Amazon EC2 Auto Scaling is designed to automatically launch or terminate EC2 instances based on
 *             user-defined scaling policies, scheduled actions, and health checks. Use this service
 *             with AWS Auto Scaling, Amazon CloudWatch, and Elastic Load Balancing.</p>
 *         <p>For more information, including information about granting IAM users required
 *             permissions for Amazon EC2 Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html">Amazon EC2 Auto Scaling User Guide</a>.</p>
 */
class AutoScaling extends AutoScalingClient_1.AutoScalingClient {
    attachInstances(args, optionsOrCb, cb) {
        const command = new AttachInstancesCommand_1.AttachInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    attachLoadBalancerTargetGroups(args, optionsOrCb, cb) {
        const command = new AttachLoadBalancerTargetGroupsCommand_1.AttachLoadBalancerTargetGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    attachLoadBalancers(args, optionsOrCb, cb) {
        const command = new AttachLoadBalancersCommand_1.AttachLoadBalancersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchDeleteScheduledAction(args, optionsOrCb, cb) {
        const command = new BatchDeleteScheduledActionCommand_1.BatchDeleteScheduledActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchPutScheduledUpdateGroupAction(args, optionsOrCb, cb) {
        const command = new BatchPutScheduledUpdateGroupActionCommand_1.BatchPutScheduledUpdateGroupActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    completeLifecycleAction(args, optionsOrCb, cb) {
        const command = new CompleteLifecycleActionCommand_1.CompleteLifecycleActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAutoScalingGroup(args, optionsOrCb, cb) {
        const command = new CreateAutoScalingGroupCommand_1.CreateAutoScalingGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createLaunchConfiguration(args, optionsOrCb, cb) {
        const command = new CreateLaunchConfigurationCommand_1.CreateLaunchConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createOrUpdateTags(args, optionsOrCb, cb) {
        const command = new CreateOrUpdateTagsCommand_1.CreateOrUpdateTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAutoScalingGroup(args, optionsOrCb, cb) {
        const command = new DeleteAutoScalingGroupCommand_1.DeleteAutoScalingGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteLaunchConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteLaunchConfigurationCommand_1.DeleteLaunchConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteLifecycleHook(args, optionsOrCb, cb) {
        const command = new DeleteLifecycleHookCommand_1.DeleteLifecycleHookCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteNotificationConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteNotificationConfigurationCommand_1.DeleteNotificationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deletePolicy(args, optionsOrCb, cb) {
        const command = new DeletePolicyCommand_1.DeletePolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteScheduledAction(args, optionsOrCb, cb) {
        const command = new DeleteScheduledActionCommand_1.DeleteScheduledActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTags(args, optionsOrCb, cb) {
        const command = new DeleteTagsCommand_1.DeleteTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAccountLimits(args, optionsOrCb, cb) {
        const command = new DescribeAccountLimitsCommand_1.DescribeAccountLimitsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAdjustmentTypes(args, optionsOrCb, cb) {
        const command = new DescribeAdjustmentTypesCommand_1.DescribeAdjustmentTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAutoScalingGroups(args, optionsOrCb, cb) {
        const command = new DescribeAutoScalingGroupsCommand_1.DescribeAutoScalingGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAutoScalingInstances(args, optionsOrCb, cb) {
        const command = new DescribeAutoScalingInstancesCommand_1.DescribeAutoScalingInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAutoScalingNotificationTypes(args, optionsOrCb, cb) {
        const command = new DescribeAutoScalingNotificationTypesCommand_1.DescribeAutoScalingNotificationTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLaunchConfigurations(args, optionsOrCb, cb) {
        const command = new DescribeLaunchConfigurationsCommand_1.DescribeLaunchConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLifecycleHookTypes(args, optionsOrCb, cb) {
        const command = new DescribeLifecycleHookTypesCommand_1.DescribeLifecycleHookTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLifecycleHooks(args, optionsOrCb, cb) {
        const command = new DescribeLifecycleHooksCommand_1.DescribeLifecycleHooksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLoadBalancerTargetGroups(args, optionsOrCb, cb) {
        const command = new DescribeLoadBalancerTargetGroupsCommand_1.DescribeLoadBalancerTargetGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLoadBalancers(args, optionsOrCb, cb) {
        const command = new DescribeLoadBalancersCommand_1.DescribeLoadBalancersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMetricCollectionTypes(args, optionsOrCb, cb) {
        const command = new DescribeMetricCollectionTypesCommand_1.DescribeMetricCollectionTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeNotificationConfigurations(args, optionsOrCb, cb) {
        const command = new DescribeNotificationConfigurationsCommand_1.DescribeNotificationConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePolicies(args, optionsOrCb, cb) {
        const command = new DescribePoliciesCommand_1.DescribePoliciesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeScalingActivities(args, optionsOrCb, cb) {
        const command = new DescribeScalingActivitiesCommand_1.DescribeScalingActivitiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeScalingProcessTypes(args, optionsOrCb, cb) {
        const command = new DescribeScalingProcessTypesCommand_1.DescribeScalingProcessTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeScheduledActions(args, optionsOrCb, cb) {
        const command = new DescribeScheduledActionsCommand_1.DescribeScheduledActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTags(args, optionsOrCb, cb) {
        const command = new DescribeTagsCommand_1.DescribeTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTerminationPolicyTypes(args, optionsOrCb, cb) {
        const command = new DescribeTerminationPolicyTypesCommand_1.DescribeTerminationPolicyTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    detachInstances(args, optionsOrCb, cb) {
        const command = new DetachInstancesCommand_1.DetachInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    detachLoadBalancerTargetGroups(args, optionsOrCb, cb) {
        const command = new DetachLoadBalancerTargetGroupsCommand_1.DetachLoadBalancerTargetGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    detachLoadBalancers(args, optionsOrCb, cb) {
        const command = new DetachLoadBalancersCommand_1.DetachLoadBalancersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableMetricsCollection(args, optionsOrCb, cb) {
        const command = new DisableMetricsCollectionCommand_1.DisableMetricsCollectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableMetricsCollection(args, optionsOrCb, cb) {
        const command = new EnableMetricsCollectionCommand_1.EnableMetricsCollectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enterStandby(args, optionsOrCb, cb) {
        const command = new EnterStandbyCommand_1.EnterStandbyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    executePolicy(args, optionsOrCb, cb) {
        const command = new ExecutePolicyCommand_1.ExecutePolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    exitStandby(args, optionsOrCb, cb) {
        const command = new ExitStandbyCommand_1.ExitStandbyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putLifecycleHook(args, optionsOrCb, cb) {
        const command = new PutLifecycleHookCommand_1.PutLifecycleHookCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putNotificationConfiguration(args, optionsOrCb, cb) {
        const command = new PutNotificationConfigurationCommand_1.PutNotificationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putScalingPolicy(args, optionsOrCb, cb) {
        const command = new PutScalingPolicyCommand_1.PutScalingPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putScheduledUpdateGroupAction(args, optionsOrCb, cb) {
        const command = new PutScheduledUpdateGroupActionCommand_1.PutScheduledUpdateGroupActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    recordLifecycleActionHeartbeat(args, optionsOrCb, cb) {
        const command = new RecordLifecycleActionHeartbeatCommand_1.RecordLifecycleActionHeartbeatCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resumeProcesses(args, optionsOrCb, cb) {
        const command = new ResumeProcessesCommand_1.ResumeProcessesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setDesiredCapacity(args, optionsOrCb, cb) {
        const command = new SetDesiredCapacityCommand_1.SetDesiredCapacityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setInstanceHealth(args, optionsOrCb, cb) {
        const command = new SetInstanceHealthCommand_1.SetInstanceHealthCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setInstanceProtection(args, optionsOrCb, cb) {
        const command = new SetInstanceProtectionCommand_1.SetInstanceProtectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    suspendProcesses(args, optionsOrCb, cb) {
        const command = new SuspendProcessesCommand_1.SuspendProcessesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    terminateInstanceInAutoScalingGroup(args, optionsOrCb, cb) {
        const command = new TerminateInstanceInAutoScalingGroupCommand_1.TerminateInstanceInAutoScalingGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateAutoScalingGroup(args, optionsOrCb, cb) {
        const command = new UpdateAutoScalingGroupCommand_1.UpdateAutoScalingGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.AutoScaling = AutoScaling;
//# sourceMappingURL=AutoScaling.js.map