// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ControlTowerServiceException as __BaseException } from "./ControlTowerServiceException";

/**
 * @public
 * <p>User does not have sufficient access to perform this action.
 *       </p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
 * @public
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface DisableControlInput {
  /**
   * <p>The ARN of the control. Only <b>Strongly recommended</b> and <b>Elective</b> controls are permitted,
   *       with the exception of the <b>Region deny</b> guardrail.</p>
   */
  controlIdentifier: string | undefined;

  /**
   * <p>The ARN of the organizational unit.</p>
   */
  targetIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DisableControlOutput {
  /**
   * <p>The ID of the asynchronous operation, which is used to track status. The operation is
   *       available for 90 days.</p>
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 * <p>Unexpected error during processing of request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
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
  }
}

/**
 * @public
 * <p>Request references a resource which does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
 * @public
 * <p>Request would cause a service quota to be exceeded. The limit is 10 concurrent operations. </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
 * @public
 * <p> Request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The ID of the service that is associated with the error.</p>
   */
  serviceCode?: string;

  /**
   * <p>The ID of the service quota that was exceeded.</p>
   */
  quotaCode?: string;

  /**
   * <p>The number of seconds the caller should wait before retrying.</p>
   */
  retryAfterSeconds?: number;

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
 * @public
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface EnableControlInput {
  /**
   * <p>The ARN of the control. Only <b>Strongly recommended</b> and <b>Elective</b> controls are permitted,
   *         with the exception of the <b>Region deny</b> guardrail.</p>
   */
  controlIdentifier: string | undefined;

  /**
   * <p>The ARN of the organizational unit.</p>
   */
  targetIdentifier: string | undefined;
}

/**
 * @public
 */
export interface EnableControlOutput {
  /**
   * <p>The ID of the asynchronous operation, which is used to track status. The operation is
   *       available for 90 days.</p>
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetControlOperationInput {
  /**
   * <p>The ID of the asynchronous operation, which is used to track status. The operation is
   *       available for 90 days.</p>
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ControlOperationType = {
  DISABLE_CONTROL: "DISABLE_CONTROL",
  ENABLE_CONTROL: "ENABLE_CONTROL",
} as const;

/**
 * @public
 */
export type ControlOperationType = (typeof ControlOperationType)[keyof typeof ControlOperationType];

/**
 * @public
 * @enum
 */
export const ControlOperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ControlOperationStatus = (typeof ControlOperationStatus)[keyof typeof ControlOperationStatus];

/**
 * @public
 * <p>An operation performed by the control.</p>
 */
export interface ControlOperation {
  /**
   * <p>One of <code>ENABLE_CONTROL</code> or <code>DISABLE_CONTROL</code>.</p>
   */
  operationType?: ControlOperationType | string;

  /**
   * <p>The time that the operation began.</p>
   */
  startTime?: Date;

  /**
   * <p>The time that the operation finished.</p>
   */
  endTime?: Date;

  /**
   * <p>One of <code>IN_PROGRESS</code>, <code>SUCEEDED</code>, or <code>FAILED</code>.</p>
   */
  status?: ControlOperationStatus | string;

  /**
   * <p>If the operation result is <code>FAILED</code>, this string contains a message explaining why the operation failed.</p>
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface GetControlOperationOutput {
  /**
   * <p/>
   */
  controlOperation: ControlOperation | undefined;
}

/**
 * @public
 */
export interface ListEnabledControlsInput {
  /**
   * <p>The ARN of the organizational unit.</p>
   */
  targetIdentifier: string | undefined;

  /**
   * <p>The token to continue the list from a previous API call with the same parameters.</p>
   */
  nextToken?: string;

  /**
   * <p>How many results to return per API call.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A summary of enabled controls.</p>
 */
export interface EnabledControlSummary {
  /**
   * <p>The ARN of the control. Only <b>Strongly recommended</b> and <b>Elective</b> controls are permitted,
   *         with the exception of the <b>Region deny</b> guardrail.</p>
   */
  controlIdentifier?: string;
}

/**
 * @public
 */
export interface ListEnabledControlsOutput {
  /**
   * <p>Lists the controls enabled by AWS Control Tower on the specified organizational unit and
   *       the accounts it contains.</p>
   */
  enabledControls: EnabledControlSummary[] | undefined;

  /**
   * <p>Retrieves the next page of results. If the string is empty, the current response is the
   *       end of the results.</p>
   */
  nextToken?: string;
}
