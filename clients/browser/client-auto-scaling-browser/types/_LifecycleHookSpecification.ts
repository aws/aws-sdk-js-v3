/**
 * <p>Describes a lifecycle hook. Used in combination with <a>CreateAutoScalingGroup</a>.</p> <p>A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance launches (before it is put into service) or as the instance terminates (before it is fully terminated).</p> <p>This step is a part of the procedure for creating a lifecycle hook for an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state using using <a>RecordLifecycleActionHeartbeat</a>.</p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action using <a>CompleteLifecycleAction</a>.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling Lifecycle Hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using <a>DescribeLifecycleHooks</a>. You can modify an existing lifecycle hook or create new lifecycle hooks using <a>PutLifecycleHook</a>. If you are no longer using a lifecycle hook, you can delete it using <a>DeleteLifecycleHook</a>.</p>
 */
export interface _LifecycleHookSpecification {
  /**
   * <p>The name of the lifecycle hook.</p>
   */
  LifecycleHookName: string;

  /**
   * <p>The state of the EC2 instance to which you want to attach the lifecycle hook. The valid values are:</p> <ul> <li> <p>autoscaling:EC2_INSTANCE_LAUNCHING</p> </li> <li> <p>autoscaling:EC2_INSTANCE_TERMINATING</p> </li> </ul>
   */
  LifecycleTransition: string;

  /**
   * <p>Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target.</p>
   */
  NotificationMetadata?: string;

  /**
   * <p>The maximum time, in seconds, that can elapse before the lifecycle hook times out.</p> <p>If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the <code>DefaultResult</code> parameter. You can prevent the lifecycle hook from timing out by calling <a>RecordLifecycleActionHeartbeat</a>.</p>
   */
  HeartbeatTimeout?: number;

  /**
   * <p>Defines the action the Auto Scaling group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs. The valid values are <code>CONTINUE</code> and <code>ABANDON</code>. The default value is <code>ABANDON</code>.</p>
   */
  DefaultResult?: string;

  /**
   * <p>The ARN of the target that Amazon EC2 Auto Scaling sends notifications to when an instance is in the transition state for the lifecycle hook. The notification target can be either an SQS queue or an SNS topic.</p>
   */
  NotificationTargetARN?: string;

  /**
   * <p>The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue.</p>
   */
  RoleARN?: string;
}

export type _UnmarshalledLifecycleHookSpecification = _LifecycleHookSpecification;
