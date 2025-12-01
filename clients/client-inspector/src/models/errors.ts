// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  AccessDeniedErrorCode,
  InvalidCrossAccountRoleErrorCode,
  InvalidInputErrorCode,
  LimitExceededErrorCode,
  NoSuchEntityErrorCode,
} from "./enums";
import { InspectorServiceException as __BaseException } from "./InspectorServiceException";
import { AgentAlreadyRunningAssessment } from "./models_0";

/**
 * <p>You do not have required permissions to access the requested resource.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Code that indicates the type of error that is generated.</p>
   * @public
   */
  errorCode: AccessDeniedErrorCode | undefined;

  /**
   * <p>You can immediately retry your request.</p>
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
 * <p>Internal server error.</p>
 * @public
 */
export class InternalException extends __BaseException {
  readonly name = "InternalException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>You can immediately retry your request.</p>
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
 * <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name = "InvalidInputException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Code that indicates the type of error that is generated.</p>
   * @public
   */
  errorCode: InvalidInputErrorCode | undefined;

  /**
   * <p>You can immediately retry your request.</p>
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
 * <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 * @public
 */
export class NoSuchEntityException extends __BaseException {
  readonly name = "NoSuchEntityException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Code that indicates the type of error that is generated.</p>
   * @public
   */
  errorCode: NoSuchEntityErrorCode | undefined;

  /**
   * <p>You can immediately retry your request.</p>
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
 * <p>The serice is temporary unavailable.</p>
 * @public
 */
export class ServiceTemporarilyUnavailableException extends __BaseException {
  readonly name = "ServiceTemporarilyUnavailableException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>You can wait and then retry your request.</p>
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
 * <p>You started an assessment run, but one of the instances is already participating in
 *          another assessment run.</p>
 * @public
 */
export class AgentsAlreadyRunningAssessmentException extends __BaseException {
  readonly name = "AgentsAlreadyRunningAssessmentException" as const;
  readonly $fault = "client" as const;
  /**
   * <p></p>
   * @public
   */
  agents: AgentAlreadyRunningAssessment[] | undefined;

  /**
   * <p></p>
   * @public
   */
  agentsTruncated: boolean | undefined;

  /**
   * <p>You can immediately retry your request.</p>
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
 * <p>You cannot perform a specified action if an assessment run is currently in
 *          progress.</p>
 * @public
 */
export class AssessmentRunInProgressException extends __BaseException {
  readonly name = "AssessmentRunInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The ARNs of the assessment runs that are currently in progress.</p>
   * @public
   */
  assessmentRunArns: string[] | undefined;

  /**
   * <p>Boolean value that indicates whether the ARN list of the assessment runs is
   *          truncated.</p>
   * @public
   */
  assessmentRunArnsTruncated: boolean | undefined;

  /**
   * <p>You can immediately retry your request.</p>
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
 * <p>Amazon Inspector cannot assume the cross-account role that it needs to list your EC2
 *          instances during the assessment run.</p>
 * @public
 */
export class InvalidCrossAccountRoleException extends __BaseException {
  readonly name = "InvalidCrossAccountRoleException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Code that indicates the type of error that is generated.</p>
   * @public
   */
  errorCode: InvalidCrossAccountRoleErrorCode | undefined;

  /**
   * <p>You can immediately retry your request.</p>
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
 * <p>The request was rejected because it attempted to create resources beyond the current
 *          AWS account limits. The error code describes the limit exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Code that indicates the type of error that is generated.</p>
   * @public
   */
  errorCode: LimitExceededErrorCode | undefined;

  /**
   * <p>You can immediately retry your request.</p>
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
 * <p>The request is rejected. The specified assessment template is currently generating an
 *          exclusions preview.</p>
 * @public
 */
export class PreviewGenerationInProgressException extends __BaseException {
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
 * <p>Used by the <a>GetAssessmentReport</a> API. The request was rejected
 *          because you tried to generate a report for an assessment run that existed before reporting
 *          was supported in Amazon Inspector. You can only generate reports for assessment runs that
 *          took place or will take place after generating reports in Amazon Inspector became
 *          available.</p>
 * @public
 */
export class UnsupportedFeatureException extends __BaseException {
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
