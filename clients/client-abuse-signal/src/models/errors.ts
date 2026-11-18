// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { AbuseSignalServiceException as __BaseException } from "./AbuseSignalServiceException";
import type { SubmissionRequirement, ValidationExceptionField } from "./models_0";

/**
 * <p>The caller does not have sufficient access to perform this operation. Verify that the caller has the specific IAM permission for the operation it is calling (for example, <code>abuse:CreateAbuseReport</code>, <code>abuse:GetAbuseReportStatus</code>, or <code>abuse:ListAbuseReportStatuses</code>). Grant only the actions each caller requires.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.abusesignal#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The request conflicts with the current state of the resource. For example, an idempotency token was reused with a different payload.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.abusesignal#ConflictException";
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
 * <p>An unexpected error occurred during the processing of the request. This error is retryable; check the <code>Retry-After</code> header before you retry.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.abusesignal#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * <p>The number of seconds to wait before you retry the request. The service also returns this value in the <code>Retry-After</code> HTTP header.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The report is well-formed and satisfies the XARF schema, but it does not meet one or more submission requirements (for example, the submission lookback window or <code>source_identifier</code> restrictions). This error is distinct from <code>ValidationException</code> (HTTP 400), which indicates that the report is not well-formed. Retrying the same report will not succeed; the report content must change.</p>
 * @public
 */
export class SubmissionRequirementException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.abusesignal#SubmissionRequirementException";
  readonly name = "SubmissionRequirementException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A list of the specific submission requirements that the report did not meet.</p>
   * @public
   */
  unmetRequirements?: SubmissionRequirement[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubmissionRequirementException, __BaseException>) {
    super({
      name: "SubmissionRequirementException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubmissionRequirementException.prototype);
    this.unmetRequirements = opts.unmetRequirements;
  }
}

/**
 * <p>The request was denied due to request throttling. This error is retryable; retry with exponential backoff.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.abusesignal#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The code for the Amazon Web Services service that is associated with the quota that was exceeded.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The code for the service quota that was exceeded.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>The number of seconds to wait before you retry the request. The service also returns this value in the <code>Retry-After</code> HTTP header.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by the service, which indicates that the request is not well-formed. Check <code>fieldList</code> for the specific members that failed validation.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.abusesignal#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A list of the specific input fields that failed validation.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.fieldList = opts.fieldList;
  }
}

/**
 * <p>The specified resource was not found. Verify that the <code>reportId</code> is correct.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.abusesignal#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The identifier of the resource that was not found.</p>
   * @public
   */
  resourceId: string | undefined;

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
    this.resourceId = opts.resourceId;
  }
}
