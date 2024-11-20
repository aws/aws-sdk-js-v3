// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { ControlTowerServiceException as __BaseException } from "./ControlTowerServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
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
 */
export interface GetBaselineOperationInput {
  /**
   * <p>The operation ID returned from mutating asynchronous APIs (Enable, Disable, Update, Reset).</p>
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BaselineOperationType = {
  DISABLE_BASELINE: "DISABLE_BASELINE",
  ENABLE_BASELINE: "ENABLE_BASELINE",
  RESET_ENABLED_BASELINE: "RESET_ENABLED_BASELINE",
  UPDATE_ENABLED_BASELINE: "UPDATE_ENABLED_BASELINE",
} as const;

/**
 * @public
 */
export type BaselineOperationType = (typeof BaselineOperationType)[keyof typeof BaselineOperationType];

/**
 * @public
 * @enum
 */
export const BaselineOperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type BaselineOperationStatus = (typeof BaselineOperationStatus)[keyof typeof BaselineOperationStatus];

/**
 * <p>An object of shape <code>BaselineOperation</code>, returning details about the specified <code>Baseline</code> operation ID.</p>
 * @public
 */
export interface BaselineOperation {
  /**
   * <p>The identifier of the specified operation.</p>
   * @public
   */
  operationIdentifier?: string | undefined;

  /**
   * <p>An enumerated type (<code>enum</code>) with possible values of <code>ENABLE_BASELINE</code>, <code>DISABLE_BASELINE</code>, <code>UPDATE_ENABLED_BASELINE</code>, or <code>RESET_ENABLED_BASELINE</code>.</p>
   * @public
   */
  operationType?: BaselineOperationType | undefined;

  /**
   * <p>An enumerated type (<code>enum</code>) with possible values of <code>SUCCEEDED</code>, <code>FAILED</code>, or <code>IN_PROGRESS</code>.</p>
   * @public
   */
  status?: BaselineOperationStatus | undefined;

