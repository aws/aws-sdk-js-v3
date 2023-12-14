// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

import { ControlTowerServiceException as __BaseException } from "./ControlTowerServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
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
 * <p>Updating or deleting the resource can cause an inconsistent state.</p>
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
   *          <b>Elective</b> controls are permitted, with the exception of the
   *          <b>landing zone Region deny</b> control. For information on how to find the <code>controlIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
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
   *          available for 90 days.</p>
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 * <p>An unexpected error occurred during processing of a request.</p>
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
 * <p>The request references a resource that does not exist.</p>
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
 * <p>The request would cause a service quota to be exceeded. The limit is 10 concurrent operations.</p>
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
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @public
   * <p>The ID of the service that is associated with the error.
   *       </p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The ID of the service quota that was exceeded.</p>
   */
  quotaCode?: string;

  /**
   * @public
   * <p>The number of seconds to wait before retrying.</p>
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
 * <p>The input does not satisfy the constraints specified by an  Amazon Web Services service.</p>
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
 * <p> A set of parameters that configure the behavior of the enabled control. A key/value pair, where <code>Key</code> is of type <code>String</code> and <code>Value</code> is of type <code>Document</code>.</p>
 */
export interface EnabledControlParameter {
  /**
   * @public
   * <p>The key of a key/value pair. It is of type <code>string</code>.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The value of a key/value pair. It can be of type <code>array</code>
   *             <code>string</code>, <code>number</code>, <code>object</code>, or <code>boolean</code>. </p>
   */
  value: __DocumentType | undefined;
}

/**
 * @public
 */
export interface EnableControlInput {
  /**
   * @public
   * <p>The ARN of the control. Only <b>Strongly recommended</b> and
   *          <b>Elective</b> controls are permitted, with the exception of the
   *          <b>landing zone Region deny</b> control. For information on how to find the <code>controlIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   */
  controlIdentifier: string | undefined;

  /**
   * @public
   * <p>The ARN of the organizational unit. For information on how to find the <code>targetIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   */
  targetIdentifier: string | undefined;

  /**
   * @public
   * <p>Tags to be applied to the <code>EnabledControl</code> resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>An array of <code>EnabledControlParameter</code> objects</p>
   */
  parameters?: EnabledControlParameter[];
}

/**
 * @public
 */
export interface EnableControlOutput {
  /**
   * @public
   * <p>The ID of the asynchronous operation, which is used to track status. The operation is
   *          available for 90 days.</p>
   */
  operationIdentifier: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>EnabledControl</code> resource.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface GetControlOperationInput {
  /**
   * @public
   * <p>The ID of the asynchronous operation, which is used to track status. The operation is
   *          available for 90 days.</p>
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
   *          why the operation failed.</p>
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
   * <p>The <code>controlIdentifier</code> of the enabled control.</p>
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
 * <p>The drift summary of the enabled control.</p>
 *          <p>Amazon Web Services Control Tower expects the enabled control
 *          configuration to include all supported and governed Regions. If the enabled control differs
 *          from the expected configuration, it is defined to be in a state of drift. You can repair this drift by resetting the enabled control.</p>
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
   */
  driftStatus?: DriftStatus;
}

/**
 * @public
 * <p>Returns a summary of information about the parameters of an enabled control.</p>
 */
export interface EnabledControlParameterSummary {
  /**
   * @public
   * <p>The key of a key/value pair.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The value of a key/value pair.</p>
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
 * @public
 * <p>The deployment summary of the enabled control.</p>
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
   * <p>The last operation identifier for the enabled control.</p>
   */
  lastOperationIdentifier?: string;
}

/**
 * @public
 * <p>An  Amazon Web Services Region in which  Amazon Web Services Control Tower expects to find the control deployed. </p>
 *          <p>The expected Regions are based on the Regions that are governed by the landing zone. In
 *             certain cases, a control is not actually enabled in the Region as expected, such as during
 *             drift, or <a href="https://docs.aws.amazon.com/controltower/latest/userguide/region-how.html#mixed-governance">mixed governance</a>.</p>
 */
export interface Region {
  /**
   * @public
   * <p>The Amazon Web Services Region name.</p>
   */
  name?: string;
}

/**
 * @public
 * <p>Information about the enabled control.</p>
 */
export interface EnabledControlDetails {
  /**
   * @public
   * <p>The ARN of the enabled control.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The control identifier of the enabled control. For information on how to find the <code>controlIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   */
  controlIdentifier?: string;

