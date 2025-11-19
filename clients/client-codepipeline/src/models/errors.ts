// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodePipelineServiceException as __BaseException } from "./CodePipelineServiceException";

/**
 * <p>The nonce was specified in an invalid format.</p>
 * @public
 */
export class InvalidNonceException extends __BaseException {
  readonly name = "InvalidNonceException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNonceException, __BaseException>) {
    super({
      name: "InvalidNonceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNonceException.prototype);
  }
}

/**
 * <p>The job was specified in an invalid format or cannot be found.</p>
 * @public
 */
export class JobNotFoundException extends __BaseException {
  readonly name = "JobNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<JobNotFoundException, __BaseException>) {
    super({
      name: "JobNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, JobNotFoundException.prototype);
  }
}

/**
 * <p>The validation was specified in an invalid format.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The client token was specified in an invalid format</p>
 * @public
 */
export class InvalidClientTokenException extends __BaseException {
  readonly name = "InvalidClientTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClientTokenException, __BaseException>) {
    super({
      name: "InvalidClientTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClientTokenException.prototype);
  }
}

/**
 * <p>The action execution was not found.</p>
 * @public
 */
export class ActionExecutionNotFoundException extends __BaseException {
  readonly name = "ActionExecutionNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActionExecutionNotFoundException, __BaseException>) {
    super({
      name: "ActionExecutionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActionExecutionNotFoundException.prototype);
  }
}

/**
 * <p>The specified action cannot be found.</p>
 * @public
 */
export class ActionNotFoundException extends __BaseException {
  readonly name = "ActionNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActionNotFoundException, __BaseException>) {
    super({
      name: "ActionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActionNotFoundException.prototype);
  }
}

/**
 * <p>The specified action type cannot be found.</p>
 * @public
 */
export class ActionTypeNotFoundException extends __BaseException {
  readonly name = "ActionTypeNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActionTypeNotFoundException, __BaseException>) {
    super({
      name: "ActionTypeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActionTypeNotFoundException.prototype);
  }
}

/**
 * <p>The approval action has already been approved or rejected.</p>
 * @public
 */
export class ApprovalAlreadyCompletedException extends __BaseException {
  readonly name = "ApprovalAlreadyCompletedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApprovalAlreadyCompletedException, __BaseException>) {
    super({
      name: "ApprovalAlreadyCompletedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApprovalAlreadyCompletedException.prototype);
  }
}

/**
 * <p>Unable to modify the tag due to a simultaneous update request.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * <p>The specified resource tags are invalid.</p>
 * @public
 */
export class InvalidTagsException extends __BaseException {
  readonly name = "InvalidTagsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagsException, __BaseException>) {
    super({
      name: "InvalidTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagsException.prototype);
  }
}

/**
 * <p>The number of pipelines associated with the Amazon Web Services account has exceeded
 *             the limit allowed for the account.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The tags limit for a resource has been exceeded.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

/**
 * <p>The action declaration was specified in an invalid format.</p>
 * @public
 */
export class InvalidActionDeclarationException extends __BaseException {
  readonly name = "InvalidActionDeclarationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidActionDeclarationException, __BaseException>) {
    super({
      name: "InvalidActionDeclarationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidActionDeclarationException.prototype);
  }
}

/**
 * <p>Reserved for future use.</p>
 * @public
 */
export class InvalidBlockerDeclarationException extends __BaseException {
  readonly name = "InvalidBlockerDeclarationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidBlockerDeclarationException, __BaseException>) {
    super({
      name: "InvalidBlockerDeclarationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidBlockerDeclarationException.prototype);
  }
}

/**
 * <p>The stage declaration was specified in an invalid format.</p>
 * @public
 */
export class InvalidStageDeclarationException extends __BaseException {
  readonly name = "InvalidStageDeclarationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStageDeclarationException, __BaseException>) {
    super({
      name: "InvalidStageDeclarationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStageDeclarationException.prototype);
  }
}

/**
 * <p>The structure was specified in an invalid format.</p>
 * @public
 */
export class InvalidStructureException extends __BaseException {
  readonly name = "InvalidStructureException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStructureException, __BaseException>) {
    super({
      name: "InvalidStructureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStructureException.prototype);
  }
}

/**
 * <p>The specified pipeline name is already in use.</p>
 * @public
 */
export class PipelineNameInUseException extends __BaseException {
  readonly name = "PipelineNameInUseException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineNameInUseException, __BaseException>) {
    super({
      name: "PipelineNameInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineNameInUseException.prototype);
  }
}

/**
 * <p>The specified webhook was entered in an invalid format or cannot be
 *             found.</p>
 * @public
 */
export class WebhookNotFoundException extends __BaseException {
  readonly name = "WebhookNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebhookNotFoundException, __BaseException>) {
    super({
      name: "WebhookNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebhookNotFoundException.prototype);
  }
}

/**
 * <p>The pipeline was specified in an invalid format or cannot be found.</p>
 * @public
 */
export class PipelineNotFoundException extends __BaseException {
  readonly name = "PipelineNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineNotFoundException, __BaseException>) {
    super({
      name: "PipelineNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineNotFoundException.prototype);
  }
}

/**
 * <p>The stage was specified in an invalid format or cannot be found.</p>
 * @public
 */
export class StageNotFoundException extends __BaseException {
  readonly name = "StageNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StageNotFoundException, __BaseException>) {
    super({
      name: "StageNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StageNotFoundException.prototype);
  }
}

/**
 * <p>The pipeline version was specified in an invalid format or cannot be
 *             found.</p>
 * @public
 */
export class PipelineVersionNotFoundException extends __BaseException {
  readonly name = "PipelineVersionNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineVersionNotFoundException, __BaseException>) {
    super({
      name: "PipelineVersionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineVersionNotFoundException.prototype);
  }
}

/**
 * <p>The pipeline execution was specified in an invalid format or cannot be found, or an
 *             execution ID does not belong to the specified pipeline. </p>
 * @public
 */
export class PipelineExecutionNotFoundException extends __BaseException {
  readonly name = "PipelineExecutionNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineExecutionNotFoundException, __BaseException>) {
    super({
      name: "PipelineExecutionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineExecutionNotFoundException.prototype);
  }
}

/**
 * <p>The job was specified in an invalid format or cannot be found.</p>
 * @public
 */
export class InvalidJobException extends __BaseException {
  readonly name = "InvalidJobException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidJobException, __BaseException>) {
    super({
      name: "InvalidJobException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidJobException.prototype);
  }
}

/**
 * <p>The next token was specified in an invalid format. Make sure that the next token
 *             you provide is the token returned by a previous call.</p>
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
 * <p>The specified resource ARN is invalid.</p>
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
 * <p>The resource was specified in an invalid format.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>The pipeline has reached the limit for concurrent pipeline executions.</p>
 * @public
 */
export class ConcurrentPipelineExecutionsLimitExceededException extends __BaseException {
  readonly name = "ConcurrentPipelineExecutionsLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentPipelineExecutionsLimitExceededException, __BaseException>) {
    super({
      name: "ConcurrentPipelineExecutionsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentPipelineExecutionsLimitExceededException.prototype);
  }
}

/**
 * <p>Unable to override because the condition does not allow overrides.</p>
 * @public
 */
export class ConditionNotOverridableException extends __BaseException {
  readonly name = "ConditionNotOverridableException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConditionNotOverridableException, __BaseException>) {
    super({
      name: "ConditionNotOverridableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConditionNotOverridableException.prototype);
  }
}

/**
 * <p>Your request cannot be handled because the pipeline is busy handling ongoing
 *             activities. Try again later.</p>
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
 * <p>The stage has failed in a later run of the pipeline and the
 *                 <code>pipelineExecutionId</code> associated with the request is out of
 *             date.</p>
 * @public
 */
export class NotLatestPipelineExecutionException extends __BaseException {
  readonly name = "NotLatestPipelineExecutionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotLatestPipelineExecutionException, __BaseException>) {
    super({
      name: "NotLatestPipelineExecutionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotLatestPipelineExecutionException.prototype);
  }
}

/**
 * <p>The approval request already received a response or has expired.</p>
 * @public
 */
export class InvalidApprovalTokenException extends __BaseException {
  readonly name = "InvalidApprovalTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidApprovalTokenException, __BaseException>) {
    super({
      name: "InvalidApprovalTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidApprovalTokenException.prototype);
  }
}

/**
 * <p>The job state was specified in an invalid format.</p>
 * @public
 */
export class InvalidJobStateException extends __BaseException {
  readonly name = "InvalidJobStateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidJobStateException, __BaseException>) {
    super({
      name: "InvalidJobStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidJobStateException.prototype);
  }
}

/**
 * <p>Exceeded the total size limit for all variables in the pipeline.</p>
 * @public
 */
export class OutputVariablesSizeExceededException extends __BaseException {
  readonly name = "OutputVariablesSizeExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OutputVariablesSizeExceededException, __BaseException>) {
    super({
      name: "OutputVariablesSizeExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OutputVariablesSizeExceededException.prototype);
  }
}

/**
 * <p>The specified authentication type is in an invalid format.</p>
 * @public
 */
export class InvalidWebhookAuthenticationParametersException extends __BaseException {
  readonly name = "InvalidWebhookAuthenticationParametersException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidWebhookAuthenticationParametersException, __BaseException>) {
    super({
      name: "InvalidWebhookAuthenticationParametersException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidWebhookAuthenticationParametersException.prototype);
  }
}

/**
 * <p>The specified event filter rule is in an invalid format.</p>
 * @public
 */
export class InvalidWebhookFilterPatternException extends __BaseException {
  readonly name = "InvalidWebhookFilterPatternException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidWebhookFilterPatternException, __BaseException>) {
    super({
      name: "InvalidWebhookFilterPatternException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidWebhookFilterPatternException.prototype);
  }
}

/**
 * <p>Unable to retry. The pipeline structure or stage state might have changed while
 *             actions awaited retry, or the stage contains no failed
 *             actions.</p>
 * @public
 */
export class StageNotRetryableException extends __BaseException {
  readonly name = "StageNotRetryableException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StageNotRetryableException, __BaseException>) {
    super({
      name: "StageNotRetryableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StageNotRetryableException.prototype);
  }
}

/**
 * <p>The specified pipeline execution is outdated and cannot be used as a target pipeline
 *             execution for rollback.</p>
 * @public
 */
export class PipelineExecutionOutdatedException extends __BaseException {
  readonly name = "PipelineExecutionOutdatedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineExecutionOutdatedException, __BaseException>) {
    super({
      name: "PipelineExecutionOutdatedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineExecutionOutdatedException.prototype);
  }
}

/**
 * <p>Unable to roll back the stage. The cause might be if the pipeline version has changed
 *             since the target pipeline execution was deployed, the stage is currently running, or an
 *             incorrect target pipeline execution ID was provided.</p>
 * @public
 */
export class UnableToRollbackStageException extends __BaseException {
  readonly name = "UnableToRollbackStageException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnableToRollbackStageException, __BaseException>) {
    super({
      name: "UnableToRollbackStageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnableToRollbackStageException.prototype);
  }
}

/**
 * <p>The pipeline execution is already in a <code>Stopping</code> state. If you already
 *             chose to stop and wait, you cannot make that request again. You can choose to stop and
 *             abandon now, but be aware that this option can lead to failed tasks or out of sequence
 *             tasks. If you already chose to stop and abandon, you cannot make that request
 *             again.</p>
 * @public
 */
export class DuplicatedStopRequestException extends __BaseException {
  readonly name = "DuplicatedStopRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicatedStopRequestException, __BaseException>) {
    super({
      name: "DuplicatedStopRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicatedStopRequestException.prototype);
  }
}

/**
 * <p>Unable to stop the pipeline execution. The execution might already be in a
 *                 <code>Stopped</code> state, or it might no longer be in progress.</p>
 * @public
 */
export class PipelineExecutionNotStoppableException extends __BaseException {
  readonly name = "PipelineExecutionNotStoppableException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineExecutionNotStoppableException, __BaseException>) {
    super({
      name: "PipelineExecutionNotStoppableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineExecutionNotStoppableException.prototype);
  }
}

/**
 * <p>The request failed because of an unknown error, exception, or failure.</p>
 * @public
 */
export class RequestFailedException extends __BaseException {
  readonly name = "RequestFailedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestFailedException, __BaseException>) {
    super({
      name: "RequestFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestFailedException.prototype);
  }
}
