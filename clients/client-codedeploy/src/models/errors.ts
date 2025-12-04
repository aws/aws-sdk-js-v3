// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodeDeployServiceException as __BaseException } from "./CodeDeployServiceException";

/**
 * <p>The maximum number of allowed on-premises instances in a single call was
 *             exceeded.</p>
 * @public
 */
export class InstanceLimitExceededException extends __BaseException {
  readonly name = "InstanceLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceLimitExceededException, __BaseException>) {
    super({
      name: "InstanceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceLimitExceededException.prototype);
  }
}

/**
 * <p>An on-premises instance name was not specified.</p>
 * @public
 */
export class InstanceNameRequiredException extends __BaseException {
  readonly name = "InstanceNameRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceNameRequiredException, __BaseException>) {
    super({
      name: "InstanceNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceNameRequiredException.prototype);
  }
}

/**
 * <p>The specified on-premises instance is not registered.</p>
 * @public
 */
export class InstanceNotRegisteredException extends __BaseException {
  readonly name = "InstanceNotRegisteredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceNotRegisteredException, __BaseException>) {
    super({
      name: "InstanceNotRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceNotRegisteredException.prototype);
  }
}

/**
 * <p>The on-premises instance name was specified in an invalid format.</p>
 * @public
 */
export class InvalidInstanceNameException extends __BaseException {
  readonly name = "InvalidInstanceNameException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInstanceNameException, __BaseException>) {
    super({
      name: "InvalidInstanceNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInstanceNameException.prototype);
  }
}

/**
 * <p>The tag was specified in an invalid format.</p>
 * @public
 */
export class InvalidTagException extends __BaseException {
  readonly name = "InvalidTagException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagException, __BaseException>) {
    super({
      name: "InvalidTagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagException.prototype);
  }
}

/**
 * <p>The maximum allowed number of tags was exceeded.</p>
 * @public
 */
export class TagLimitExceededException extends __BaseException {
  readonly name = "TagLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagLimitExceededException, __BaseException>) {
    super({
      name: "TagLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagLimitExceededException.prototype);
  }
}

/**
 * <p>A tag was not specified.</p>
 * @public
 */
export class TagRequiredException extends __BaseException {
  readonly name = "TagRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagRequiredException, __BaseException>) {
    super({
      name: "TagRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagRequiredException.prototype);
  }
}

/**
 * <p>The maximum number of alarms for a deployment group (10) was exceeded.</p>
 * @public
 */
export class AlarmsLimitExceededException extends __BaseException {
  readonly name = "AlarmsLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlarmsLimitExceededException, __BaseException>) {
    super({
      name: "AlarmsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlarmsLimitExceededException.prototype);
  }
}

/**
 * <p>An application with the specified name with the user or Amazon Web Services account
 *             already exists.</p>
 * @public
 */
export class ApplicationAlreadyExistsException extends __BaseException {
  readonly name = "ApplicationAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApplicationAlreadyExistsException, __BaseException>) {
    super({
      name: "ApplicationAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApplicationAlreadyExistsException.prototype);
  }
}

/**
 * <p>The application does not exist with the user or Amazon Web Services account.</p>
 * @public
 */
export class ApplicationDoesNotExistException extends __BaseException {
  readonly name = "ApplicationDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApplicationDoesNotExistException, __BaseException>) {
    super({
      name: "ApplicationDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApplicationDoesNotExistException.prototype);
  }
}

/**
 * <p>More applications were attempted to be created than are allowed.</p>
 * @public
 */
export class ApplicationLimitExceededException extends __BaseException {
  readonly name = "ApplicationLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApplicationLimitExceededException, __BaseException>) {
    super({
      name: "ApplicationLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApplicationLimitExceededException.prototype);
  }
}

/**
 * <p>The minimum number of required application names was not specified.</p>
 * @public
 */
export class ApplicationNameRequiredException extends __BaseException {
  readonly name = "ApplicationNameRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApplicationNameRequiredException, __BaseException>) {
    super({
      name: "ApplicationNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApplicationNameRequiredException.prototype);
  }
}

/**
 * <p> The specified ARN is not supported. For example, it might be an ARN for a resource
 *             that is not expected. </p>
 * @public
 */
export class ArnNotSupportedException extends __BaseException {
  readonly name = "ArnNotSupportedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ArnNotSupportedException, __BaseException>) {
    super({
      name: "ArnNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ArnNotSupportedException.prototype);
  }
}

/**
 * <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
 * @public
 */
export class BatchLimitExceededException extends __BaseException {
  readonly name = "BatchLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchLimitExceededException, __BaseException>) {
    super({
      name: "BatchLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchLimitExceededException.prototype);
  }
}

/**
 * <p>The application name was specified in an invalid format.</p>
 * @public
 */
export class InvalidApplicationNameException extends __BaseException {
  readonly name = "InvalidApplicationNameException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidApplicationNameException, __BaseException>) {
    super({
      name: "InvalidApplicationNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidApplicationNameException.prototype);
  }
}

/**
 * <p>The revision was specified in an invalid format.</p>
 * @public
 */
export class InvalidRevisionException extends __BaseException {
  readonly name = "InvalidRevisionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRevisionException, __BaseException>) {
    super({
      name: "InvalidRevisionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRevisionException.prototype);
  }
}

/**
 * <p>The revision ID was not specified.</p>
 * @public
 */
export class RevisionRequiredException extends __BaseException {
  readonly name = "RevisionRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RevisionRequiredException, __BaseException>) {
    super({
      name: "RevisionRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RevisionRequiredException.prototype);
  }
}

/**
 * <p>The deployment configuration does not exist with the user or Amazon Web Services account.</p>
 * @public
 */
export class DeploymentConfigDoesNotExistException extends __BaseException {
  readonly name = "DeploymentConfigDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentConfigDoesNotExistException, __BaseException>) {
    super({
      name: "DeploymentConfigDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentConfigDoesNotExistException.prototype);
  }
}

/**
 * <p>The deployment group name was not specified.</p>
 * @public
 */
export class DeploymentGroupNameRequiredException extends __BaseException {
  readonly name = "DeploymentGroupNameRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentGroupNameRequiredException, __BaseException>) {
    super({
      name: "DeploymentGroupNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentGroupNameRequiredException.prototype);
  }
}

/**
 * <p>The deployment group name was specified in an invalid format.</p>
 * @public
 */
export class InvalidDeploymentGroupNameException extends __BaseException {
  readonly name = "InvalidDeploymentGroupNameException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentGroupNameException, __BaseException>) {
    super({
      name: "InvalidDeploymentGroupNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentGroupNameException.prototype);
  }
}

/**
 * <p>The deployment with the user or Amazon Web Services account does not exist.</p>
 * @public
 */
export class DeploymentDoesNotExistException extends __BaseException {
  readonly name = "DeploymentDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentDoesNotExistException, __BaseException>) {
    super({
      name: "DeploymentDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentDoesNotExistException.prototype);
  }
}

/**
 * <p>At least one deployment ID must be specified.</p>
 * @public
 */
export class DeploymentIdRequiredException extends __BaseException {
  readonly name = "DeploymentIdRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentIdRequiredException, __BaseException>) {
    super({
      name: "DeploymentIdRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentIdRequiredException.prototype);
  }
}

/**
 * <p>The instance ID was not specified.</p>
 *
 * @deprecated This exception is deprecated, use DeploymentTargetIdRequiredException instead.
 * @public
 */
export class InstanceIdRequiredException extends __BaseException {
  readonly name = "InstanceIdRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceIdRequiredException, __BaseException>) {
    super({
      name: "InstanceIdRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceIdRequiredException.prototype);
  }
}

/**
 * <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code>, <code>Server</code>, or <code>ECS</code>.</p>
 * @public
 */
export class InvalidComputePlatformException extends __BaseException {
  readonly name = "InvalidComputePlatformException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidComputePlatformException, __BaseException>) {
    super({
      name: "InvalidComputePlatformException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidComputePlatformException.prototype);
  }
}

/**
 * <p>At least one of the deployment IDs was specified in an invalid format.</p>
 * @public
 */
export class InvalidDeploymentIdException extends __BaseException {
  readonly name = "InvalidDeploymentIdException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentIdException, __BaseException>) {
    super({
      name: "InvalidDeploymentIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentIdException.prototype);
  }
}

/**
 * <p>The specified deployment has not started.</p>
 * @public
 */
export class DeploymentNotStartedException extends __BaseException {
  readonly name = "DeploymentNotStartedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentNotStartedException, __BaseException>) {
    super({
      name: "DeploymentNotStartedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentNotStartedException.prototype);
  }
}

/**
 * <p> The provided target ID does not belong to the attempted deployment. </p>
 * @public
 */
export class DeploymentTargetDoesNotExistException extends __BaseException {
  readonly name = "DeploymentTargetDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentTargetDoesNotExistException, __BaseException>) {
    super({
      name: "DeploymentTargetDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentTargetDoesNotExistException.prototype);
  }
}

/**
 * <p> A deployment target ID was not provided. </p>
 * @public
 */
export class DeploymentTargetIdRequiredException extends __BaseException {
  readonly name = "DeploymentTargetIdRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentTargetIdRequiredException, __BaseException>) {
    super({
      name: "DeploymentTargetIdRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentTargetIdRequiredException.prototype);
  }
}

/**
 * <p> The maximum number of targets that can be associated with an Amazon ECS or
 *                 Lambda deployment was exceeded. The target list of both types of
 *             deployments must have exactly one item. This exception does not apply to EC2/On-premises
 *             deployments. </p>
 * @public
 */
export class DeploymentTargetListSizeExceededException extends __BaseException {
  readonly name = "DeploymentTargetListSizeExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentTargetListSizeExceededException, __BaseException>) {
    super({
      name: "DeploymentTargetListSizeExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentTargetListSizeExceededException.prototype);
  }
}

/**
 * <p>The specified instance does not exist in the deployment group.</p>
 *
 * @deprecated This exception is deprecated, use DeploymentTargetDoesNotExistException instead.
 * @public
 */
export class InstanceDoesNotExistException extends __BaseException {
  readonly name = "InstanceDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceDoesNotExistException, __BaseException>) {
    super({
      name: "InstanceDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceDoesNotExistException.prototype);
  }
}

/**
 * <p> The target ID provided was not valid. </p>
 * @public
 */
export class InvalidDeploymentTargetIdException extends __BaseException {
  readonly name = "InvalidDeploymentTargetIdException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentTargetIdException, __BaseException>) {
    super({
      name: "InvalidDeploymentTargetIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentTargetIdException.prototype);
  }
}

/**
 * <p>A bucket name is required, but was not provided.</p>
 * @public
 */
export class BucketNameFilterRequiredException extends __BaseException {
  readonly name = "BucketNameFilterRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BucketNameFilterRequiredException, __BaseException>) {
    super({
      name: "BucketNameFilterRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BucketNameFilterRequiredException.prototype);
  }
}

/**
 * <p>The deployment is already complete.</p>
 * @public
 */
export class DeploymentAlreadyCompletedException extends __BaseException {
  readonly name = "DeploymentAlreadyCompletedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentAlreadyCompletedException, __BaseException>) {
    super({
      name: "DeploymentAlreadyCompletedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentAlreadyCompletedException.prototype);
  }
}

/**
 * <p>The deployment does not have a status of Ready and can't continue yet.</p>
 * @public
 */
export class DeploymentIsNotInReadyStateException extends __BaseException {
  readonly name = "DeploymentIsNotInReadyStateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentIsNotInReadyStateException, __BaseException>) {
    super({
      name: "DeploymentIsNotInReadyStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentIsNotInReadyStateException.prototype);
  }
}

/**
 * <p>The specified deployment status doesn't exist or cannot be determined.</p>
 * @public
 */
export class InvalidDeploymentStatusException extends __BaseException {
  readonly name = "InvalidDeploymentStatusException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentStatusException, __BaseException>) {
    super({
      name: "InvalidDeploymentStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentStatusException.prototype);
  }
}

/**
 * <p> The wait type is invalid. </p>
 * @public
 */
export class InvalidDeploymentWaitTypeException extends __BaseException {
  readonly name = "InvalidDeploymentWaitTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentWaitTypeException, __BaseException>) {
    super({
      name: "InvalidDeploymentWaitTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentWaitTypeException.prototype);
  }
}

/**
 * <p>A call was submitted that is not supported for the specified deployment type.</p>
 * @public
 */
export class UnsupportedActionForDeploymentTypeException extends __BaseException {
  readonly name = "UnsupportedActionForDeploymentTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedActionForDeploymentTypeException, __BaseException>) {
    super({
      name: "UnsupportedActionForDeploymentTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedActionForDeploymentTypeException.prototype);
  }
}

/**
 * <p> The specified tags are not valid. </p>
 * @public
 */
export class InvalidTagsToAddException extends __BaseException {
  readonly name = "InvalidTagsToAddException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagsToAddException, __BaseException>) {
    super({
      name: "InvalidTagsToAddException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagsToAddException.prototype);
  }
}

/**
 * <p>The named deployment group with the user or Amazon Web Services account does not
 *             exist.</p>
 * @public
 */
export class DeploymentGroupDoesNotExistException extends __BaseException {
  readonly name = "DeploymentGroupDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentGroupDoesNotExistException, __BaseException>) {
    super({
      name: "DeploymentGroupDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentGroupDoesNotExistException.prototype);
  }
}

/**
 * <p>The number of allowed deployments was exceeded.</p>
 * @public
 */
export class DeploymentLimitExceededException extends __BaseException {
  readonly name = "DeploymentLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentLimitExceededException, __BaseException>) {
    super({
      name: "DeploymentLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentLimitExceededException.prototype);
  }
}

/**
 * <p>The description is too long.</p>
 * @public
 */
export class DescriptionTooLongException extends __BaseException {
  readonly name = "DescriptionTooLongException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DescriptionTooLongException, __BaseException>) {
    super({
      name: "DescriptionTooLongException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DescriptionTooLongException.prototype);
  }
}

/**
 * <p>The format of the alarm configuration is invalid. Possible causes include:</p>
 *          <ul>
 *             <li>
 *                <p>The alarm list is null.</p>
 *             </li>
 *             <li>
 *                <p>The alarm object is null.</p>
 *             </li>
 *             <li>
 *                <p>The alarm name is empty or null or exceeds the limit of 255 characters.</p>
 *             </li>
 *             <li>
 *                <p>Two alarms with the same name have been specified.</p>
 *             </li>
 *             <li>
 *                <p>The alarm configuration is enabled, but the alarm list is empty.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class InvalidAlarmConfigException extends __BaseException {
  readonly name = "InvalidAlarmConfigException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAlarmConfigException, __BaseException>) {
    super({
      name: "InvalidAlarmConfigException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAlarmConfigException.prototype);
  }
}

/**
 * <p>The automatic rollback configuration was specified in an invalid format. For example,
 *             automatic rollback is enabled, but an invalid triggering event type or no event types
 *             were listed.</p>
 * @public
 */
export class InvalidAutoRollbackConfigException extends __BaseException {
  readonly name = "InvalidAutoRollbackConfigException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAutoRollbackConfigException, __BaseException>) {
    super({
      name: "InvalidAutoRollbackConfigException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAutoRollbackConfigException.prototype);
  }
}

/**
 * <p>The Auto Scaling group was specified in an invalid format or does not
 *             exist.</p>
 * @public
 */
export class InvalidAutoScalingGroupException extends __BaseException {
  readonly name = "InvalidAutoScalingGroupException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAutoScalingGroupException, __BaseException>) {
    super({
      name: "InvalidAutoScalingGroupException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAutoScalingGroupException.prototype);
  }
}

/**
 * <p>The deployment configuration name was specified in an invalid format.</p>
 * @public
 */
export class InvalidDeploymentConfigNameException extends __BaseException {
  readonly name = "InvalidDeploymentConfigNameException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentConfigNameException, __BaseException>) {
    super({
      name: "InvalidDeploymentConfigNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentConfigNameException.prototype);
  }
}

/**
 * <p>An invalid fileExistsBehavior option was specified to determine how CodeDeploy handles files or directories that already exist in a deployment
 *             target location, but weren't part of the previous successful deployment. Valid values
 *             include "DISALLOW," "OVERWRITE," and "RETAIN."</p>
 * @public
 */
export class InvalidFileExistsBehaviorException extends __BaseException {
  readonly name = "InvalidFileExistsBehaviorException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFileExistsBehaviorException, __BaseException>) {
    super({
      name: "InvalidFileExistsBehaviorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFileExistsBehaviorException.prototype);
  }
}

/**
 * <p>The GitHub token is not valid.</p>
 * @public
 */
export class InvalidGitHubAccountTokenException extends __BaseException {
  readonly name = "InvalidGitHubAccountTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGitHubAccountTokenException, __BaseException>) {
    super({
      name: "InvalidGitHubAccountTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGitHubAccountTokenException.prototype);
  }
}

/**
 * <p>The IgnoreApplicationStopFailures value is invalid. For Lambda
 *             deployments, <code>false</code> is expected. For EC2/On-premises deployments,
 *                 <code>true</code> or <code>false</code> is expected.</p>
 * @public
 */
export class InvalidIgnoreApplicationStopFailuresValueException extends __BaseException {
  readonly name = "InvalidIgnoreApplicationStopFailuresValueException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidIgnoreApplicationStopFailuresValueException, __BaseException>) {
    super({
      name: "InvalidIgnoreApplicationStopFailuresValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidIgnoreApplicationStopFailuresValueException.prototype);
  }
}

/**
 * <p>An invalid load balancer name, or no load balancer name, was specified.</p>
 * @public
 */
export class InvalidLoadBalancerInfoException extends __BaseException {
  readonly name = "InvalidLoadBalancerInfoException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLoadBalancerInfoException, __BaseException>) {
    super({
      name: "InvalidLoadBalancerInfoException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLoadBalancerInfoException.prototype);
  }
}

/**
 * <p>The service role ARN was specified in an invalid format. Or, if an Auto Scaling
 *             group was specified, the specified service role does not grant the appropriate
 *             permissions to Amazon EC2 Auto Scaling.</p>
 * @public
 */
export class InvalidRoleException extends __BaseException {
  readonly name = "InvalidRoleException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRoleException, __BaseException>) {
    super({
      name: "InvalidRoleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRoleException.prototype);
  }
}

/**
 * <p>The target instance configuration is invalid. Possible causes include:</p>
 *          <ul>
 *             <li>
 *                <p>Configuration data for target instances was entered for an in-place
 *                     deployment.</p>
 *             </li>
 *             <li>
 *                <p>The limit of 10 tags for a tag type was exceeded.</p>
 *             </li>
 *             <li>
 *                <p>The combined length of the tag names exceeded the limit. </p>
 *             </li>
 *             <li>
 *                <p>A specified tag is not currently applied to any instances.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class InvalidTargetInstancesException extends __BaseException {
  readonly name = "InvalidTargetInstancesException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetInstancesException, __BaseException>) {
    super({
      name: "InvalidTargetInstancesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetInstancesException.prototype);
  }
}

/**
 * <p> The configuration that specifies how traffic is routed during a deployment is
 *             invalid.</p>
 * @public
 */
export class InvalidTrafficRoutingConfigurationException extends __BaseException {
  readonly name = "InvalidTrafficRoutingConfigurationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTrafficRoutingConfigurationException, __BaseException>) {
    super({
      name: "InvalidTrafficRoutingConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTrafficRoutingConfigurationException.prototype);
  }
}

/**
 * <p>The UpdateOutdatedInstancesOnly value is invalid. For Lambda
 *             deployments, <code>false</code> is expected. For EC2/On-premises deployments,
 *                 <code>true</code> or <code>false</code> is expected.</p>
 * @public
 */
export class InvalidUpdateOutdatedInstancesOnlyValueException extends __BaseException {
  readonly name = "InvalidUpdateOutdatedInstancesOnlyValueException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUpdateOutdatedInstancesOnlyValueException, __BaseException>) {
    super({
      name: "InvalidUpdateOutdatedInstancesOnlyValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUpdateOutdatedInstancesOnlyValueException.prototype);
  }
}

/**
 * <p>The named revision does not exist with the user or Amazon Web Services account.</p>
 * @public
 */
export class RevisionDoesNotExistException extends __BaseException {
  readonly name = "RevisionDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RevisionDoesNotExistException, __BaseException>) {
    super({
      name: "RevisionDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RevisionDoesNotExistException.prototype);
  }
}

/**
 * <p>An API function was called too frequently.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>A deployment configuration with the specified name with the user or Amazon Web Services account already exists.</p>
 * @public
 */
export class DeploymentConfigAlreadyExistsException extends __BaseException {
  readonly name = "DeploymentConfigAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentConfigAlreadyExistsException, __BaseException>) {
    super({
      name: "DeploymentConfigAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentConfigAlreadyExistsException.prototype);
  }
}

/**
 * <p>The deployment configurations limit was exceeded.</p>
 * @public
 */
export class DeploymentConfigLimitExceededException extends __BaseException {
  readonly name = "DeploymentConfigLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentConfigLimitExceededException, __BaseException>) {
    super({
      name: "DeploymentConfigLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentConfigLimitExceededException.prototype);
  }
}

/**
 * <p>The deployment configuration name was not specified.</p>
 * @public
 */
export class DeploymentConfigNameRequiredException extends __BaseException {
  readonly name = "DeploymentConfigNameRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentConfigNameRequiredException, __BaseException>) {
    super({
      name: "DeploymentConfigNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentConfigNameRequiredException.prototype);
  }
}

/**
 * <p>The minimum healthy instance value was specified in an invalid format.</p>
 * @public
 */
export class InvalidMinimumHealthyHostValueException extends __BaseException {
  readonly name = "InvalidMinimumHealthyHostValueException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMinimumHealthyHostValueException, __BaseException>) {
    super({
      name: "InvalidMinimumHealthyHostValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMinimumHealthyHostValueException.prototype);
  }
}

/**
 * <p>The <code>ZonalConfig</code> object is not valid.</p>
 * @public
 */
export class InvalidZonalDeploymentConfigurationException extends __BaseException {
  readonly name = "InvalidZonalDeploymentConfigurationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidZonalDeploymentConfigurationException, __BaseException>) {
    super({
      name: "InvalidZonalDeploymentConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidZonalDeploymentConfigurationException.prototype);
  }
}

/**
 * <p>A deployment group with the specified name with the user or Amazon Web Services account
 *             already exists.</p>
 * @public
 */
export class DeploymentGroupAlreadyExistsException extends __BaseException {
  readonly name = "DeploymentGroupAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentGroupAlreadyExistsException, __BaseException>) {
    super({
      name: "DeploymentGroupAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentGroupAlreadyExistsException.prototype);
  }
}

/**
 * <p> The deployment groups limit was exceeded.</p>
 * @public
 */
export class DeploymentGroupLimitExceededException extends __BaseException {
  readonly name = "DeploymentGroupLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentGroupLimitExceededException, __BaseException>) {
    super({
      name: "DeploymentGroupLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentGroupLimitExceededException.prototype);
  }
}

/**
 * <p> The Amazon ECS service is associated with more than one deployment groups. An
 *             Amazon ECS service can be associated with only one deployment group. </p>
 * @public
 */
export class ECSServiceMappingLimitExceededException extends __BaseException {
  readonly name = "ECSServiceMappingLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ECSServiceMappingLimitExceededException, __BaseException>) {
    super({
      name: "ECSServiceMappingLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ECSServiceMappingLimitExceededException.prototype);
  }
}

/**
 * <p>The configuration for the blue/green deployment group was provided in an invalid
 *             format. For information about deployment configuration format, see <a>CreateDeploymentConfig</a>.</p>
 * @public
 */
export class InvalidBlueGreenDeploymentConfigurationException extends __BaseException {
  readonly name = "InvalidBlueGreenDeploymentConfigurationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidBlueGreenDeploymentConfigurationException, __BaseException>) {
    super({
      name: "InvalidBlueGreenDeploymentConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidBlueGreenDeploymentConfigurationException.prototype);
  }
}

/**
 * <p>An invalid deployment style was specified. Valid deployment types include "IN_PLACE"
 *             and "BLUE_GREEN." Valid deployment options include "WITH_TRAFFIC_CONTROL" and
 *             "WITHOUT_TRAFFIC_CONTROL."</p>
 * @public
 */
export class InvalidDeploymentStyleException extends __BaseException {
  readonly name = "InvalidDeploymentStyleException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentStyleException, __BaseException>) {
    super({
      name: "InvalidDeploymentStyleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentStyleException.prototype);
  }
}

/**
 * <p>A call was submitted that specified both Ec2TagFilters and Ec2TagSet, but only one of
 *             these data types can be used in a single call.</p>
 * @public
 */
export class InvalidEC2TagCombinationException extends __BaseException {
  readonly name = "InvalidEC2TagCombinationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEC2TagCombinationException, __BaseException>) {
    super({
      name: "InvalidEC2TagCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEC2TagCombinationException.prototype);
  }
}

/**
 * <p>The tag was specified in an invalid format.</p>
 * @public
 */
export class InvalidEC2TagException extends __BaseException {
  readonly name = "InvalidEC2TagException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEC2TagException, __BaseException>) {
    super({
      name: "InvalidEC2TagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEC2TagException.prototype);
  }
}

/**
 * <p> The Amazon ECS service identifier is not valid. </p>
 * @public
 */
export class InvalidECSServiceException extends __BaseException {
  readonly name = "InvalidECSServiceException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidECSServiceException, __BaseException>) {
    super({
      name: "InvalidECSServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidECSServiceException.prototype);
  }
}

/**
 * <p>The input was specified in an invalid format.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name = "InvalidInputException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
  }
}

/**
 * <p>A call was submitted that specified both OnPremisesTagFilters and OnPremisesTagSet,
 *             but only one of these data types can be used in a single call.</p>
 * @public
 */
export class InvalidOnPremisesTagCombinationException extends __BaseException {
  readonly name = "InvalidOnPremisesTagCombinationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOnPremisesTagCombinationException, __BaseException>) {
    super({
      name: "InvalidOnPremisesTagCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOnPremisesTagCombinationException.prototype);
  }
}

/**
 * <p> A target group pair associated with this deployment is not valid. </p>
 * @public
 */
export class InvalidTargetGroupPairException extends __BaseException {
  readonly name = "InvalidTargetGroupPairException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetGroupPairException, __BaseException>) {
    super({
      name: "InvalidTargetGroupPairException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetGroupPairException.prototype);
  }
}

/**
 * <p>The trigger was specified in an invalid format.</p>
 * @public
 */
export class InvalidTriggerConfigException extends __BaseException {
  readonly name = "InvalidTriggerConfigException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTriggerConfigException, __BaseException>) {
    super({
      name: "InvalidTriggerConfigException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTriggerConfigException.prototype);
  }
}

/**
 * <p>The limit for lifecycle hooks was exceeded.</p>
 * @public
 */
export class LifecycleHookLimitExceededException extends __BaseException {
  readonly name = "LifecycleHookLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LifecycleHookLimitExceededException, __BaseException>) {
    super({
      name: "LifecycleHookLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LifecycleHookLimitExceededException.prototype);
  }
}

/**
 * <p>The role ID was not specified.</p>
 * @public
 */
export class RoleRequiredException extends __BaseException {
  readonly name = "RoleRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RoleRequiredException, __BaseException>) {
    super({
      name: "RoleRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RoleRequiredException.prototype);
  }
}

/**
 * <p>The number of tag groups included in the tag set list exceeded the maximum allowed
 *             limit of 3.</p>
 * @public
 */
export class TagSetListLimitExceededException extends __BaseException {
  readonly name = "TagSetListLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagSetListLimitExceededException, __BaseException>) {
    super({
      name: "TagSetListLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagSetListLimitExceededException.prototype);
  }
}

/**
 * <p>The maximum allowed number of triggers was exceeded.</p>
 * @public
 */
export class TriggerTargetsLimitExceededException extends __BaseException {
  readonly name = "TriggerTargetsLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TriggerTargetsLimitExceededException, __BaseException>) {
    super({
      name: "TriggerTargetsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TriggerTargetsLimitExceededException.prototype);
  }
}

/**
 * <p>The deployment configuration is still in use.</p>
 * @public
 */
export class DeploymentConfigInUseException extends __BaseException {
  readonly name = "DeploymentConfigInUseException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentConfigInUseException, __BaseException>) {
    super({
      name: "DeploymentConfigInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentConfigInUseException.prototype);
  }
}

/**
 * <p>An invalid operation was detected.</p>
 * @public
 */
export class InvalidOperationException extends __BaseException {
  readonly name = "InvalidOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationException, __BaseException>) {
    super({
      name: "InvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationException.prototype);
  }
}

/**
 * <p>No GitHub account connection exists with the named specified in the call.</p>
 * @public
 */
export class GitHubAccountTokenDoesNotExistException extends __BaseException {
  readonly name = "GitHubAccountTokenDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GitHubAccountTokenDoesNotExistException, __BaseException>) {
    super({
      name: "GitHubAccountTokenDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GitHubAccountTokenDoesNotExistException.prototype);
  }
}

/**
 * <p>The call is missing a required GitHub account connection name.</p>
 * @public
 */
export class GitHubAccountTokenNameRequiredException extends __BaseException {
  readonly name = "GitHubAccountTokenNameRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GitHubAccountTokenNameRequiredException, __BaseException>) {
    super({
      name: "GitHubAccountTokenNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GitHubAccountTokenNameRequiredException.prototype);
  }
}

/**
 * <p>The format of the specified GitHub account connection name is invalid.</p>
 * @public
 */
export class InvalidGitHubAccountTokenNameException extends __BaseException {
  readonly name = "InvalidGitHubAccountTokenNameException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGitHubAccountTokenNameException, __BaseException>) {
    super({
      name: "InvalidGitHubAccountTokenNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGitHubAccountTokenNameException.prototype);
  }
}

/**
 * <p>The API used does not support the deployment.</p>
 * @public
 */
export class OperationNotSupportedException extends __BaseException {
  readonly name = "OperationNotSupportedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotSupportedException, __BaseException>) {
    super({
      name: "OperationNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotSupportedException.prototype);
  }
}

/**
 * <p>The specified resource could not be validated.</p>
 * @public
 */
export class ResourceValidationException extends __BaseException {
  readonly name = "ResourceValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceValidationException, __BaseException>) {
    super({
      name: "ResourceValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceValidationException.prototype);
  }
}

/**
 * <p>The bucket name either doesn't exist or was specified in an invalid format.</p>
 * @public
 */
export class InvalidBucketNameFilterException extends __BaseException {
  readonly name = "InvalidBucketNameFilterException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidBucketNameFilterException, __BaseException>) {
    super({
      name: "InvalidBucketNameFilterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidBucketNameFilterException.prototype);
  }
}

/**
 * <p>The deployed state filter was specified in an invalid format.</p>
 * @public
 */
export class InvalidDeployedStateFilterException extends __BaseException {
  readonly name = "InvalidDeployedStateFilterException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeployedStateFilterException, __BaseException>) {
    super({
      name: "InvalidDeployedStateFilterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeployedStateFilterException.prototype);
  }
}

/**
 * <p>The specified key prefix filter was specified in an invalid format.</p>
 * @public
 */
export class InvalidKeyPrefixFilterException extends __BaseException {
  readonly name = "InvalidKeyPrefixFilterException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidKeyPrefixFilterException, __BaseException>) {
    super({
      name: "InvalidKeyPrefixFilterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidKeyPrefixFilterException.prototype);
  }
}

/**
 * <p>The next token was specified in an invalid format.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
  }
}

/**
 * <p>The column name to sort by is either not present or was specified in an invalid
 *             format.</p>
 * @public
 */
export class InvalidSortByException extends __BaseException {
  readonly name = "InvalidSortByException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSortByException, __BaseException>) {
    super({
      name: "InvalidSortByException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSortByException.prototype);
  }
}

/**
 * <p>The sort order was specified in an invalid format.</p>
 * @public
 */
export class InvalidSortOrderException extends __BaseException {
  readonly name = "InvalidSortOrderException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSortOrderException, __BaseException>) {
    super({
      name: "InvalidSortOrderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSortOrderException.prototype);
  }
}

/**
 * <p>An instance type was specified for an in-place deployment. Instance types are
 *             supported for blue/green deployments only.</p>
 * @public
 */
export class InvalidDeploymentInstanceTypeException extends __BaseException {
  readonly name = "InvalidDeploymentInstanceTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentInstanceTypeException, __BaseException>) {
    super({
      name: "InvalidDeploymentInstanceTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentInstanceTypeException.prototype);
  }
}

/**
 * <p>The specified instance status does not exist.</p>
 * @public
 */
export class InvalidInstanceStatusException extends __BaseException {
  readonly name = "InvalidInstanceStatusException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInstanceStatusException, __BaseException>) {
    super({
      name: "InvalidInstanceStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInstanceStatusException.prototype);
  }
}

/**
 * <p>An invalid instance type was specified for instances in a blue/green deployment. Valid
 *             values include "Blue" for an original environment and "Green" for a replacement
 *             environment.</p>
 * @public
 */
export class InvalidInstanceTypeException extends __BaseException {
  readonly name = "InvalidInstanceTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInstanceTypeException, __BaseException>) {
    super({
      name: "InvalidInstanceTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInstanceTypeException.prototype);
  }
}

/**
 * <p> The target filter name is invalid. </p>
 * @public
 */
export class InvalidTargetFilterNameException extends __BaseException {
  readonly name = "InvalidTargetFilterNameException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetFilterNameException, __BaseException>) {
    super({
      name: "InvalidTargetFilterNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetFilterNameException.prototype);
  }
}

/**
 * <p>The external ID was specified in an invalid format.</p>
 * @public
 */
export class InvalidExternalIdException extends __BaseException {
  readonly name = "InvalidExternalIdException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExternalIdException, __BaseException>) {
    super({
      name: "InvalidExternalIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExternalIdException.prototype);
  }
}

/**
 * <p>The specified time range was specified in an invalid format.</p>
 * @public
 */
export class InvalidTimeRangeException extends __BaseException {
  readonly name = "InvalidTimeRangeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTimeRangeException, __BaseException>) {
    super({
      name: "InvalidTimeRangeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTimeRangeException.prototype);
  }
}

/**
 * <p>The registration status was specified in an invalid format.</p>
 * @public
 */
export class InvalidRegistrationStatusException extends __BaseException {
  readonly name = "InvalidRegistrationStatusException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRegistrationStatusException, __BaseException>) {
    super({
      name: "InvalidRegistrationStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRegistrationStatusException.prototype);
  }
}

/**
 * <p>The tag filter was specified in an invalid format.</p>
 * @public
 */
export class InvalidTagFilterException extends __BaseException {
  readonly name = "InvalidTagFilterException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagFilterException, __BaseException>) {
    super({
      name: "InvalidTagFilterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagFilterException.prototype);
  }
}

/**
 * <p> The specified ARN is not in a valid format. </p>
 * @public
 */
export class InvalidArnException extends __BaseException {
  readonly name = "InvalidArnException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArnException, __BaseException>) {
    super({
      name: "InvalidArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArnException.prototype);
  }
}

/**
 * <p> The ARN of a resource is required, but was not found. </p>
 * @public
 */
export class ResourceArnRequiredException extends __BaseException {
  readonly name = "ResourceArnRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceArnRequiredException, __BaseException>) {
    super({
      name: "ResourceArnRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceArnRequiredException.prototype);
  }
}

/**
 * <p>A lifecycle event hook is invalid. Review the <code>hooks</code> section in your
 *             AppSpec file to ensure the lifecycle events and <code>hooks</code> functions are
 *             valid.</p>
 * @public
 */
export class InvalidLifecycleEventHookExecutionIdException extends __BaseException {
  readonly name = "InvalidLifecycleEventHookExecutionIdException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLifecycleEventHookExecutionIdException, __BaseException>) {
    super({
      name: "InvalidLifecycleEventHookExecutionIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLifecycleEventHookExecutionIdException.prototype);
  }
}

/**
 * <p>The result of a Lambda validation function that verifies a lifecycle event
 *             is invalid. It should return <code>Succeeded</code> or <code>Failed</code>.</p>
 * @public
 */
export class InvalidLifecycleEventHookExecutionStatusException extends __BaseException {
  readonly name = "InvalidLifecycleEventHookExecutionStatusException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLifecycleEventHookExecutionStatusException, __BaseException>) {
    super({
      name: "InvalidLifecycleEventHookExecutionStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLifecycleEventHookExecutionStatusException.prototype);
  }
}

/**
 * <p>An attempt to return the status of an already completed lifecycle event
 *             occurred.</p>
 * @public
 */
export class LifecycleEventAlreadyCompletedException extends __BaseException {
  readonly name = "LifecycleEventAlreadyCompletedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LifecycleEventAlreadyCompletedException, __BaseException>) {
    super({
      name: "LifecycleEventAlreadyCompletedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LifecycleEventAlreadyCompletedException.prototype);
  }
}

/**
 * <p>No IAM ARN was included in the request. You must use an IAM session ARN or user ARN in the request.</p>
 * @public
 */
export class IamArnRequiredException extends __BaseException {
  readonly name = "IamArnRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IamArnRequiredException, __BaseException>) {
    super({
      name: "IamArnRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IamArnRequiredException.prototype);
  }
}

/**
 * <p>The request included an IAM session ARN that has already been used to
 *             register a different instance.</p>
 * @public
 */
export class IamSessionArnAlreadyRegisteredException extends __BaseException {
  readonly name = "IamSessionArnAlreadyRegisteredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IamSessionArnAlreadyRegisteredException, __BaseException>) {
    super({
      name: "IamSessionArnAlreadyRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IamSessionArnAlreadyRegisteredException.prototype);
  }
}

/**
 * <p>The specified user ARN is already registered with an on-premises instance.</p>
 * @public
 */
export class IamUserArnAlreadyRegisteredException extends __BaseException {
  readonly name = "IamUserArnAlreadyRegisteredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IamUserArnAlreadyRegisteredException, __BaseException>) {
    super({
      name: "IamUserArnAlreadyRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IamUserArnAlreadyRegisteredException.prototype);
  }
}

/**
 * <p>An user ARN was not specified.</p>
 * @public
 */
export class IamUserArnRequiredException extends __BaseException {
  readonly name = "IamUserArnRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IamUserArnRequiredException, __BaseException>) {
    super({
      name: "IamUserArnRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IamUserArnRequiredException.prototype);
  }
}

/**
 * <p>The specified on-premises instance name is already registered.</p>
 * @public
 */
export class InstanceNameAlreadyRegisteredException extends __BaseException {
  readonly name = "InstanceNameAlreadyRegisteredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceNameAlreadyRegisteredException, __BaseException>) {
    super({
      name: "InstanceNameAlreadyRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceNameAlreadyRegisteredException.prototype);
  }
}

/**
 * <p>The IAM session ARN was specified in an invalid format.</p>
 * @public
 */
export class InvalidIamSessionArnException extends __BaseException {
  readonly name = "InvalidIamSessionArnException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidIamSessionArnException, __BaseException>) {
    super({
      name: "InvalidIamSessionArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidIamSessionArnException.prototype);
  }
}

/**
 * <p>The user ARN was specified in an invalid format.</p>
 * @public
 */
export class InvalidIamUserArnException extends __BaseException {
  readonly name = "InvalidIamUserArnException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidIamUserArnException, __BaseException>) {
    super({
      name: "InvalidIamUserArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidIamUserArnException.prototype);
  }
}

/**
 * <p>Both an user ARN and an IAM session ARN were included in the request.
 *             Use only one ARN type.</p>
 * @public
 */
export class MultipleIamArnsProvidedException extends __BaseException {
  readonly name = "MultipleIamArnsProvidedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MultipleIamArnsProvidedException, __BaseException>) {
    super({
      name: "MultipleIamArnsProvidedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MultipleIamArnsProvidedException.prototype);
  }
}
