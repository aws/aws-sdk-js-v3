// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KmsKeyState, ValidationExceptionReason } from "./enums";
import { SFNServiceException as __BaseException } from "./SFNServiceException";

/**
 * <p>Activity already exists. <code>EncryptionConfiguration</code> may not be updated.</p>
 * @public
 */
export class ActivityAlreadyExists extends __BaseException {
  readonly name = "ActivityAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActivityAlreadyExists, __BaseException>) {
    super({
      name: "ActivityAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActivityAlreadyExists.prototype);
  }
}

/**
 * <p>The specified activity does not exist.</p>
 * @public
 */
export class ActivityDoesNotExist extends __BaseException {
  readonly name = "ActivityDoesNotExist" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActivityDoesNotExist, __BaseException>) {
    super({
      name: "ActivityDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActivityDoesNotExist.prototype);
  }
}

/**
 * <p>The maximum number of activities has been reached. Existing activities must be deleted
 *       before a new activity can be created.</p>
 * @public
 */
export class ActivityLimitExceeded extends __BaseException {
  readonly name = "ActivityLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActivityLimitExceeded, __BaseException>) {
    super({
      name: "ActivityLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActivityLimitExceeded.prototype);
  }
}

/**
 * <p>The maximum number of workers concurrently polling for activity tasks has been
 *       reached.</p>
 * @public
 */
export class ActivityWorkerLimitExceeded extends __BaseException {
  readonly name = "ActivityWorkerLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActivityWorkerLimitExceeded, __BaseException>) {
    super({
      name: "ActivityWorkerLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActivityWorkerLimitExceeded.prototype);
  }
}

/**
 * <p>Received when <code>encryptionConfiguration</code> is specified but various conditions exist which make the configuration invalid. For example, if <code>type</code> is set to <code>CUSTOMER_MANAGED_KMS_KEY</code>, but <code>kmsKeyId</code> is null, or <code>kmsDataKeyReusePeriodSeconds</code> is not between 60 and 900, or the KMS key is not symmetric or inactive.</p>
 * @public
 */
export class InvalidEncryptionConfiguration extends __BaseException {
  readonly name = "InvalidEncryptionConfiguration" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEncryptionConfiguration, __BaseException>) {
    super({
      name: "InvalidEncryptionConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEncryptionConfiguration.prototype);
  }
}

/**
 * <p>The provided name is not valid.</p>
 * @public
 */
export class InvalidName extends __BaseException {
  readonly name = "InvalidName" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidName, __BaseException>) {
    super({
      name: "InvalidName",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidName.prototype);
  }
}

/**
 * <p>Either your KMS key policy or API caller does not have the required permissions.</p>
 * @public
 */
export class KmsAccessDeniedException extends __BaseException {
  readonly name = "KmsAccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsAccessDeniedException, __BaseException>) {
    super({
      name: "KmsAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsAccessDeniedException.prototype);
  }
}

/**
 * <p>Received when KMS returns <code>ThrottlingException</code> for a KMS call that Step Functions makes on behalf of the caller.</p>
 * @public
 */
export class KmsThrottlingException extends __BaseException {
  readonly name = "KmsThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsThrottlingException, __BaseException>) {
    super({
      name: "KmsThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsThrottlingException.prototype);
  }
}

/**
 * <p>You've exceeded the number of tags allowed for a resource. See the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html"> Limits Topic</a> in the
 *       Step Functions Developer Guide.</p>
 * @public
 */
export class TooManyTags extends __BaseException {
  readonly name = "TooManyTags" as const;
  readonly $fault = "client" as const;
  resourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTags, __BaseException>) {
    super({
      name: "TooManyTags",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTags.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * <p>Updating or deleting a resource can cause an inconsistent state. This error occurs when there're concurrent requests for <a>DeleteStateMachineVersion</a>, <a>PublishStateMachineVersion</a>, or <a>UpdateStateMachine</a> with the <code>publish</code> parameter set to <code>true</code>.</p>
 *          <p>HTTP Status Code: 409</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 * @public
 */
export class InvalidArn extends __BaseException {
  readonly name = "InvalidArn" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArn, __BaseException>) {
    super({
      name: "InvalidArn",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArn.prototype);
  }
}

/**
 * <p>The provided Amazon States Language definition is not valid.</p>
 * @public
 */
export class InvalidDefinition extends __BaseException {
  readonly name = "InvalidDefinition" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDefinition, __BaseException>) {
    super({
      name: "InvalidDefinition",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDefinition.prototype);
  }
}

/**
 * <p>Configuration is not valid.</p>
 * @public
 */
export class InvalidLoggingConfiguration extends __BaseException {
  readonly name = "InvalidLoggingConfiguration" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLoggingConfiguration, __BaseException>) {
    super({
      name: "InvalidLoggingConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLoggingConfiguration.prototype);
  }
}

/**
 * <p>Your <code>tracingConfiguration</code> key does not match, or <code>enabled</code> has not
 *       been set to <code>true</code> or <code>false</code>.</p>
 * @public
 */
export class InvalidTracingConfiguration extends __BaseException {
  readonly name = "InvalidTracingConfiguration" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTracingConfiguration, __BaseException>) {
    super({
      name: "InvalidTracingConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTracingConfiguration.prototype);
  }
}

/**
 * <p>A state machine with the same name but a different definition or role ARN already
 *       exists.</p>
 * @public
 */
export class StateMachineAlreadyExists extends __BaseException {
  readonly name = "StateMachineAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StateMachineAlreadyExists, __BaseException>) {
    super({
      name: "StateMachineAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StateMachineAlreadyExists.prototype);
  }
}

/**
 * <p>The specified state machine is being deleted.</p>
 * @public
 */
export class StateMachineDeleting extends __BaseException {
  readonly name = "StateMachineDeleting" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StateMachineDeleting, __BaseException>) {
    super({
      name: "StateMachineDeleting",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StateMachineDeleting.prototype);
  }
}

/**
 * <p>The maximum number of state machines has been reached. Existing state machines must be
 *       deleted before a new state machine can be created.</p>
 * @public
 */
export class StateMachineLimitExceeded extends __BaseException {
  readonly name = "StateMachineLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StateMachineLimitExceeded, __BaseException>) {
    super({
      name: "StateMachineLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StateMachineLimitExceeded.prototype);
  }
}

/**
 * <p>State machine type is not supported.</p>
 * @public
 */
export class StateMachineTypeNotSupported extends __BaseException {
  readonly name = "StateMachineTypeNotSupported" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StateMachineTypeNotSupported, __BaseException>) {
    super({
      name: "StateMachineTypeNotSupported",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StateMachineTypeNotSupported.prototype);
  }
}

/**
 * <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
  }
}

/**
 * <p>Could not find the referenced resource.</p>
 * @public
 */
export class ResourceNotFound extends __BaseException {
  readonly name = "ResourceNotFound" as const;
  readonly $fault = "client" as const;
  resourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFound, __BaseException>) {
    super({
      name: "ResourceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFound.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * <p>The request would cause a service quota to be exceeded.</p>
 *          <p>HTTP Status Code: 402</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>The specified execution does not exist.</p>
 * @public
 */
export class ExecutionDoesNotExist extends __BaseException {
  readonly name = "ExecutionDoesNotExist" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExecutionDoesNotExist, __BaseException>) {
    super({
      name: "ExecutionDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExecutionDoesNotExist.prototype);
  }
}

/**
 * <p>The KMS key is not in valid state, for example: Disabled or Deleted.</p>
 * @public
 */
export class KmsInvalidStateException extends __BaseException {
  readonly name = "KmsInvalidStateException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Current status of the KMS; key. For example: <code>DISABLED</code>, <code>PENDING_DELETION</code>, <code>PENDING_IMPORT</code>, <code>UNAVAILABLE</code>, <code>CREATING</code>.</p>
   * @public
   */
  kmsKeyState?: KmsKeyState | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsInvalidStateException, __BaseException>) {
    super({
      name: "KmsInvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsInvalidStateException.prototype);
    this.kmsKeyState = opts.kmsKeyState;
  }
}

/**
 * <p>The specified state machine does not exist.</p>
 * @public
 */
export class StateMachineDoesNotExist extends __BaseException {
  readonly name = "StateMachineDoesNotExist" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StateMachineDoesNotExist, __BaseException>) {
    super({
      name: "StateMachineDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StateMachineDoesNotExist.prototype);
  }
}

/**
 * <p>The provided token is not valid.</p>
 * @public
 */
export class InvalidToken extends __BaseException {
  readonly name = "InvalidToken" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidToken, __BaseException>) {
    super({
      name: "InvalidToken",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidToken.prototype);
  }
}

/**
 * <p>The maximum number of running executions has been reached. Running executions must end or
 *       be stopped before a new execution can be started.</p>
 * @public
 */
export class ExecutionLimitExceeded extends __BaseException {
  readonly name = "ExecutionLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExecutionLimitExceeded, __BaseException>) {
    super({
      name: "ExecutionLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExecutionLimitExceeded.prototype);
  }
}

/**
 * <p>The execution Amazon Resource Name (ARN) that you specified for <code>executionArn</code> cannot be redriven.</p>
 * @public
 */
export class ExecutionNotRedrivable extends __BaseException {
  readonly name = "ExecutionNotRedrivable" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExecutionNotRedrivable, __BaseException>) {
    super({
      name: "ExecutionNotRedrivable",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExecutionNotRedrivable.prototype);
  }
}

/**
 * <p>The activity does not exist.</p>
 * @public
 */
export class TaskDoesNotExist extends __BaseException {
  readonly name = "TaskDoesNotExist" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaskDoesNotExist, __BaseException>) {
    super({
      name: "TaskDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaskDoesNotExist.prototype);
  }
}

/**
 * <p>The task token has either expired or the task associated with the token has already been closed.</p>
 * @public
 */
export class TaskTimedOut extends __BaseException {
  readonly name = "TaskTimedOut" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaskTimedOut, __BaseException>) {
    super({
      name: "TaskTimedOut",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaskTimedOut.prototype);
  }
}

/**
 * <p>The provided JSON output data is not valid.</p>
 * @public
 */
export class InvalidOutput extends __BaseException {
  readonly name = "InvalidOutput" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOutput, __BaseException>) {
    super({
      name: "InvalidOutput",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOutput.prototype);
  }
}

/**
 * <p>The execution has the same <code>name</code> as another execution (but a different
 *         <code>input</code>).</p>
 *          <note>
 *             <p>Executions with the same <code>name</code> and <code>input</code> are considered
 *         idempotent.</p>
 *          </note>
 * @public
 */
export class ExecutionAlreadyExists extends __BaseException {
  readonly name = "ExecutionAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExecutionAlreadyExists, __BaseException>) {
    super({
      name: "ExecutionAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExecutionAlreadyExists.prototype);
  }
}

/**
 * <p>The provided JSON input data is not valid.</p>
 * @public
 */
export class InvalidExecutionInput extends __BaseException {
  readonly name = "InvalidExecutionInput" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExecutionInput, __BaseException>) {
    super({
      name: "InvalidExecutionInput",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExecutionInput.prototype);
  }
}

/**
 * <p>Request is missing a required parameter. This error occurs if both <code>definition</code>
 *       and <code>roleArn</code> are not specified.</p>
 * @public
 */
export class MissingRequiredParameter extends __BaseException {
  readonly name = "MissingRequiredParameter" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingRequiredParameter, __BaseException>) {
    super({
      name: "MissingRequiredParameter",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingRequiredParameter.prototype);
  }
}
