// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type {
  AccessDeniedErrorCode,
  InvalidCrossAccountRoleErrorCode,
  InvalidInputErrorCode,
  LimitExceededErrorCode,
  NoSuchEntityErrorCode,
} from "./enums";
import { InspectorServiceException as __BaseException } from "./InspectorServiceException";
import type { AgentAlreadyRunningAssessment } from "./models_0";

/**
 * You do not have required permissions to access the requested resource.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.inspector#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * Code that indicates the type of error that is generated.
   *
   * @public
   */
  errorCode: AccessDeniedErrorCode | undefined;

  /**
   * You can immediately retry your request.
   *
   * @public
   */
  canRetry: boolean | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.errorCode = opts.errorCode;
    this.canRetry = opts.canRetry;
  }
}

/**
 * Internal server error.
 *
 * @public
 */
export class InternalException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.inspector#InternalException";
  readonly name = "InternalException" as const;
  readonly $fault = "server" as const;
  /**
   * You can immediately retry your request.
   *
   * @public
   */
  canRetry: boolean | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
    this.canRetry = opts.canRetry;
  }
}

/**
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @public
 */
export class InvalidInputException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.inspector#InvalidInputException";
  readonly name = "InvalidInputException" as const;
  readonly $fault = "client" as const;
  /**
   * Code that indicates the type of error that is generated.
   *
   * @public
   */
  errorCode: InvalidInputErrorCode | undefined;

  /**
   * You can immediately retry your request.
   *
   * @public
   */
  canRetry: boolean | undefined;

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
    this.errorCode = opts.errorCode;
    this.canRetry = opts.canRetry;
  }
}

/**
 * The request was rejected because it referenced an entity that does not exist. The error code describes the entity.
 *
 * @public
 */
export class NoSuchEntityException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.inspector#NoSuchEntityException";
  readonly name = "NoSuchEntityException" as const;
  readonly $fault = "client" as const;
  /**
   * Code that indicates the type of error that is generated.
   *
   * @public
   */
  errorCode: NoSuchEntityErrorCode | undefined;

  /**
   * You can immediately retry your request.
   *
   * @public
   */
  canRetry: boolean | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchEntityException, __BaseException>) {
    super({
      name: "NoSuchEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchEntityException.prototype);
    this.errorCode = opts.errorCode;
    this.canRetry = opts.canRetry;
  }
}

/**
 * The serice is temporary unavailable.
 *
 * @public
 */
export class ServiceTemporarilyUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.inspector#ServiceTemporarilyUnavailableException";
  readonly name = "ServiceTemporarilyUnavailableException" as const;
  readonly $fault = "server" as const;
  /**
   * You can wait and then retry your request.
   *
   * @public
   */
  canRetry: boolean | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceTemporarilyUnavailableException, __BaseException>) {
    super({
      name: "ServiceTemporarilyUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceTemporarilyUnavailableException.prototype);
    this.canRetry = opts.canRetry;
  }
}

/**
 * You started an assessment run, but one of the instances is already participating in another assessment run.
 *
 * @public
 */
export class AgentsAlreadyRunningAssessmentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.inspector#AgentsAlreadyRunningAssessmentException";
  readonly name = "AgentsAlreadyRunningAssessmentException" as const;
  readonly $fault = "client" as const;
  /**
   * @public
   */
  agents: AgentAlreadyRunningAssessment[] | undefined;

  /**
   * @public
   */
  agentsTruncated: boolean | undefined;

  /**
   * You can immediately retry your request.
   *
   * @public
   */
  canRetry: boolean | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AgentsAlreadyRunningAssessmentException, __BaseException>) {
    super({
      name: "AgentsAlreadyRunningAssessmentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AgentsAlreadyRunningAssessmentException.prototype);
    this.agents = opts.agents;
    this.agentsTruncated = opts.agentsTruncated;
    this.canRetry = opts.canRetry;
  }
}

/**
 * You cannot perform a specified action if an assessment run is currently in progress.
 *
 * @public
 */
export class AssessmentRunInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.inspector#AssessmentRunInProgressException";
  readonly name = "AssessmentRunInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * The ARNs of the assessment runs that are currently in progress.
   *
   * @public
   */
  assessmentRunArns: string[] | undefined;

  /**
   * Boolean value that indicates whether the ARN list of the assessment runs is truncated.
   *
   * @public
   */
  assessmentRunArnsTruncated: boolean | undefined;

  /**
   * You can immediately retry your request.
   *
   * @public
   */
  canRetry: boolean | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssessmentRunInProgressException, __BaseException>) {
    super({
      name: "AssessmentRunInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssessmentRunInProgressException.prototype);
    this.assessmentRunArns = opts.assessmentRunArns;
    this.assessmentRunArnsTruncated = opts.assessmentRunArnsTruncated;
    this.canRetry = opts.canRetry;
  }
}

/**
 * Amazon Inspector cannot assume the cross-account role that it needs to list your EC2 instances during the assessment run.
 *
 * @public
 */
export class InvalidCrossAccountRoleException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.inspector#InvalidCrossAccountRoleException";
  readonly name = "InvalidCrossAccountRoleException" as const;
  readonly $fault = "client" as const;
  /**
   * Code that indicates the type of error that is generated.
   *
   * @public
   */
  errorCode: InvalidCrossAccountRoleErrorCode | undefined;

  /**
   * You can immediately retry your request.
   *
   * @public
   */
  canRetry: boolean | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCrossAccountRoleException, __BaseException>) {
    super({
      name: "InvalidCrossAccountRoleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCrossAccountRoleException.prototype);
    this.errorCode = opts.errorCode;
    this.canRetry = opts.canRetry;
  }
}

/**
 * The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.inspector#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * Code that indicates the type of error that is generated.
   *
   * @public
   */
  errorCode: LimitExceededErrorCode | undefined;

  /**
   * You can immediately retry your request.
   *
   * @public
   */
  canRetry: boolean | undefined;

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
    this.errorCode = opts.errorCode;
    this.canRetry = opts.canRetry;
  }
}

/**
 * The request is rejected. The specified assessment template is currently generating an exclusions preview.
 *
 * @public
 */
export class PreviewGenerationInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.inspector#PreviewGenerationInProgressException";
  readonly name = "PreviewGenerationInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreviewGenerationInProgressException, __BaseException>) {
    super({
      name: "PreviewGenerationInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreviewGenerationInProgressException.prototype);
  }
}

/**
 * Used by the GetAssessmentReport API. The request was rejected because you tried to generate a report for an assessment run that existed before reporting was supported in Amazon Inspector. You can only generate reports for assessment runs that took place or will take place after generating reports in Amazon Inspector became available.
 *
 * @public
 */
export class UnsupportedFeatureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.inspector#UnsupportedFeatureException";
  readonly name = "UnsupportedFeatureException" as const;
  readonly $fault = "client" as const;
  canRetry: boolean | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedFeatureException, __BaseException>) {
    super({
      name: "UnsupportedFeatureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedFeatureException.prototype);
    this.canRetry = opts.canRetry;
  }
}
