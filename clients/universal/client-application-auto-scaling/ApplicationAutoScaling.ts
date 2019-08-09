import { ApplicationAutoScalingClient } from "./ApplicationAutoScalingClient";
import { ConcurrentUpdateException } from "./types/ConcurrentUpdateException";
import { DeleteScalingPolicyInput } from "./types/DeleteScalingPolicyInput";
import { DeleteScalingPolicyOutput } from "./types/DeleteScalingPolicyOutput";
import { DeleteScheduledActionInput } from "./types/DeleteScheduledActionInput";
import { DeleteScheduledActionOutput } from "./types/DeleteScheduledActionOutput";
import { DeregisterScalableTargetInput } from "./types/DeregisterScalableTargetInput";
import { DeregisterScalableTargetOutput } from "./types/DeregisterScalableTargetOutput";
import { DescribeScalableTargetsInput } from "./types/DescribeScalableTargetsInput";
import { DescribeScalableTargetsOutput } from "./types/DescribeScalableTargetsOutput";
import { DescribeScalingActivitiesInput } from "./types/DescribeScalingActivitiesInput";
import { DescribeScalingActivitiesOutput } from "./types/DescribeScalingActivitiesOutput";
import { DescribeScalingPoliciesInput } from "./types/DescribeScalingPoliciesInput";
import { DescribeScalingPoliciesOutput } from "./types/DescribeScalingPoliciesOutput";
import { DescribeScheduledActionsInput } from "./types/DescribeScheduledActionsInput";
import { DescribeScheduledActionsOutput } from "./types/DescribeScheduledActionsOutput";
import { FailedResourceAccessException } from "./types/FailedResourceAccessException";
import { InternalServiceException } from "./types/InternalServiceException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ObjectNotFoundException } from "./types/ObjectNotFoundException";
import { PutScalingPolicyInput } from "./types/PutScalingPolicyInput";
import { PutScalingPolicyOutput } from "./types/PutScalingPolicyOutput";
import { PutScheduledActionInput } from "./types/PutScheduledActionInput";
import { PutScheduledActionOutput } from "./types/PutScheduledActionOutput";
import { RegisterScalableTargetInput } from "./types/RegisterScalableTargetInput";
import { RegisterScalableTargetOutput } from "./types/RegisterScalableTargetOutput";
import { ValidationException } from "./types/ValidationException";
import { DeleteScalingPolicyCommand } from "./commands/DeleteScalingPolicyCommand";
import { DeleteScheduledActionCommand } from "./commands/DeleteScheduledActionCommand";
import { DeregisterScalableTargetCommand } from "./commands/DeregisterScalableTargetCommand";
import { DescribeScalableTargetsCommand } from "./commands/DescribeScalableTargetsCommand";
import { DescribeScalingActivitiesCommand } from "./commands/DescribeScalingActivitiesCommand";
import { DescribeScalingPoliciesCommand } from "./commands/DescribeScalingPoliciesCommand";
import { DescribeScheduledActionsCommand } from "./commands/DescribeScheduledActionsCommand";
import { PutScalingPolicyCommand } from "./commands/PutScalingPolicyCommand";
import { PutScheduledActionCommand } from "./commands/PutScheduledActionCommand";
import { RegisterScalableTargetCommand } from "./commands/RegisterScalableTargetCommand";

