import { ApplicationAutoScalingClient } from "./ApplicationAutoScalingClient";
import { DeleteScalingPolicyCommandInput, DeleteScalingPolicyCommandOutput } from "./commands/DeleteScalingPolicyCommand";
import { DeleteScheduledActionCommandInput, DeleteScheduledActionCommandOutput } from "./commands/DeleteScheduledActionCommand";
import { DeregisterScalableTargetCommandInput, DeregisterScalableTargetCommandOutput } from "./commands/DeregisterScalableTargetCommand";
import { DescribeScalableTargetsCommandInput, DescribeScalableTargetsCommandOutput } from "./commands/DescribeScalableTargetsCommand";
import { DescribeScalingActivitiesCommandInput, DescribeScalingActivitiesCommandOutput } from "./commands/DescribeScalingActivitiesCommand";
import { DescribeScalingPoliciesCommandInput, DescribeScalingPoliciesCommandOutput } from "./commands/DescribeScalingPoliciesCommand";
import { DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput } from "./commands/DescribeScheduledActionsCommand";
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "./commands/PutScalingPolicyCommand";
import { PutScheduledActionCommandInput, PutScheduledActionCommandOutput } from "./commands/PutScheduledActionCommand";
import { RegisterScalableTargetCommandInput, RegisterScalableTargetCommandOutput } from "./commands/RegisterScalableTargetCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>With Application Auto Scaling, you can configure automatic scaling for the following
 *          resources:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon ECS services</p>
 *             </li>
 *             <li>
 *                <p>Amazon EC2 Spot Fleet requests</p>
 *             </li>
 *             <li>
 *                <p>Amazon EMR clusters</p>
 *             </li>
 *             <li>
 *                <p>Amazon AppStream 2.0 fleets</p>
 *             </li>
 *             <li>
 *                <p>Amazon DynamoDB tables and global secondary indexes throughput capacity</p>
 *             </li>
 *             <li>
 *                <p>Amazon Aurora Replicas</p>
 *             </li>
 *             <li>
 *                <p>Amazon SageMaker endpoint variants</p>
 *             </li>
 *             <li>
 *                <p>Custom resources provided by your own applications or services</p>
 *             </li>
 *             <li>
 *                <p>Amazon Comprehend document classification endpoints</p>
 *             </li>
 *             <li>
 *                <p>AWS Lambda function provisioned concurrency</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>API Summary</b>
 *          </p>
 *          <p>The Application Auto Scaling service API includes three key sets of actions: </p>
 *          <ul>
 *             <li>
 *                <p>Register and manage scalable targets - Register AWS or custom resources as
 *                scalable targets (a resource that Application Auto Scaling can scale), set minimum and maximum
 *                capacity limits, and retrieve information on existing scalable targets.</p>
 *             </li>
 *             <li>
 *                <p>Configure and manage automatic scaling - Define scaling policies to dynamically
 *                scale your resources in response to CloudWatch alarms, schedule one-time or recurring
 *                scaling actions, and retrieve your recent scaling activity history.</p>
 *             </li>
 *             <li>
 *                <p>Suspend and resume scaling - Temporarily suspend and later resume automatic
 *                scaling by calling the <a>RegisterScalableTarget</a> action for any
 *                Application Auto Scaling scalable target. You can suspend and resume, individually or in combination,
 *                scale-out activities triggered by a scaling policy, scale-in activities triggered by
 *                a scaling policy, and scheduled scaling. </p>
 *             </li>
 *          </ul>
 *
 *
 *          <p>To learn more about Application Auto Scaling, including information about granting IAM users required
 *          permissions for Application Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling
 *             User Guide</a>.</p>
 */
