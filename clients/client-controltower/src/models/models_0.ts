// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ControlTowerServiceException as __BaseException } from "./ControlTowerServiceException";

/**
 * @public
 * <p>User does not have sufficient access to perform this action.</p>
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
   * @public
   * <p>The ARN of the control. Only <b>Strongly recommended</b> and
   *         <b>Elective</b> controls are permitted, with the exception of the
   *       <b>Region deny</b> control. For information on how to find the <code>controlIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   */
  controlIdentifier: string | undefined;

  /**
   * @public
   * <p>The ARN of the organizational unit. For information on how to find the <code>targetIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   */
  targetIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DisableControlOutput {
  /**
   * @public
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
 * <p>Request would cause a service quota to be exceeded. The limit is 10 concurrent operations.</p>
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
   * @public
   * <p>The ID of the service that is associated with the error.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The ID of the service quota that was exceeded.</p>
   */
  quotaCode?: string;

  /**
   * @public
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
   * @public
   * <p>The ARN of the control. Only <b>Strongly recommended</b> and
   *         <b>Elective</b> controls are permitted, with the exception of the
   *       <b>Region deny</b> control. For information on how to find the <code>controlIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   */
  controlIdentifier: string | undefined;

  /**
   * @public
   * <p>The ARN of the organizational unit. For information on how to find the <code>targetIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   */
  targetIdentifier: string | undefined;
}

/**
 * @public
 */
export interface EnableControlOutput {
  /**
   * @public
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
   * @public
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
   * @public
   * <p>One of <code>ENABLE_CONTROL</code> or <code>DISABLE_CONTROL</code>.</p>
   */
  operationType?: ControlOperationType;

  /**
   * @public
   * <p>The time that the operation began.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The time that the operation finished.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>One of <code>IN_PROGRESS</code>, <code>SUCEEDED</code>, or <code>FAILED</code>.</p>
   */
  status?: ControlOperationStatus;

  /**
   * @public
   * <p>If the operation result is <code>FAILED</code>, this string contains a message explaining
   *       why the operation failed.</p>
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface GetControlOperationOutput {
  /**
   * @public
   * <p>An operation performed by the control.</p>
   */
  controlOperation: ControlOperation | undefined;
}

/**
 * @public
 */