export class ApplicationAutoScaling extends ApplicationAutoScalingClient {
  /**
   * <p>Deletes the specified Application Auto Scaling scaling policy.</p> <p>Deleting a policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action.</p> <p>To create a scaling policy or update an existing one, see <a>PutScalingPolicy</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the available parameters for the API request.</p>
   *   - {ObjectNotFoundException} <p>The specified object could not be found. For any operation that depends on the existence of a scalable target, this exception is thrown if the scalable target with the specified service namespace, resource ID, and scalable dimension does not exist. For any operation that deletes or deregisters a resource, this exception is thrown if the resource cannot be found.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to an Application Auto Scaling resource that already has a pending update.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteScalingPolicy(
    args: DeleteScalingPolicyInput
  ): Promise<DeleteScalingPolicyOutput>;
  public deleteScalingPolicy(
    args: DeleteScalingPolicyInput,
    cb: (err: any, data?: DeleteScalingPolicyOutput) => void
  ): void;
  public deleteScalingPolicy(
    args: DeleteScalingPolicyInput,
    cb?: (err: any, data?: DeleteScalingPolicyOutput) => void
  ): Promise<DeleteScalingPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteScalingPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Application Auto Scaling scheduled action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the available parameters for the API request.</p>
   *   - {ObjectNotFoundException} <p>The specified object could not be found. For any operation that depends on the existence of a scalable target, this exception is thrown if the scalable target with the specified service namespace, resource ID, and scalable dimension does not exist. For any operation that deletes or deregisters a resource, this exception is thrown if the resource cannot be found.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to an Application Auto Scaling resource that already has a pending update.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
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
   * <p>Deregisters a scalable target.</p> <p>Deregistering a scalable target deletes the scaling policies that are associated with it.</p> <p>To create a scalable target or update an existing one, see <a>RegisterScalableTarget</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the available parameters for the API request.</p>
   *   - {ObjectNotFoundException} <p>The specified object could not be found. For any operation that depends on the existence of a scalable target, this exception is thrown if the scalable target with the specified service namespace, resource ID, and scalable dimension does not exist. For any operation that deletes or deregisters a resource, this exception is thrown if the resource cannot be found.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to an Application Auto Scaling resource that already has a pending update.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterScalableTarget(
    args: DeregisterScalableTargetInput
  ): Promise<DeregisterScalableTargetOutput>;
  public deregisterScalableTarget(
    args: DeregisterScalableTargetInput,
    cb: (err: any, data?: DeregisterScalableTargetOutput) => void
  ): void;
  public deregisterScalableTarget(
    args: DeregisterScalableTargetInput,
    cb?: (err: any, data?: DeregisterScalableTargetOutput) => void
  ): Promise<DeregisterScalableTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterScalableTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the scalable targets in the specified namespace.</p> <p>You can filter the results using the <code>ResourceIds</code> and <code>ScalableDimension</code> parameters.</p> <p>To create a scalable target or update an existing one, see <a>RegisterScalableTarget</a>. If you are no longer using a scalable target, you can deregister it using <a>DeregisterScalableTarget</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the available parameters for the API request.</p>
   *   - {InvalidNextTokenException} <p>The next token supplied was invalid.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to an Application Auto Scaling resource that already has a pending update.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeScalableTargets(
    args: DescribeScalableTargetsInput
  ): Promise<DescribeScalableTargetsOutput>;
  public describeScalableTargets(
    args: DescribeScalableTargetsInput,
    cb: (err: any, data?: DescribeScalableTargetsOutput) => void
  ): void;
  public describeScalableTargets(
    args: DescribeScalableTargetsInput,
    cb?: (err: any, data?: DescribeScalableTargetsOutput) => void
  ): Promise<DescribeScalableTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeScalableTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks.</p> <p>You can filter the results using the <code>ResourceId</code> and <code>ScalableDimension</code> parameters.</p> <p>Scaling activities are triggered by CloudWatch alarms that are associated with scaling policies. To view the scaling policies for a service namespace, see <a>DescribeScalingPolicies</a>. To create a scaling policy or update an existing one, see <a>PutScalingPolicy</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the available parameters for the API request.</p>
   *   - {InvalidNextTokenException} <p>The next token supplied was invalid.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to an Application Auto Scaling resource that already has a pending update.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
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
   * <p>Describes the scaling policies for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>PolicyNames</code> parameters.</p> <p>To create a scaling policy or update an existing one, see <a>PutScalingPolicy</a>. If you are no longer using a scaling policy, you can delete it using <a>DeleteScalingPolicy</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the available parameters for the API request.</p>
   *   - {FailedResourceAccessException} <p>Failed access to resources caused an exception. This exception is thrown when Application Auto Scaling is unable to retrieve the alarms associated with a scaling policy due to a client error, for example, if the role ARN specified for a scalable target does not have permission to call the CloudWatch <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> on your behalf.</p>
   *   - {InvalidNextTokenException} <p>The next token supplied was invalid.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to an Application Auto Scaling resource that already has a pending update.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeScalingPolicies(
    args: DescribeScalingPoliciesInput
  ): Promise<DescribeScalingPoliciesOutput>;
  public describeScalingPolicies(
    args: DescribeScalingPoliciesInput,
    cb: (err: any, data?: DescribeScalingPoliciesOutput) => void
  ): void;
  public describeScalingPolicies(
    args: DescribeScalingPoliciesInput,
    cb?: (err: any, data?: DescribeScalingPoliciesOutput) => void
  ): Promise<DescribeScalingPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeScalingPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the scheduled actions for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p> <p>To create a scheduled action or update an existing one, see <a>PutScheduledAction</a>. If you are no longer using a scheduled action, you can delete it using <a>DeleteScheduledAction</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the available parameters for the API request.</p>
   *   - {InvalidNextTokenException} <p>The next token supplied was invalid.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to an Application Auto Scaling resource that already has a pending update.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
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
   * <p>Creates or updates a policy for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target using <a>RegisterScalableTarget</a>.</p> <p>To update a policy, specify its policy name and the parameters that you want to change. Any parameters that you don't specify are not changed by this update request.</p> <p>You can view the scaling policies for a service namespace using <a>DescribeScalingPolicies</a>. If you are no longer using a scaling policy, you can delete it using <a>DeleteScalingPolicy</a>.</p> <p>Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale in and scale out. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30. </p> <p>Learn more about how to work with scaling policies in the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling User Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the available parameters for the API request.</p>
   *   - {LimitExceededException} <p>A per-account resource limit is exceeded. For more information, see <a href="https://docs.aws.amazon.com/ApplicationAutoScaling/latest/userguide/application-auto-scaling-limits.html">Application Auto Scaling Limits</a>.</p>
   *   - {ObjectNotFoundException} <p>The specified object could not be found. For any operation that depends on the existence of a scalable target, this exception is thrown if the scalable target with the specified service namespace, resource ID, and scalable dimension does not exist. For any operation that deletes or deregisters a resource, this exception is thrown if the resource cannot be found.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to an Application Auto Scaling resource that already has a pending update.</p>
   *   - {FailedResourceAccessException} <p>Failed access to resources caused an exception. This exception is thrown when Application Auto Scaling is unable to retrieve the alarms associated with a scaling policy due to a client error, for example, if the role ARN specified for a scalable target does not have permission to call the CloudWatch <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> on your behalf.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
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
   * <p>Creates or updates a scheduled action for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target using <a>RegisterScalableTarget</a>. </p> <p>To update an action, specify its name and the parameters that you want to change. If you don't specify start and end times, the old values are deleted. Any other parameters that you don't specify are not changed by this update request.</p> <p>You can view the scheduled actions using <a>DescribeScheduledActions</a>. If you are no longer using a scheduled action, you can delete it using <a>DeleteScheduledAction</a>.</p> <p>Learn more about how to work with scheduled actions in the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling User Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the available parameters for the API request.</p>
   *   - {LimitExceededException} <p>A per-account resource limit is exceeded. For more information, see <a href="https://docs.aws.amazon.com/ApplicationAutoScaling/latest/userguide/application-auto-scaling-limits.html">Application Auto Scaling Limits</a>.</p>
   *   - {ObjectNotFoundException} <p>The specified object could not be found. For any operation that depends on the existence of a scalable target, this exception is thrown if the scalable target with the specified service namespace, resource ID, and scalable dimension does not exist. For any operation that deletes or deregisters a resource, this exception is thrown if the resource cannot be found.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to an Application Auto Scaling resource that already has a pending update.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putScheduledAction(
    args: PutScheduledActionInput
  ): Promise<PutScheduledActionOutput>;
  public putScheduledAction(
    args: PutScheduledActionInput,
    cb: (err: any, data?: PutScheduledActionOutput) => void
  ): void;
  public putScheduledAction(
    args: PutScheduledActionInput,
    cb?: (err: any, data?: PutScheduledActionOutput) => void
  ): Promise<PutScheduledActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutScheduledActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers or updates a scalable target. A scalable target is a resource that Application Auto Scaling can scale out and scale in. Each scalable target has a resource ID, scalable dimension, and namespace, as well as values for minimum and maximum capacity. </p> <p>After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use <a>DescribeScalableTargets</a>. You can also view the scaling policies for a service namespace using <a>DescribeScalableTargets</a>. </p> <p>If you no longer need a scalable target, you can deregister it using <a>DeregisterScalableTarget</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>An exception was thrown for a validation issue. Review the available parameters for the API request.</p>
   *   - {LimitExceededException} <p>A per-account resource limit is exceeded. For more information, see <a href="https://docs.aws.amazon.com/ApplicationAutoScaling/latest/userguide/application-auto-scaling-limits.html">Application Auto Scaling Limits</a>.</p>
   *   - {ConcurrentUpdateException} <p>Concurrent updates caused an exception, for example, if you request an update to an Application Auto Scaling resource that already has a pending update.</p>
   *   - {InternalServiceException} <p>The service encountered an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerScalableTarget(
    args: RegisterScalableTargetInput
  ): Promise<RegisterScalableTargetOutput>;
  public registerScalableTarget(
    args: RegisterScalableTargetInput,
    cb: (err: any, data?: RegisterScalableTargetOutput) => void
  ): void;
  public registerScalableTarget(
    args: RegisterScalableTargetInput,
    cb?: (err: any, data?: RegisterScalableTargetOutput) => void
  ): Promise<RegisterScalableTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterScalableTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