export declare class ApplicationAutoScaling extends ApplicationAutoScalingClient {
    /**
     * <p>Deletes the specified scaling policy for an Application Auto Scaling scalable target.</p>
     *          <p>Deleting a step scaling policy deletes the underlying alarm action, but does not delete
     *          the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated
     *          action.</p>
     *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html#delete-step-scaling-policy">Delete a Step Scaling Policy</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html#delete-target-tracking-policy">Delete a Target Tracking Scaling Policy</a> in the <i>Application Auto Scaling User
     *             Guide</i>.</p>
     *          <p>To create a scaling policy or update an existing one, see <a>PutScalingPolicy</a>.</p>
     */
    deleteScalingPolicy(args: DeleteScalingPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteScalingPolicyCommandOutput>;
    deleteScalingPolicy(args: DeleteScalingPolicyCommandInput, cb: (err: any, data?: DeleteScalingPolicyCommandOutput) => void): void;
    deleteScalingPolicy(args: DeleteScalingPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteScalingPolicyCommandOutput) => void): void;
    /**
     * <p>Deletes the specified scheduled action for an Application Auto Scaling scalable target.</p>
     *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html#delete-scheduled-action">Delete a Scheduled Action</a> in the <i>Application Auto Scaling User
     *          Guide</i>.</p>
     */
    deleteScheduledAction(args: DeleteScheduledActionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteScheduledActionCommandOutput>;
    deleteScheduledAction(args: DeleteScheduledActionCommandInput, cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void): void;
    deleteScheduledAction(args: DeleteScheduledActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void): void;
    /**
     * <p>Deregisters an Application Auto Scaling scalable target.</p>
     *          <p>Deregistering a scalable target deletes the scaling policies that are associated with
     *          it.</p>
     *          <p>To create a scalable target or update an existing one, see <a>RegisterScalableTarget</a>. </p>
     */
    deregisterScalableTarget(args: DeregisterScalableTargetCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterScalableTargetCommandOutput>;
    deregisterScalableTarget(args: DeregisterScalableTargetCommandInput, cb: (err: any, data?: DeregisterScalableTargetCommandOutput) => void): void;
    deregisterScalableTarget(args: DeregisterScalableTargetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterScalableTargetCommandOutput) => void): void;
    /**
     * <p>Gets information about the scalable targets in the specified namespace.</p>
     *          <p>You can filter the results using <code>ResourceIds</code> and
     *             <code>ScalableDimension</code>.</p>
     *          <p>To create a scalable target or update an existing one, see <a>RegisterScalableTarget</a>. If you are no longer using a scalable target, you
     *          can deregister it using <a>DeregisterScalableTarget</a>.</p>
     */
    describeScalableTargets(args: DescribeScalableTargetsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeScalableTargetsCommandOutput>;
    describeScalableTargets(args: DescribeScalableTargetsCommandInput, cb: (err: any, data?: DescribeScalableTargetsCommandOutput) => void): void;
    describeScalableTargets(args: DescribeScalableTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeScalableTargetsCommandOutput) => void): void;
    /**
     * <p>Provides descriptive information about the scaling activities in the specified namespace
     *          from the previous six weeks.</p>
     *          <p>You can filter the results using <code>ResourceId</code> and
     *             <code>ScalableDimension</code>.</p>
     *          <p>Scaling activities are triggered by CloudWatch alarms that are associated with scaling
     *          policies. To view the scaling policies for a service namespace, see <a>DescribeScalingPolicies</a>. To create a scaling policy or update an existing
     *          one, see <a>PutScalingPolicy</a>.</p>
     */
    describeScalingActivities(args: DescribeScalingActivitiesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeScalingActivitiesCommandOutput>;
    describeScalingActivities(args: DescribeScalingActivitiesCommandInput, cb: (err: any, data?: DescribeScalingActivitiesCommandOutput) => void): void;
    describeScalingActivities(args: DescribeScalingActivitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeScalingActivitiesCommandOutput) => void): void;
    /**
     * <p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p>
     *          <p>You can filter the results using <code>ResourceId</code>,
     *          <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p>
     *          <p>To create a scaling policy or update an existing one, see <a>PutScalingPolicy</a>. If you are no longer using a scaling policy, you can
     *          delete it using <a>DeleteScalingPolicy</a>.</p>
     */
    describeScalingPolicies(args: DescribeScalingPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeScalingPoliciesCommandOutput>;
    describeScalingPolicies(args: DescribeScalingPoliciesCommandInput, cb: (err: any, data?: DescribeScalingPoliciesCommandOutput) => void): void;
    describeScalingPolicies(args: DescribeScalingPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeScalingPoliciesCommandOutput) => void): void;
    /**
     * <p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p>
     *          <p>You can filter the results using the <code>ResourceId</code>,
     *             <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p>
     *          <p>To create a scheduled action or update an existing one, see <a>PutScheduledAction</a>. If you are no longer using a scheduled action, you can
     *          delete it using <a>DeleteScheduledAction</a>.</p>
     */
    describeScheduledActions(args: DescribeScheduledActionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeScheduledActionsCommandOutput>;
    describeScheduledActions(args: DescribeScheduledActionsCommandInput, cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void): void;
    describeScheduledActions(args: DescribeScheduledActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void): void;
    /**
     * <p>Creates or updates a policy for an Application Auto Scaling scalable target.</p>
     *          <p>Each scalable target is identified by a service namespace, resource ID, and scalable
     *          dimension. A scaling policy applies to the scalable target identified by those three
     *          attributes. You cannot create a scaling policy until you have registered the resource as a
     *          scalable target using <a>RegisterScalableTarget</a>.</p>
     *          <p>To update a policy, specify its policy name and the parameters that you want to change.
     *          Any parameters that you don't specify are not changed by this update request.</p>
     *          <p>You can view the scaling policies for a service namespace using <a>DescribeScalingPolicies</a>. If you are no longer using a scaling policy, you
     *          can delete it using <a>DeleteScalingPolicy</a>.</p>
     *          <p>Multiple scaling policies can be in force at the same time for the same scalable target.
     *          You can have one or more target tracking scaling policies, one or more step scaling
     *          policies, or both. However, there is a chance that multiple policies could conflict,
     *          instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives
     *          precedence to the policy that provides the largest capacity for both scale out and scale
     *          in. For example, if one policy increases capacity by 3, another policy increases capacity
     *          by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest
     *          calculated capacity (200% of 10 = 20) and scales out to 30. </p>
     *          <p>Learn more about how to work with scaling policies in the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling
     *             User Guide</a>.</p>
     */
    putScalingPolicy(args: PutScalingPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutScalingPolicyCommandOutput>;
    putScalingPolicy(args: PutScalingPolicyCommandInput, cb: (err: any, data?: PutScalingPolicyCommandOutput) => void): void;
    putScalingPolicy(args: PutScalingPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutScalingPolicyCommandOutput) => void): void;
    /**
     * <p>Creates or updates a scheduled action for an Application Auto Scaling scalable target.</p>
     *          <p>Each scalable target is identified by a service namespace, resource ID, and scalable
     *          dimension. A scheduled action applies to the scalable target identified by those three
     *          attributes. You cannot create a scheduled action until you have registered the resource as
     *          a scalable target using <a>RegisterScalableTarget</a>. </p>
     *          <p>To update an action, specify its name and the parameters that you want to change. If you
     *          don't specify start and end times, the old values are deleted. Any other parameters that
     *          you don't specify are not changed by this update request.</p>
     *          <p>You can view the scheduled actions using <a>DescribeScheduledActions</a>. If
     *          you are no longer using a scheduled action, you can delete it using <a>DeleteScheduledAction</a>.</p>
     *          <p>Learn more about how to work with scheduled actions in the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling
     *             User Guide</a>.</p>
     */
    putScheduledAction(args: PutScheduledActionCommandInput, options?: __HttpHandlerOptions): Promise<PutScheduledActionCommandOutput>;
    putScheduledAction(args: PutScheduledActionCommandInput, cb: (err: any, data?: PutScheduledActionCommandOutput) => void): void;
    putScheduledAction(args: PutScheduledActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutScheduledActionCommandOutput) => void): void;
    /**
     * <p>Registers or updates a scalable target. A scalable target is a resource that Application Auto Scaling
     *          can scale out and scale in. Scalable targets are uniquely identified by the combination of
     *          resource ID, scalable dimension, and namespace. </p>
     *          <p>When you register a new scalable target, you must specify values for minimum and maximum
     *          capacity. Application Auto Scaling will not scale capacity to values that are outside of this range. </p>
     *          <p>To update a scalable target, specify the parameter that you want to change as well as
     *          the following parameters that identify the scalable target: resource ID, scalable
     *          dimension, and namespace. Any parameters that you don't specify are not changed by this
     *          update request. </p>
     *          <p>After you register a scalable target, you do not need to register it again to use other
     *          Application Auto Scaling operations. To see which resources have been registered, use <a>DescribeScalableTargets</a>. You can also view the scaling policies for a
     *          service namespace by using <a>DescribeScalableTargets</a>. </p>
     *          <p>If you no longer need a scalable target, you can deregister it by using <a>DeregisterScalableTarget</a>.</p>
     */
    registerScalableTarget(args: RegisterScalableTargetCommandInput, options?: __HttpHandlerOptions): Promise<RegisterScalableTargetCommandOutput>;
    registerScalableTarget(args: RegisterScalableTargetCommandInput, cb: (err: any, data?: RegisterScalableTargetCommandOutput) => void): void;
    registerScalableTarget(args: RegisterScalableTargetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterScalableTargetCommandOutput) => void): void;
}