  /**
   * @public
   * <p>The ARN of the organizational unit. For information on how to find the <code>targetIdentifier</code>, see <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html">the overview page</a>.</p>
   */
  targetIdentifier?: string;

  /**
   * @public
   * <p>Target Amazon Web Services Regions for the enabled control.</p>
   */
  targetRegions?: Region[];

  /**
   * @public
   * <p>The deployment summary of the enabled control.</p>
   */
  statusSummary?: EnablementStatusSummary;

  /**
   * @public
   * <p>The drift status of the enabled control.</p>
   */
  driftStatusSummary?: DriftStatusSummary;

  /**
   * @public
   * <p>Array of <code>EnabledControlParameter</code> objects.</p>
   */
  parameters?: EnabledControlParameterSummary[];
}

/**
 * @public
 */
export interface GetEnabledControlOutput {
  /**
   * @public
   * <p>Information about the enabled control.</p>
   */
  enabledControlDetails: EnabledControlDetails | undefined;
}

/**
 * @public
 */
export interface CreateLandingZoneInput {
  /**
   * @public
   * <p>The landing zone version, for example, 3.0.</p>
   */
  version: string | undefined;

  /**
   * @public
   * <p>The manifest JSON file is a text file that describes your Amazon Web Services resources. For examples, review
   *          <a href="https://docs.aws.amazon.com/controltower/latest/userguide/lz-api-launch">Launch your landing zone</a>. </p>
   */
  manifest: __DocumentType | undefined;