export interface GetEnabledControlInput {
  /**
   * @public
   * <p>
   *         The ARN of the enabled control.
   *       </p>
   */
  enabledControlIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DriftStatus = {
  DRIFTED: "DRIFTED",
  IN_SYNC: "IN_SYNC",
  NOT_CHECKING: "NOT_CHECKING",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type DriftStatus = (typeof DriftStatus)[keyof typeof DriftStatus];

/**
 * @public
 * <p> The drift summary of the enabled control.</p>
 *          <p>AWS Control Tower expects the enabled control
 *       configuration to include all supported and governed Regions. If the enabled control differs
 *       from the expected configuration, it is defined to be in a state of drift. You can repair this drift by resetting the enabled control.</p>
 */
export interface DriftStatusSummary {
  /**
   * @public
   * <p> The drift status of the enabled control.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The <code>enabledControl</code> deployed in this configuration
   *           doesn’t match the configuration that AWS Control Tower expected. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The <code>enabledControl</code> deployed in this configuration matches
   *           the configuration that AWS Control Tower expected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKING</code>: AWS Control Tower does not check drift for this enabled
   *           control. Drift is not supported for the control type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: AWS Control Tower is not able to check the drift status for the
   *           enabled control. </p>
   *             </li>
   *          </ul>
   */
  driftStatus?: DriftStatus;
}

/**
 * @public
 * @enum
 */
export const EnablementStatus = {
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
  UNDER_CHANGE: "UNDER_CHANGE",
} as const;

/**
 * @public
 */
export type EnablementStatus = (typeof EnablementStatus)[keyof typeof EnablementStatus];

/**
 * @public
 * <p>
 *         The deployment summary of the enabled control.
 *       </p>
 */
export interface EnablementStatusSummary {
  /**
   * @public
   * <p> The deployment status of the enabled control.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The <code>enabledControl</code> configuration was deployed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNDER_CHANGE</code>: The <code>enabledControl</code> configuration is changing. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The <code>enabledControl</code> configuration failed to deploy.</p>
   *             </li>
   *          </ul>
   */
  status?: EnablementStatus;

  /**
   * @public
   * <p>
   *         The last operation identifier for the enabled control.
   *       </p>
   */
  lastOperationIdentifier?: string;
}

/**
 * @public
 * <p>An AWS Region in which AWS Control Tower expects to find the control deployed. </p>
 *          <p>The expected Regions are based on the Regions that are governed by the landing zone. In
 *       certain cases, a control is not actually enabled in the Region as expected, such as during
 *       drift, or <a href="https://docs.aws.amazon.com/controltower/latest/userguide/region-how.html#mixed-governance">mixed governance</a>.</p>
 */
export interface Region {
  /**
   * @public
   * <p>
   *         The AWS Region name.
   *       </p>
   */
  name?: string;
}

/**
 * @public
 * <p>
 *         Information about the enabled control.
 *       </p>
 */
export interface EnabledControlDetails {
  /**
   * @public
   * <p>
   *         The ARN of the enabled control.
   *       </p>
   */
  arn?: string;

  /**
   * @public
   * <p>
   *         The control identifier of the enabled control. For information on how to find the <code>controlIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.
   *       </p>
   */
  controlIdentifier?: string;

  /**
   * @public
   * <p>
   *         The ARN of the organizational unit. For information on how to find the <code>targetIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.
   *       </p>
   */
  targetIdentifier?: string;

  /**
   * @public
   * <p>
   *         Target AWS Regions for the enabled control.
   *       </p>
   */
  targetRegions?: Region[];

  /**
   * @public
   * <p>
   *         The deployment summary of the enabled control.
   *       </p>
   */
  statusSummary?: EnablementStatusSummary;

  /**
   * @public
   * <p>
   *         The drift status of the enabled control.
   *       </p>
   */
  driftStatusSummary?: DriftStatusSummary;
}

/**
 * @public
 */
export interface GetEnabledControlOutput {
  /**
   * @public
   * <p>
   *         Information about the enabled control.
   *       </p>
   */
  enabledControlDetails: EnabledControlDetails | undefined;
}

/**
 * @public
 */
export interface ListEnabledControlsInput {
  /**
   * @public
   * <p>The ARN of the organizational unit. For information on how to find the <code>targetIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   */
  targetIdentifier: string | undefined;

  /**
   * @public
   * <p>The token to continue the list from a previous API call with the same parameters.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   * @public
   * <p>The ARN of the control. Only <b>Strongly recommended</b> and
   *         <b>Elective</b> controls are permitted, with the exception of the
   *       <b>Region deny</b> control. For information on how to find the <code>controlIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   */
  controlIdentifier?: string;

  /**
   * @public
   * <p>
   *         The ARN of the enabled control.
   *       </p>
   */
  arn?: string;

  /**
   * @public
   * <p>
   *         The ARN of the organizational unit.
   *       </p>
   */
  targetIdentifier?: string;

  /**
   * @public
   *
   */
  statusSummary?: EnablementStatusSummary;

  /**
   * @public
   * <p>
   *         The drift status of the enabled control.
   *       </p>
   */
  driftStatusSummary?: DriftStatusSummary;
}

/**
 * @public
 */
export interface ListEnabledControlsOutput {
  /**
   * @public
   * <p>Lists the controls enabled by AWS Control Tower on the specified organizational unit and
   *       the accounts it contains.</p>
   */
  enabledControls: EnabledControlSummary[] | undefined;

  /**
   * @public
   * <p>Retrieves the next page of results. If the string is empty, the current response is the
   *       end of the results.</p>
   */
  nextToken?: string;
}