  /**
   * <p>The start time of the operation, in ISO 8601 format.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The end time of the operation (if applicable), in ISO 8601 format.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>A status message that gives more information about the operation's status, if applicable.</p>
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetBaselineOperationOutput {
  /**
   * <p>A <code>baselineOperation</code> object that shows information about the specified operation ID.</p>
   * @public
   */
  baselineOperation: BaselineOperation | undefined;
}

/**
 * <p>An unexpected error occurred during processing of a request.</p>
 * @public
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
 * <p>The request references a resource that does not exist.</p>
 * @public
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
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The ID of the service that is associated with the error.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The ID of the service quota that was exceeded.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>The number of seconds the caller should wait before retrying.</p>
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
 * <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 * @public
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
export interface GetBaselineInput {
  /**
   * <p>The ARN of the <code>Baseline</code> resource to be retrieved.</p>
   * @public
   */
  baselineIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetBaselineOutput {
  /**
   * <p>The baseline ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A user-friendly name for the baseline.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the baseline.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListBaselinesInput {
  /**
   * <p>A pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be shown.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Returns a summary of information about a <code>Baseline</code> object.</p>
 * @public
 */
export interface BaselineSummary {
  /**
   * <p>The full ARN of a Baseline.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The human-readable name of a Baseline.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A summary description of a Baseline.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListBaselinesOutput {
  /**
   * <p>A  list of <code>Baseline</code> object details.</p>
   * @public
   */
  baselines: BaselineSummary[] | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetControlOperationInput {
  /**
   * <p>The ID of the asynchronous operation, which is used to track status. The operation is
   *          available for 90 days.</p>
   * @public
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
  RESET_ENABLED_CONTROL: "RESET_ENABLED_CONTROL",
  UPDATE_ENABLED_CONTROL: "UPDATE_ENABLED_CONTROL",
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
 * <p>An operation performed by the control.</p>
 * @public
 */
export interface ControlOperation {
  /**
   * <p>One of <code>ENABLE_CONTROL</code> or <code>DISABLE_CONTROL</code>.</p>
   * @public
   */
  operationType?: ControlOperationType | undefined;

  /**
   * <p>The time that the operation began.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The time that the operation finished.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>One of <code>IN_PROGRESS</code>, <code>SUCEEDED</code>, or <code>FAILED</code>.</p>
   * @public
   */
  status?: ControlOperationStatus | undefined;

  /**
   * <p>If the operation result is <code>FAILED</code>, this string contains a message explaining
   *          why the operation failed.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The identifier of the specified operation.</p>
   * @public
   */
  operationIdentifier?: string | undefined;

  /**
   * <p>The <code>controlIdentifier</code> of the control for the operation.</p>
   * @public
   */
  controlIdentifier?: string | undefined;

  /**
   * <p>The target upon which the control operation is working.</p>
   * @public
   */
  targetIdentifier?: string | undefined;

  /**
   * <p>The <code>controlIdentifier</code> of the enabled control.</p>
   * @public
   */
  enabledControlIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetControlOperationOutput {
  /**
   * <p>An operation performed by the control.</p>
   * @public
   */
  controlOperation: ControlOperation | undefined;
}

/**
 * <p>A filter object that lets you call <code>ListControlOperations</code> with a specific filter.</p>
 * @public
 */
export interface ControlOperationFilter {
  /**
   * <p>The set of <code>controlIdentifier</code> returned by the filter.</p>
   * @public
   */
  controlIdentifiers?: string[] | undefined;

  /**
   * <p>The set of <code>targetIdentifier</code> objects returned by the filter.</p>
   * @public
   */
  targetIdentifiers?: string[] | undefined;

  /**
   * <p>The set <code>controlIdentifier</code> of enabled controls selected by the filter.</p>
   * @public
   */
  enabledControlIdentifiers?: string[] | undefined;

  /**
   * <p>Lists the status of control operations.</p>
   * @public
   */
  statuses?: ControlOperationStatus[] | undefined;

  /**
   * <p>The set of <code>ControlOperation</code> objects returned by the filter.</p>
   * @public
   */
  controlOperationTypes?: ControlOperationType[] | undefined;
}

/**
 * @public
 */
export interface ListControlOperationsInput {
  /**
   * <p>An input filter for the <code>ListControlOperations</code> API that lets you select the types of control operations to view.</p>
   * @public
   */
  filter?: ControlOperationFilter | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be shown.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of information about the specified control operation.</p>
 * @public
 */
export interface ControlOperationSummary {
  /**
   * <p>The type of operation.</p>
   * @public
   */
  operationType?: ControlOperationType | undefined;

  /**
   * <p>The time at which a control operation began.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The time at which the control operation was completed.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The status of the specified control operation.</p>
   * @public
   */
  status?: ControlOperationStatus | undefined;

  /**
   * <p>A speficic message displayed as part of the control status.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The unique identifier of a control operation.</p>
   * @public
   */
  operationIdentifier?: string | undefined;

  /**
   * <p>The <code>controlIdentifier</code> of a control.</p>
   * @public
   */
  controlIdentifier?: string | undefined;

  /**
   * <p>The unique identifier of the target of a control operation.</p>
   * @public
   */
  targetIdentifier?: string | undefined;

  /**
   * <p>The <code>controlIdentifier</code> of an enabled control.</p>
   * @public
   */
  enabledControlIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ListControlOperationsOutput {
  /**
   * <p>Returns a list of output from control operations. </p>
   * @public
   */
  controlOperations: ControlOperationSummary[] | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Updating or deleting the resource can cause an inconsistent state.</p>
 * @public
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
   * <p>The ARN of the control. Only <b>Strongly recommended</b> and
   *          <b>Elective</b> controls are permitted, with the exception of the
   *          <b>Region deny</b> control. For information on how to find the <code>controlIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   * @public
   */
  controlIdentifier: string | undefined;

  /**
   * <p>The ARN of the organizational unit. For information on how to find the <code>targetIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   * @public
   */
  targetIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DisableControlOutput {
  /**
   * <p>The ID of the asynchronous operation, which is used to track status. The operation is
   *          available for 90 days.</p>
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * <p>The request would cause a service quota to be exceeded. The limit is 10 concurrent operations.</p>
 * @public
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
 */
export interface DisableBaselineInput {
  /**
   * <p>Identifier of the <code>EnabledBaseline</code> resource to be deactivated, in ARN format.</p>
   * @public
   */
  enabledBaselineIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DisableBaselineOutput {
  /**
   * <p>The ID (in UUID format) of the asynchronous <code>DisableBaseline</code> operation. This <code>operationIdentifier</code> is used to track status through calls to the <code>GetBaselineOperation</code> API.</p>
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * <p>A key-value parameter to an <code>EnabledBaseline</code> resource.</p>
 * @public
 */
export interface EnabledBaselineParameter {
  /**
   * <p>A string denoting the parameter key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>A low-level <code>Document</code> object of any type (for example, a Java Object).</p>
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * @public
 */
export interface EnableBaselineInput {
  /**
   * <p>The specific version to be enabled of the specified baseline.</p>
   * @public
   */
  baselineVersion: string | undefined;

  /**
   * <p>A list of <code>key-value</code> objects that specify enablement parameters, where <code>key</code> is a string and <code>value</code> is a document of any type.</p>
   * @public
   */
  parameters?: EnabledBaselineParameter[] | undefined;

  /**
   * <p>The ARN of the baseline to be enabled.</p>
   * @public
   */
  baselineIdentifier: string | undefined;

  /**
   * <p>The ARN of the target on which the baseline will be enabled. Only OUs are supported as targets.</p>
   * @public
   */
  targetIdentifier: string | undefined;

  /**
   * <p>Tags associated with input to <code>EnableBaseline</code>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface EnableBaselineOutput {
  /**
   * <p>The ID (in UUID format) of the asynchronous <code>EnableBaseline</code> operation. This <code>operationIdentifier</code> is used to track status through calls to the <code>GetBaselineOperation</code> API.</p>
   * @public
   */
  operationIdentifier: string | undefined;

  /**
   * <p>The ARN of the <code>EnabledBaseline</code> resource.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetEnabledBaselineInput {
  /**
   * <p>Identifier of the <code>EnabledBaseline</code> resource to be retrieved, in ARN format.</p>
   * @public
   */
  enabledBaselineIdentifier: string | undefined;
}

/**
 * <p>Summary of an applied parameter to an <code>EnabledBaseline</code> resource. </p>
 * @public
 */
export interface EnabledBaselineParameterSummary {
  /**
   * <p>A string denoting the parameter key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>A low-level document object of any type (for example, a Java Object).</p>
   * @public
   */
  value: __DocumentType | undefined;
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
 * <p>The deployment summary of an <code>EnabledControl</code> or <code>EnabledBaseline</code> resource.</p>
 * @public
 */
export interface EnablementStatusSummary {
  /**
   * <p> The deployment status of the enabled resource.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The <code>EnabledControl</code> or <code>EnabledBaseline</code> configuration was deployed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNDER_CHANGE</code>: The <code>EnabledControl</code> or <code>EnabledBaseline</code> configuration is changing. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The <code>EnabledControl</code> or <code>EnabledBaseline</code> configuration failed to deploy.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: EnablementStatus | undefined;

  /**
   * <p>The last operation identifier for the enabled resource.</p>
   * @public
   */
  lastOperationIdentifier?: string | undefined;
}

/**
 * <p>Details of the <code>EnabledBaseline</code> resource.</p>
 * @public
 */
export interface EnabledBaselineDetails {
  /**
   * <p>The ARN of the <code>EnabledBaseline</code> resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The specific <code>Baseline</code> enabled as part of the <code>EnabledBaseline</code> resource.</p>
   * @public
   */
  baselineIdentifier: string | undefined;

  /**
   * <p>The enabled version of the <code>Baseline</code>.</p>
   * @public
   */
  baselineVersion?: string | undefined;

  /**
   * <p>The target on which to enable the <code>Baseline</code>.</p>
   * @public
   */
  targetIdentifier: string | undefined;

  /**
   * <p>An ARN that represents the parent <code>EnabledBaseline</code> at the Organizational Unit (OU) level, from which the child <code>EnabledBaseline</code> inherits its configuration. The value is returned by <code>GetEnabledBaseline</code>.</p>
   * @public
   */
  parentIdentifier?: string | undefined;

  /**
   * <p>The deployment summary of an <code>EnabledControl</code> or <code>EnabledBaseline</code> resource.</p>
   * @public
   */
  statusSummary: EnablementStatusSummary | undefined;

  /**
   * <p>Shows the parameters that are applied when enabling this <code>Baseline</code>.</p>
   * @public
   */
  parameters?: EnabledBaselineParameterSummary[] | undefined;
}

/**
 * @public
 */
export interface GetEnabledBaselineOutput {
  /**
   * <p>Details of the <code>EnabledBaseline</code> resource.</p>
   * @public
   */
  enabledBaselineDetails?: EnabledBaselineDetails | undefined;
}

/**
 * <p>A filter applied on the <code>ListEnabledBaseline</code> operation. Allowed filters are <code>baselineIdentifiers</code> and <code>targetIdentifiers</code>. The filter can be applied for either, or both.</p>
 * @public
 */
export interface EnabledBaselineFilter {
  /**
   * <p>Identifiers for the targets of the <code>Baseline</code> filter operation.</p>
   * @public
   */
  targetIdentifiers?: string[] | undefined;

  /**
   * <p>Identifiers for the <code>Baseline</code> objects returned as part of the filter operation.</p>
   * @public
   */
  baselineIdentifiers?: string[] | undefined;

  /**
   * <p>An optional filter that sets up a list of <code>parentIdentifiers</code> to filter the results of the <code>ListEnabledBaseline</code> output.</p>
   * @public
   */
  parentIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface ListEnabledBaselinesInput {
  /**
   * <p>A filter applied on the <code>ListEnabledBaseline</code> operation. Allowed filters are <code>baselineIdentifiers</code> and <code>targetIdentifiers</code>. The filter can be applied for either, or both.</p>
   * @public
   */
  filter?: EnabledBaselineFilter | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be shown.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A value that can be  set to include the child enabled baselines in responses. The default value is false.</p>
   * @public
   */
  includeChildren?: boolean | undefined;
}

/**
 * <p>Returns a summary of information about an <code>EnabledBaseline</code> object.</p>
 * @public
 */
export interface EnabledBaselineSummary {
  /**
   * <p>The ARN of the <code>EnabledBaseline</code> resource</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The specific baseline that is enabled as part of the <code>EnabledBaseline</code> resource.</p>
   * @public
   */
  baselineIdentifier: string | undefined;

  /**
   * <p>The enabled version of the baseline.</p>
   * @public
   */
  baselineVersion?: string | undefined;

  /**
   * <p>The target upon which the baseline is enabled.</p>
   * @public
   */
  targetIdentifier: string | undefined;

  /**
   * <p>An ARN that represents an object returned by <code>ListEnabledBaseline</code>, to describe an enabled baseline.</p>
   * @public
   */
  parentIdentifier?: string | undefined;

  /**
   * <p>The deployment summary of an <code>EnabledControl</code> or <code>EnabledBaseline</code> resource.</p>
   * @public
   */
  statusSummary: EnablementStatusSummary | undefined;
}

/**
 * @public
 */
export interface ListEnabledBaselinesOutput {
  /**
   * <p>Retuens a list of summaries of <code>EnabledBaseline</code> resources.</p>
   * @public
   */
  enabledBaselines: EnabledBaselineSummary[] | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ResetEnabledBaselineInput {
  /**
   * <p>Specifies the ID of the <code>EnabledBaseline</code> resource to be re-enabled, in ARN format.</p>
   * @public
   */
  enabledBaselineIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ResetEnabledBaselineOutput {
  /**
   * <p>The ID (in UUID format) of the asynchronous <code>ResetEnabledBaseline</code> operation. This <code>operationIdentifier</code> is used to track status through calls to the <code>GetBaselineOperation</code> API.</p>
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnabledBaselineInput {
  /**
   * <p>Specifies the new <code>Baseline</code> version, to which the <code>EnabledBaseline</code> should be updated.</p>
   * @public
   */
  baselineVersion: string | undefined;

  /**
   * <p>Parameters to apply when making an update.</p>
   * @public
   */
  parameters?: EnabledBaselineParameter[] | undefined;

  /**
   * <p>Specifies the <code>EnabledBaseline</code> resource to be updated.</p>
   * @public
   */
  enabledBaselineIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnabledBaselineOutput {
  /**
   * <p>The ID (in UUID format) of the asynchronous <code>UpdateEnabledBaseline</code> operation. This <code>operationIdentifier</code> is used to track status through calls to the <code>GetBaselineOperation</code> API.</p>
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * <p>A key/value pair, where <code>Key</code> is of type <code>String</code> and <code>Value</code> is of type <code>Document</code>.</p>
 * @public
 */
export interface EnabledControlParameter {
  /**
   * <p>The key of a key/value pair.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of a key/value pair.</p>
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * @public
 */
export interface EnableControlInput {
  /**
   * <p>The ARN of the control. Only <b>Strongly recommended</b> and
   *          <b>Elective</b> controls are permitted, with the exception of the
   *          <b>Region deny</b> control. For information on how to find the <code>controlIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   * @public
   */
  controlIdentifier: string | undefined;

  /**
   * <p>The ARN of the organizational unit. For information on how to find the <code>targetIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   * @public
   */
  targetIdentifier: string | undefined;

  /**
   * <p>Tags to be applied to the <code>EnabledControl</code> resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A list of input parameter values, which are specified to configure the control when you enable it.</p>
   * @public
   */
  parameters?: EnabledControlParameter[] | undefined;
}

/**
 * @public
 */
export interface EnableControlOutput {
  /**
   * <p>The ID of the asynchronous operation, which is used to track status. The operation is
   *          available for 90 days.</p>
   * @public
   */
  operationIdentifier: string | undefined;

  /**
   * <p>The ARN of the <code>EnabledControl</code> resource.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetEnabledControlInput {
  /**
   * <p>The <code>controlIdentifier</code> of the enabled control.</p>
   * @public
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
 * <p>The drift summary of the enabled control.</p>
 *          <p>Amazon Web Services Control Tower expects the enabled control
 *          configuration to include all supported and governed Regions. If the enabled control differs
 *          from the expected configuration, it is defined to be in a state of drift. You can repair this drift by resetting the enabled control.</p>
 * @public
 */
export interface DriftStatusSummary {
  /**
   * <p> The drift status of the enabled control.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The <code>enabledControl</code> deployed in this configuration
   *                   doesn’t match the configuration that Amazon Web Services Control Tower expected. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The <code>enabledControl</code> deployed in this configuration matches
   *                   the configuration that Amazon Web Services Control Tower expected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKING</code>: Amazon Web Services Control Tower does not check drift for this enabled
   *                   control. Drift is not supported for the control type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: Amazon Web Services Control Tower is not able to check the drift status for the
   *                   enabled control. </p>
   *             </li>
   *          </ul>
   * @public
   */
  driftStatus?: DriftStatus | undefined;
}

/**
 * <p>Returns a summary of information about the parameters of an enabled control.</p>
 * @public
 */
export interface EnabledControlParameterSummary {
  /**
   * <p>The key of a key/value pair.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of a key/value pair.</p>
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * <p>An Amazon Web Services Region in which Amazon Web Services Control Tower expects to find the control deployed. </p>
 *          <p>The expected Regions are based on the Regions that are governed by the landing zone. In
 *             certain cases, a control is not actually enabled in the Region as expected, such as during
 *             drift, or <a href="https://docs.aws.amazon.com/controltower/latest/userguide/region-how.html#mixed-governance">mixed governance</a>.</p>
 * @public
 */
export interface Region {
  /**
   * <p>The Amazon Web Services Region name.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Information about the enabled control.</p>
 * @public
 */
export interface EnabledControlDetails {
  /**
   * <p>The ARN of the enabled control.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The control identifier of the enabled control. For information on how to find the <code>controlIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   * @public
   */
  controlIdentifier?: string | undefined;

  /**
   * <p>The ARN of the organizational unit. For information on how to find the <code>targetIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   * @public
   */
  targetIdentifier?: string | undefined;

  /**
   * <p>Target Amazon Web Services Regions for the enabled control.</p>
   * @public
   */
  targetRegions?: Region[] | undefined;

  /**
   * <p>The deployment summary of the enabled control.</p>
   * @public
   */
  statusSummary?: EnablementStatusSummary | undefined;

  /**
   * <p>The drift status of the enabled control.</p>
   * @public
   */
  driftStatusSummary?: DriftStatusSummary | undefined;

  /**
   * <p>Array of <code>EnabledControlParameter</code> objects.</p>
   * @public
   */
  parameters?: EnabledControlParameterSummary[] | undefined;
}

/**
 * @public
 */
export interface GetEnabledControlOutput {
  /**
   * <p>Information about the enabled control.</p>
   * @public
   */
  enabledControlDetails: EnabledControlDetails | undefined;
}

/**
 * <p>A structure that returns a set of control identifiers, the control status for each control in the set, and the drift status for each control in the set.</p>
 * @public
 */
export interface EnabledControlFilter {
  /**
   * <p>The set of <code>controlIdentifier</code> returned by the filter. </p>
   * @public
   */
  controlIdentifiers?: string[] | undefined;

  /**
   * <p>A list of <code>EnablementStatus</code> items.</p>
   * @public
   */
  statuses?: EnablementStatus[] | undefined;

  /**
   * <p>A list of <code>DriftStatus</code> items.</p>
   * @public
   */
  driftStatuses?: DriftStatus[] | undefined;
}

/**
 * @public
 */
export interface ListEnabledControlsInput {
  /**
   * <p>The ARN of the organizational unit. For information on how to find the <code>targetIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   * @public
   */
  targetIdentifier?: string | undefined;

  /**
   * <p>The token to continue the list from a previous API call with the same parameters.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>How many results to return per API call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An input filter for the <code>ListEnabledControls</code> API that lets you select the types of control operations to view.</p>
   * @public
   */
  filter?: EnabledControlFilter | undefined;
}

/**
 * <p>Returns a summary of information about an enabled control.</p>
 * @public
 */
export interface EnabledControlSummary {
  /**
   * <p>The <code>controlIdentifier</code> of the enabled control.</p>
   * @public
   */
  controlIdentifier?: string | undefined;

  /**
   * <p>The ARN of the enabled control.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ARN of the organizational unit.</p>
   * @public
   */
  targetIdentifier?: string | undefined;

  /**
   * <p>A short description of the status of the enabled control.</p>
   * @public
   */
  statusSummary?: EnablementStatusSummary | undefined;

  /**
   * <p>The drift status of the enabled control.</p>
   * @public
   */
  driftStatusSummary?: DriftStatusSummary | undefined;
}

/**
 * @public
 */
export interface ListEnabledControlsOutput {
  /**
   * <p>Lists the controls enabled by Amazon Web Services Control Tower on the specified organizational unit and
   *          the accounts it contains.</p>
   * @public
   */
  enabledControls: EnabledControlSummary[] | undefined;

  /**
   * <p>Retrieves the next page of results. If the string is empty, the response is the
   *          end of the results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ResetEnabledControlInput {
  /**
   * <p>The ARN of the enabled control to be reset.</p>
   * @public
   */
  enabledControlIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ResetEnabledControlOutput {
  /**
   * <p> The operation identifier for this <code>ResetEnabledControl</code> operation. </p>
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnabledControlInput {
  /**
   * <p>A key/value pair, where <code>Key</code> is of type <code>String</code> and <code>Value</code> is of type <code>Document</code>.</p>
   * @public
   */
  parameters: EnabledControlParameter[] | undefined;

  /**
   * <p>
   *          The ARN of the enabled control that will be updated.
   *       </p>
   * @public
   */
  enabledControlIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnabledControlOutput {
  /**
   * <p>
   *          The operation identifier for this <code>UpdateEnabledControl</code> operation.
   *       </p>
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetLandingZoneOperationInput {
  /**
   * <p>A unique identifier assigned to a landing zone operation.</p>
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LandingZoneOperationType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  RESET: "RESET",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type LandingZoneOperationType = (typeof LandingZoneOperationType)[keyof typeof LandingZoneOperationType];

/**
 * @public
 * @enum
 */
export const LandingZoneOperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type LandingZoneOperationStatus = (typeof LandingZoneOperationStatus)[keyof typeof LandingZoneOperationStatus];

/**
 * <p>Information about a landing zone operation.</p>
 * @public
 */
export interface LandingZoneOperationDetail {
  /**
   * <p>The landing zone operation type. </p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETE</code>: The <code>DeleteLandingZone</code> operation.  </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE</code>: The <code>CreateLandingZone</code> operation. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE</code>: The <code>UpdateLandingZone</code> operation. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESET</code>: The <code>ResetLandingZone</code> operation. </p>
   *             </li>
   *          </ul>
   * @public
   */
  operationType?: LandingZoneOperationType | undefined;

  /**
   * <p>The <code>operationIdentifier</code> of the landing zone operation.</p>
   * @public
   */
  operationIdentifier?: string | undefined;

  /**
   * <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The landing zone operation succeeded.  </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>: The landing zone operation is in progress. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The landing zone operation failed. </p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: LandingZoneOperationStatus | undefined;

  /**
   * <p>The landing zone operation start time.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The landing zone operation end time.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>If the operation result is FAILED, this string contains a message explaining why the operation failed.</p>
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetLandingZoneOperationOutput {
  /**
   * <p>Details about a landing zone operation.</p>
   * @public
   */
  operationDetails: LandingZoneOperationDetail | undefined;
}

/**
 * <p>A filter object that lets you call <code>ListLandingZoneOperations</code> with a specific filter.</p>
 * @public
 */
export interface LandingZoneOperationFilter {
  /**
   * <p>The set of landing zone operation types selected by the filter.</p>
   * @public
   */
  types?: LandingZoneOperationType[] | undefined;

  /**
   * <p>The statuses of the set of landing zone operations selected by the filter.</p>
   * @public
   */
  statuses?: LandingZoneOperationStatus[] | undefined;
}

/**
 * @public
 */
export interface ListLandingZoneOperationsInput {
  /**
   * <p>An input filter for the <code>ListLandingZoneOperations</code> API that lets you select the types of landing zone operations to view.</p>
   * @public
   */
  filter?: LandingZoneOperationFilter | undefined;

  /**
   * <p>The token to continue the list from a previous API call with the same parameters.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>How many results to return per API call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Returns a summary of information about a landing zone operation.</p>
 * @public
 */
export interface LandingZoneOperationSummary {
  /**
   * <p>The type of the landing zone operation.</p>
   * @public
   */
  operationType?: LandingZoneOperationType | undefined;

  /**
   * <p>The <code>operationIdentifier</code> of the landing zone operation.</p>
   * @public
   */
  operationIdentifier?: string | undefined;

  /**
   * <p>The status of the landing zone operation.</p>
   * @public
   */
  status?: LandingZoneOperationStatus | undefined;
}

/**
 * @public
 */
export interface ListLandingZoneOperationsOutput {
  /**
   * <p>Lists landing zone operations.</p>
   * @public
   */
  landingZoneOperations: LandingZoneOperationSummary[] | undefined;

  /**
   * <p>Retrieves the next page of results. If the string is empty, the response is the end of the results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateLandingZoneInput {
  /**
   * <p>The landing zone version, for example, 3.0.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The manifest JSON file is a text file that describes your Amazon Web Services resources. For examples, review
   *          <a href="https://docs.aws.amazon.com/controltower/latest/userguide/lz-api-launch">Launch your landing zone</a>.  </p>
   * @public
   */
  manifest: __DocumentType | undefined;

  /**
   * <p>Tags to be applied to the landing zone. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLandingZoneOutput {
  /**
   * <p>The ARN of the landing zone resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A unique identifier assigned to a <code>CreateLandingZone</code> operation. You can use this
   *          identifier as an input of <code>GetLandingZoneOperation</code> to check the operation's status.</p>
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteLandingZoneInput {
  /**
   * <p>The unique identifier of the landing zone.</p>
   * @public
   */
  landingZoneIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteLandingZoneOutput {
  /**
   * <p>&gt;A unique identifier assigned to a <code>DeleteLandingZone</code> operation. You can use this
   *          identifier as an input parameter of <code>GetLandingZoneOperation</code> to check the operation's status.</p>
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetLandingZoneInput {
  /**
   * <p>The unique identifier of the landing zone.</p>
   * @public
   */
  landingZoneIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LandingZoneDriftStatus = {
  DRIFTED: "DRIFTED",
  IN_SYNC: "IN_SYNC",
} as const;

/**
 * @public
 */
export type LandingZoneDriftStatus = (typeof LandingZoneDriftStatus)[keyof typeof LandingZoneDriftStatus];

/**
 * <p>The drift status summary of the landing zone. </p>
 *          <p>If the landing zone differs from the expected configuration, it is defined to be in a state of
 *          drift. You can repair this drift by resetting the landing zone.</p>
 * @public
 */
export interface LandingZoneDriftStatusSummary {
  /**
   * <p>The drift status of the landing zone. </p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The landing zone deployed in this configuration does not match the
   *                   configuration that Amazon Web Services Control Tower expected. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The landing zone deployed in this configuration matches the
   *                   configuration that Amazon Web Services Control Tower expected. </p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: LandingZoneDriftStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const LandingZoneStatus = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
} as const;

/**
 * @public
 */
export type LandingZoneStatus = (typeof LandingZoneStatus)[keyof typeof LandingZoneStatus];

/**
 * <p>Information about the landing zone.</p>
 * @public
 */
export interface LandingZoneDetail {
  /**
   * <p>The landing zone's current deployed version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The landing zone manifest JSON text file that specifies the landing zone configurations. </p>
   * @public
   */
  manifest: __DocumentType | undefined;

  /**
   * <p>The ARN of the landing zone.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The landing zone deployment status. One of <code>ACTIVE</code>, <code>PROCESSING</code>, <code>FAILED</code>.</p>
   * @public
   */
  status?: LandingZoneStatus | undefined;

  /**
   * <p>The latest available version of the landing zone.</p>
   * @public
   */
  latestAvailableVersion?: string | undefined;

  /**
   * <p>The drift status of the landing zone.</p>
   * @public
   */
  driftStatus?: LandingZoneDriftStatusSummary | undefined;
}

/**
 * @public
 */
export interface GetLandingZoneOutput {
  /**
   * <p>Information about the landing zone.</p>
   * @public
   */
  landingZone: LandingZoneDetail | undefined;
}

/**
 * @public
 */
export interface ListLandingZonesInput {
  /**
   * <p>The token to continue the list from a previous API call with the same parameters.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of returned landing zone ARNs, which is one.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Returns a summary of information about a landing zone.</p>
 * @public
 */
export interface LandingZoneSummary {
  /**
   * <p>The ARN of the landing zone.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface ListLandingZonesOutput {
  /**
   * <p>The ARN of the landing zone.</p>
   * @public
   */
  landingZones: LandingZoneSummary[] | undefined;

  /**
   * <p>Retrieves the next page of results. If the string is empty, the response is the end of the results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ResetLandingZoneInput {
  /**
   * <p>The unique identifier of the landing zone.</p>
   * @public
   */
  landingZoneIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ResetLandingZoneOutput {
  /**
   * <p>A unique identifier assigned to a <code>ResetLandingZone</code> operation. You can use this
   *          identifier as an input parameter of <code>GetLandingZoneOperation</code> to check the operation's status.</p>
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateLandingZoneInput {
  /**
   * <p>The landing zone version, for example, 3.2.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The manifest file (JSON) is a text file that describes your Amazon Web Services resources. For an example, review
   *          <a href="https://docs.aws.amazon.com/controltower/latest/userguide/lz-api-launch">Launch your landing zone</a>. The example manifest file contains each of the available parameters. The schema for the landing zone's JSON manifest file is not published, by design.</p>
   * @public
   */
  manifest: __DocumentType | undefined;

  /**
   * <p>The unique identifier of the landing zone.</p>
   * @public
   */
  landingZoneIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateLandingZoneOutput {
  /**
   * <p>A unique identifier assigned to a <code>UpdateLandingZone</code> operation. You can use this
   *          identifier as an input of <code>GetLandingZoneOperation</code> to check the operation's status.</p>
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p> The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>A list of tags, as <code>key:value</code> strings.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The ARN of the resource to be tagged.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Tags to be applied to the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Tag keys to be removed from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