  /**
   * @public
   * <p>Tags to be applied to the landing zone. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateLandingZoneOutput {
  /**
   * @public
   * <p>The ARN of the landing zone resource.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A unique identifier assigned to a <code>CreateLandingZone</code> operation. You can use this
   *          identifier as an input of <code>GetLandingZoneOperation</code> to check the operation's status.</p>
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteLandingZoneInput {
  /**
   * @public
   * <p>The unique identifier of the landing zone.</p>
   */
  landingZoneIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteLandingZoneOutput {
  /**
   * @public
   * <p>&gt;A unique identifier assigned to a <code>DeleteLandingZone</code> operation. You can use this
   *          identifier as an input parameter of <code>GetLandingZoneOperation</code> to check the operation's status.</p>
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetLandingZoneInput {
  /**
   * @public
   * <p>The unique identifier of the landing zone.</p>
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
 * @public
 * <p>The drift status summary of the landing zone. </p>
 *          <p>If the landing zone differs from the expected configuration, it is defined to be in a state of
 *          drift. You can repair this drift by resetting the landing zone.</p>
 */
export interface LandingZoneDriftStatusSummary {
  /**
   * @public
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
   */
  status?: LandingZoneDriftStatus;
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
 * @public
 * <p>Information about the landing zone.</p>
 */
export interface LandingZoneDetail {
  /**
   * @public
   * <p>The landing zone's current deployed version.</p>
   */
  version: string | undefined;

  /**
   * @public
   * <p>The landing zone manifest JSON text file that specifies the landing zone configurations. </p>
   */
  manifest: __DocumentType | undefined;

  /**
   * @public
   * <p>The ARN of the landing zone.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The landing zone deployment status.</p>
   */
  status?: LandingZoneStatus;

  /**
   * @public
   * <p>The latest available version of the landing zone.</p>
   */
  latestAvailableVersion?: string;

  /**
   * @public
   * <p>The drift status of the landing zone.</p>
   */
  driftStatus?: LandingZoneDriftStatusSummary;
}

/**
 * @public
 */
export interface GetLandingZoneOutput {
  /**
   * @public
   * <p>Information about the landing zone.</p>
   */
  landingZone: LandingZoneDetail | undefined;
}

/**
 * @public
 */
export interface GetLandingZoneOperationInput {
  /**
   * @public
   * <p>A unique identifier assigned to a landing zone operation.</p>
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
 * @public
 * <p>Information about a landing zone operation.</p>
 */
export interface LandingZoneOperationDetail {
  /**
   * @public
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
   */
  operationType?: LandingZoneOperationType;

  /**
   * @public
   * <p>The landing zone operation start time.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The landing zone operation end time.</p>
   */
  endTime?: Date;

  /**
   * @public
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
   */
  status?: LandingZoneOperationStatus;

  /**
   * @public
   * <p>If the operation result is FAILED, this string contains a message explaining why the operation failed.</p>
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface GetLandingZoneOperationOutput {
  /**
   * @public
   * <p>Details about a landing zone operation.</p>
   */
  operationDetails: LandingZoneOperationDetail | undefined;
}

/**
 * @public
 */
export interface ListLandingZonesInput {
  /**
   * @public
   * <p>The token to continue the list from a previous API call with the same parameters.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of returned landing zone ARNs, which is one.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Returns a summary of information about a landing zone.</p>
 */
export interface LandingZoneSummary {
  /**
   * @public
   * <p>The ARN of the landing zone.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface ListLandingZonesOutput {
  /**
   * @public
   * <p>The ARN of the landing zone.</p>
   */
  landingZones: LandingZoneSummary[] | undefined;

  /**
   * @public
   * <p>Retrieves the next page of results. If the string is empty, the response is the end of the results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ResetLandingZoneInput {
  /**
   * @public
   * <p>The unique identifier of the landing zone.</p>
   */
  landingZoneIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ResetLandingZoneOutput {
  /**
   * @public
   * <p>A unique identifier assigned to a <code>ResetLandingZone</code> operation. You can use this
   *          identifier as an input parameter of <code>GetLandingZoneOperation</code> to check the operation's status.</p>
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateLandingZoneInput {
  /**
   * @public
   * <p>The landing zone version, for example, 3.2.</p>
   */
  version: string | undefined;

  /**
   * @public
   * <p>The manifest JSON file is a text file that describes your Amazon Web Services resources. For examples, review
   *          <a href="https://docs.aws.amazon.com/controltower/latest/userguide/lz-api-launch">Launch your landing zone</a>.</p>
   */
  manifest: __DocumentType | undefined;

  /**
   * @public
   * <p>The unique identifier of the landing zone.</p>
   */
  landingZoneIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateLandingZoneOutput {
  /**
   * @public
   * <p>A unique identifier assigned to a <code>UpdateLandingZone</code> operation. You can use this
   *          identifier as an input of <code>GetLandingZoneOperation</code> to check the operation's status.</p>
   */
  operationIdentifier: string | undefined;
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
 * <p>Returns a summary of information about an enabled control.</p>
 */
export interface EnabledControlSummary {
  /**
   * @public
   * <p>The <code>controlIdentifier</code> of the enabled control.</p>
   */
  controlIdentifier?: string;

  /**
   * @public
   * <p>The ARN of the enabled control.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ARN of the organizational unit.</p>
   */
  targetIdentifier?: string;

  /**
   * @public
   * <p>A short description of the status of the enabled control.</p>
   */
  statusSummary?: EnablementStatusSummary;

  /**
   * @public
   * <p>The drift status of the enabled control.</p>
   */
  driftStatusSummary?: DriftStatusSummary;
}

/**
 * @public
 */
export interface ListEnabledControlsOutput {
  /**
   * @public
   * <p>Lists the controls enabled by Amazon Web Services Control Tower on the specified organizational unit and
   *          the accounts it contains.</p>
   */
  enabledControls: EnabledControlSummary[] | undefined;

  /**
   * @public
   * <p>Retrieves the next page of results. If the string is empty, the response is the
   *          end of the results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p> The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>A list of tags, as <code>key:value</code> strings.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The ARN of the resource to be tagged.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Tags to be applied to the resource.</p>
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
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Tag keys to be removed from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UpdateEnabledControlInput {
  /**
   * @public
   * <p>A key/value pair, where <code>Key</code> is of type <code>String</code> and <code>Value</code> is of type <code>Document</code>.</p>
   */
  parameters: EnabledControlParameter[] | undefined;

  /**
   * @public
   * <p>
   *          The ARN of the enabled control that will be updated.
   *       </p>
   */
  enabledControlIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnabledControlOutput {
  /**
   * @public
   * <p>
   *          The operation identifier for this <code>UpdateEnabledControl</code> operation.
   *       </p>
   */
  operationIdentifier: string | undefined;
}
