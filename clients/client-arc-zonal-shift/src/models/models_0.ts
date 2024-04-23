// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ARCZonalShiftServiceException as __BaseException } from "./ARCZonalShiftServiceException";

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
 * @enum
 */
export const AppliedStatus = {
  APPLIED: "APPLIED",
  NOT_APPLIED: "NOT_APPLIED",
} as const;

/**
 * @public
 */
export type AppliedStatus = (typeof AppliedStatus)[keyof typeof AppliedStatus];

/**
 * @public
 * <p>There was an internal server error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
 * @enum
 */
export const AutoshiftExecutionStatus = {
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
} as const;

/**
 * @public
 */
export type AutoshiftExecutionStatus = (typeof AutoshiftExecutionStatus)[keyof typeof AutoshiftExecutionStatus];

/**
 * @public
 */
export interface ListAutoshiftsRequest {
  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the
   * 			previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous
   * 			call's <code>NextToken</code> response to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The status of the autoshift.</p>
   */
  status?: AutoshiftExecutionStatus;

  /**
   * @public
   * <p>The number of objects that you want to return with this call.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about an autoshift. Amazon Web Services starts an autoshift to temporarily move traffic for a resource
 * 			away from an Availability Zone in an Amazon Web Services Region
 * 			when Amazon Web Services determines that there's an issue in the Availability Zone that could potentially affect customers.
 * 			You can configure zonal autoshift in Route 53 ARC for managed resources in your Amazon Web Services account in a Region.
 * 			Supported Amazon Web Services resources are automatically registered with Route 53 ARC.</p>
 *          <p>Autoshifts are temporary. When the Availability Zone recovers, Amazon Web Services ends the autoshift, and
 * 			traffic for the resource is no longer directed to the other Availability Zones in the Region.</p>
 *          <p>You can stop an autoshift for a resource by disabling zonal autoshift.</p>
 */
export interface AutoshiftSummary {
  /**
   * @public
   * <p>The Availability Zone that traffic is shifted away from for a resource when Amazon Web Services starts an autoshift.
   * 			Until the autoshift ends, traffic for the resource is instead directed to other Availability Zones in the Amazon Web Services Region.
   * 			An autoshift can end for a resource, for example, when Amazon Web Services ends the autoshift for the Availability Zone or when
   * 			you disable zonal autoshift for the resource.</p>
   */
  awayFrom: string | undefined;

  /**
   * @public
   * <p>The time (in UTC) when the autoshift ended.</p>
   */
  endTime: Date | undefined;

  /**
   * @public
   * <p>The time (in UTC) when the autoshift started.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The status for an autoshift. </p>
   */
  status: AutoshiftExecutionStatus | undefined;
}

/**
 * @public
 */
export interface ListAutoshiftsResponse {
  /**
   * @public
   * <p>The items in the response list.</p>
   */
  items?: AutoshiftSummary[];

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the
   * 			previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous
   * 			call's <code>NextToken</code> response to request the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  INVALID_ALARM_CONDITION: "InvalidAlarmCondition",
  INVALID_AZ: "InvalidAz",
  INVALID_CONDITION_TYPE: "InvalidConditionType",
  INVALID_EXPIRES_IN: "InvalidExpiresIn",
  INVALID_PRACTICE_BLOCKER: "InvalidPracticeBlocker",
  INVALID_RESOURCE_IDENTIFIER: "InvalidResourceIdentifier",
  INVALID_STATUS: "InvalidStatus",
  INVALID_TOKEN: "InvalidToken",
  MISSING_VALUE: "MissingValue",
  UNSUPPORTED_AZ: "UnsupportedAz",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason for the validation exception.</p>
   */
  reason: ValidationExceptionReason | undefined;

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
 * @public
 * @enum
 */
export const AutoshiftAppliedStatus = {
  APPLIED: "APPLIED",
  NOT_APPLIED: "NOT_APPLIED",
} as const;

/**
 * @public
 */
export type AutoshiftAppliedStatus = (typeof AutoshiftAppliedStatus)[keyof typeof AutoshiftAppliedStatus];

/**
 * @public
 * <p>A complex structure that lists an autoshift that is currently active for a managed resource and information about
 * 			the autoshift.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.how-it-works.html">How zonal autoshift
 * 			and practice runs work</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
 */
export interface AutoshiftInResource {
  /**
   * @public
   * <p>The <code>appliedStatus</code> field specifies which application traffic shift is in effect for a
   * 			resource when there is more than one traffic shift active. There can be more than one application traffic
   * 			shift in progress at the same time - that is, practice run zonal shifts, customer-started zonal shifts,
   * 			or an autoshift. The <code>appliedStatus</code> field for an autoshift for a resource can have one of two
   * 			values: <code>APPLIED</code> or <code>NOT_APPLIED</code>. The zonal shift or autoshift
   * 			that is currently in effect for the resource has an applied status set to <code>APPLIED</code>.</p>
   *          <p>The overall principle for precedence is that zonal shifts that you start as a customer take precedence
   * 			autoshifts, which take precedence over practice runs. That is, customer-started zonal shifts &gt; autoshifts &gt; practice run
   * 			zonal shifts.</p>
   *          <p>For more information, see
   * 			<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.how-it-works.html">How zonal autoshift
   * 				and practice runs work</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   */
  appliedStatus: AutoshiftAppliedStatus | undefined;

  /**
   * @public
   * <p>The Availability Zone that traffic is shifted away from for a resource, when Amazon Web Services starts an autoshift.
   * 			Until the autoshift ends, traffic for the resource is instead directed to other Availability Zones in the Amazon Web Services Region.
   * 			An autoshift can end for a resource, for example, when Amazon Web Services ends the autoshift for the Availability Zone or when
   * 			you disable zonal autoshift for the resource.</p>
   */
  awayFrom: string | undefined;

  /**
   * @public
   * <p>The time (UTC) when the autoshift started.</p>
   */
  startTime: Date | undefined;
}

/**
 * @public
 */
export interface CancelZonalShiftRequest {
  /**
   * @public
   * <p>The internally-generated identifier of a zonal shift.</p>
   */
  zonalShiftId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConflictExceptionReason = {
  AUTOSHIFT_ENABLED: "AutoShiftEnabled",
  PRACTICE_CONFIGURATION_ALREADY_EXISTS: "PracticeConfigurationAlreadyExists",
  PRACTICE_CONFIGURATION_DOES_NOT_EXIST: "PracticeConfigurationDoesNotExist",
  SIMULTANEOUS_ZONAL_SHIFTS_CONFLICT: "SimultaneousZonalShiftsConflict",
  ZONAL_SHIFT_ALREADY_EXISTS: "ZonalShiftAlreadyExists",
  ZONAL_SHIFT_STATUS_NOT_ACTIVE: "ZonalShiftStatusNotActive",
} as const;

/**
 * @public
 */
export type ConflictExceptionReason = (typeof ConflictExceptionReason)[keyof typeof ConflictExceptionReason];

/**
 * @public
 * <p>The request could not be processed because of conflict in the current state of the resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason for the conflict exception.</p>
   */
  reason: ConflictExceptionReason | undefined;

  /**
   * @public
   * <p>The zonal shift ID associated with the conflict exception.</p>
   */
  zonalShiftId?: string;

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
    this.reason = opts.reason;
    this.zonalShiftId = opts.zonalShiftId;
  }
}

/**
 * @public
 * <p>The input requested a resource that was not found.</p>
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
 * @enum
 */
export const ZonalShiftStatus = {
  ACTIVE: "ACTIVE",
  CANCELED: "CANCELED",
  EXPIRED: "EXPIRED",
} as const;

/**
 * @public
 */
export type ZonalShiftStatus = (typeof ZonalShiftStatus)[keyof typeof ZonalShiftStatus];

/**
 * @public
 */
export interface ZonalShift {
  /**
   * @public
   * <p>The identifier of a zonal shift.</p>
   */
  zonalShiftId: string | undefined;

  /**
   * @public
   * <p>The identifier for the resource to shift away traffic for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   *          <p>At this time, supported resources are Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The Availability Zone that traffic is moved away from for a resource when you start a zonal shift.
   * 			Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the Amazon Web Services Region.</p>
   */
  awayFrom: string | undefined;

  /**
   * @public
   * <p>The expiry time (expiration time) for a customer-started zonal shift. A zonal shift is temporary and must be set to expire when you start the zonal shift.
   * 			You can initially set a zonal shift to expire in a maximum of three days (72 hours). However, you can update a zonal shift
   * 			to set a new expiration at any time. </p>
   *          <p>When you start a zonal shift, you specify how long you want it to be active, which Route 53 ARC converts
   * 			to an expiry time (expiration time). You can cancel a zonal shift when you're ready to restore traffic to the Availability Zone, or
   * 			just wait for it to expire. Or you can update the zonal shift to specify another length of time to expire in.</p>
   */
  expiryTime: Date | undefined;

  /**
   * @public
   * <p>The time (UTC) when the zonal shift starts.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>A status for a zonal shift.</p>
   *          <p>The <code>Status</code> for a zonal shift can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ACTIVE:</b> The zonal shift has been started and active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EXPIRED:</b> The zonal shift has expired (the expiry time was exceeded).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELED:</b> The zonal shift was canceled.</p>
   *             </li>
   *          </ul>
   */
  status: ZonalShiftStatus | undefined;

  /**
   * @public
   * <p>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment
   *    		history is maintained. A new comment overwrites any existing comment string.</p>
   */
  comment: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ControlConditionType = {
  CLOUDWATCH: "CLOUDWATCH",
} as const;

/**
 * @public
 */
export type ControlConditionType = (typeof ControlConditionType)[keyof typeof ControlConditionType];

/**
 * @public
 * <p>A control condition is an alarm that you specify for a practice run. When you configure practice runs
 * 			with zonal autoshift for a resource, you specify Amazon CloudWatch alarms, which you create in CloudWatch
 * 			to use with the practice run. The alarms that you specify are an
 * 			<i>outcome alarm</i>, to monitor application health during practice runs and,
 * 			optionally, a <i>blocking alarm</i>, to block practice runs from starting.</p>
 *          <p>Control condition alarms do not apply for autoshifts.</p>
 *          <p>For more information, see
 * 			<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.considerations.html">
 * 				Considerations when you configure zonal autoshift</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
 */
export interface ControlCondition {
  /**
   * @public
   * <p>The type of alarm specified for a practice run. The only valid value is <code>CLOUDWATCH</code>.</p>
   */
  type: ControlConditionType | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the Amazon CloudWatch alarm that you specify as a control condition for a practice run.</p>
   */
  alarmIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CreatePracticeRunConfigurationRequest {
  /**
   * @public
   * <p>The identifier of the resource to shift away traffic for when a practice
   * 			run starts a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   *          <p>At this time, supported resources are Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * @public
   * <p>Optionally, you can block Route 53 ARC from starting practice runs for specific windows of
   * 			days and times. </p>
   *          <p>The format for blocked windows is: DAY:HH:SS-DAY:HH:SS. Keep in mind, when you specify dates,
   * 			that dates and times for practice runs are in UTC. Also, be aware of potential time adjustments
   * 			that might be required for daylight saving time differences. Separate multiple blocked windows
   * 			with spaces.</p>
   *          <p>For example, say you run business report summaries three days a week. For
   * 			this scenario, you might set the following recurring days and times as blocked windows,
   * 			for example: <code>MON-20:30-21:30 WED-20:30-21:30
   * 				FRI-20:30-21:30</code>.</p>
   */
  blockedWindows?: string[];

  /**
   * @public
   * <p>Optionally, you can block Route 53 ARC from starting practice runs for a resource
   * 			on specific calendar dates.</p>
   *          <p>The format for blocked dates is: YYYY-MM-DD. Keep in mind, when you specify dates,
   * 			that dates and times for practice runs are in UTC. Separate multiple blocked
   * 			dates with spaces.</p>
   *          <p>For example, if you have an application update scheduled to launch on May 1, 2024, and
   * 			you don't want practice runs to shift traffic away at that time, you could set a blocked date
   * 			for <code>2024-05-01</code>.</p>
   */
  blockedDates?: string[];

  /**
   * @public
   * <p>An Amazon CloudWatch alarm that you can specify for zonal autoshift
   * 			practice runs. This alarm blocks Route 53 ARC from starting practice run zonal
   * 			shifts, and ends a practice run that's in progress, when the alarm is in
   * 			an <code>ALARM</code> state. </p>
   */
  blockingAlarms?: ControlCondition[];

  /**
   * @public
   * <p>The <i>outcome alarm</i> for practice runs is a required
   * 			Amazon CloudWatch alarm that you specify that ends a practice run when the
   * 			alarm is in an <code>ALARM</code> state.</p>
   *          <p>Configure the alarm to monitor the health of your application
   * 			when traffic is shifted away from an Availability Zone during each weekly
   * 			practice run. You should configure the alarm to go into an <code>ALARM</code> state
   * 			if your application is impacted by the zonal shift, and you want to stop the
   * 			zonal shift, to let traffic for the resource return to the Availability Zone.</p>
   */
  outcomeAlarms: ControlCondition[] | undefined;
}

/**
 * @public
 * <p>A practice run configuration for a resource includes the Amazon CloudWatch alarms that you've specified for a practice
 * 		run, as well as any blocked dates or blocked windows for the practice run.</p>
 *          <p>You can update or delete a practice run configuration. Before you delete a practice run configuration, you
 * 			must disable zonal autoshift for the resource. A practice run configuration is required when zonal autoshift is enabled.</p>
 */
export interface PracticeRunConfiguration {
  /**
   * @public
   * <p>The <i>blocking alarm</i> for practice runs is an optional alarm that you can
   * 			specify that blocks practice runs when the alarm is in an <code>ALARM</code> state.</p>
   */
  blockingAlarms?: ControlCondition[];

  /**
   * @public
   * <p>The <i>outcome alarm</i> for practice runs is an alarm that you specify that
   * 			ends a practice run when the alarm is in an <code>ALARM</code> state.</p>
   */
  outcomeAlarms: ControlCondition[] | undefined;

  /**
   * @public
   * <p>An array of one or more windows of days and times that you can block Route 53 ARC
   * 			from starting practice runs for a resource.</p>
   *          <p>Specify the blocked windows in UTC, using the format <code>DAY:HH:MM-DAY:HH:MM</code>, separated by
   * 			spaces. For example, <code>MON:18:30-MON:19:30 TUE:18:30-TUE:19:30</code>.</p>
   */
  blockedWindows?: string[];

  /**
   * @public
   * <p>An array of one or more dates that you can specify when Amazon Web Services does not start practice runs for a resource.</p>
   *          <p>Specify blocked dates, in UTC, in the format <code>YYYY-MM-DD</code>, separated by spaces. </p>
   */
  blockedDates?: string[];
}

/**
 * @public
 * @enum
 */
export const ZonalAutoshiftStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ZonalAutoshiftStatus = (typeof ZonalAutoshiftStatus)[keyof typeof ZonalAutoshiftStatus];

/**
 * @public
 */
export interface CreatePracticeRunConfigurationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you configured  the practice
   * 			run for.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the resource that you configured  the practice run for. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The status for zonal autoshift for a resource. When you specify the
   * 			autoshift status as <code>ENABLED</code>, Amazon Web Services shifts traffic
   * 			away from shifts away application resource traffic from an Availability Zone,
   * 			on your behalf, when Amazon Web Services determines that there's an issue in
   * 			the Availability Zone that could potentially affect customers.</p>
   *          <p>When you enable zonal autoshift, you must also configure practice runs for
   * 			the resource.</p>
   */
  zonalAutoshiftStatus: ZonalAutoshiftStatus | undefined;

  /**
   * @public
   * <p>A practice run configuration for a resource. Configurations include the
   * 			outcome alarm that you specify for practice runs, and, optionally, a
   * 			blocking alarm and blocking dates and windows.</p>
   */
  practiceRunConfiguration: PracticeRunConfiguration | undefined;
}

/**
 * @public
 */
export interface DeletePracticeRunConfigurationRequest {
  /**
   * @public
   * <p>The identifier for the resource that you want to delete the practice
   * 			run configuration for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   */
  resourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeletePracticeRunConfigurationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you deleted the practice
   * 			run for.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the resource that you deleted the practice
   * 			run for. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The status of zonal autoshift for the resource.</p>
   */
  zonalAutoshiftStatus: ZonalAutoshiftStatus | undefined;
}

/**
 * @public
 */
export interface GetManagedResourceRequest {
  /**
   * @public
   * <p>The identifier for the resource to shift away traffic for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   *          <p>At this time, supported resources are Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
   */
  resourceIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PracticeRunOutcome = {
  FAILED: "FAILED",
  INTERRUPTED: "INTERRUPTED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type PracticeRunOutcome = (typeof PracticeRunOutcome)[keyof typeof PracticeRunOutcome];

/**
 * @public
 * <p>A complex structure that lists the zonal shifts for a managed resource and their statuses for the resource.</p>
 */
export interface ZonalShiftInResource {
  /**
   * @public
   * <p>The <code>appliedStatus</code> field specifies which application traffic shift is in effect for a
   *    		resource when there is more than one traffic shift active. There can be more than one application traffic
   *    		shift in progress at the same time - that is, practice run zonal shifts, customer-started zonal shifts,
   *    		or an autoshift. The <code>appliedStatus</code> field for an autoshift for a resource can have one of two
   *    		values: <code>APPLIED</code> or <code>NOT_APPLIED</code>. The zonal shift or autoshift
   *    		that is currently in effect for the resource has an applied status set to <code>APPLIED</code>.</p>
   *          <p>The overall principle for precedence is that zonal shifts that you start as a customer take precedence
   *    		autoshifts, which take precedence over practice runs. That is, customer-started zonal shifts &gt; autoshifts &gt; practice run
   *    		zonal shifts.</p>
   *          <p>For more information, see
   *    		<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.how-it-works.html">How zonal autoshift
   *    			and practice runs work</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   */
  appliedStatus: AppliedStatus | undefined;

  /**
   * @public
   * <p>The identifier of a zonal shift.</p>
   */
  zonalShiftId: string | undefined;

  /**
   * @public
   * <p>The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   *          <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The Availability Zone that traffic is moved away from for a resource when you start a zonal shift.
   *    		Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the Amazon Web Services Region.</p>
   */
  awayFrom: string | undefined;

  /**
   * @public
   * <p>The expiry time (expiration time) for a customer-started zonal shift. A zonal shift is temporary and must be set to expire when you start the zonal shift.
   *    		You can initially set a zonal shift to expire in a maximum of three days (72 hours). However, you can update a zonal shift
   *    		to set a new expiration at any time. </p>
   *          <p>When you start a zonal shift, you specify how long you want it to be active, which Route 53 ARC converts
   *    		to an expiry time (expiration time). You can cancel a zonal shift when you're ready to restore traffic to the Availability Zone, or
   *    		just wait for it to expire. Or you can update the zonal shift to specify another length of time to expire in.</p>
   */
  expiryTime: Date | undefined;

  /**
   * @public
   * <p>The time (UTC) when the zonal shift starts.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment
   *    		history is maintained. That is, a new comment overwrites any existing comment string.</p>
   */
  comment: string | undefined;

  /**
   * @public
   * <p>The outcome, or end state, returned for a practice run. The following values can be returned:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PENDING:</b> Outcome value when a practice run is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SUCCEEDED:</b> Outcome value when the outcome alarm specified for
   * 				the practice run configuration does not go into an <code>ALARM</code> state during the practice run, and the practice run
   * 				was not interrupted before it completed the expected 30 minute zonal shift.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>INTERRUPTED:</b> Outcome value when the practice run was stopped before the
   * 				expected 30 minute zonal shift duration, or there was another problem with the practice run that created an inconclusive outcome.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED:</b> Outcome value when the outcome alarm specified for
   * 				the practice run configuration goes into an <code>ALARM</code> state during the practice run, and the practice run
   * 				was not interrupted before it completed.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about practice run outcomes, see
   * 			<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.configure.html">
   * 				Considerations when you configure zonal autoshift</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   */
  practiceRunOutcome?: PracticeRunOutcome;
}

/**
 * @public
 */
export interface GetManagedResourceResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the resource.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the resource.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A collection of key-value pairs that indicate whether resources are active in Availability Zones or not.
   *    		The key name is the Availability Zone where the resource is deployed. The value is 1 or 0.</p>
   */
  appliedWeights: Record<string, number> | undefined;

  /**
   * @public
   * <p>The zonal shifts that are currently active for a resource. </p>
   */
  zonalShifts: ZonalShiftInResource[] | undefined;

  /**
   * @public
   * <p>An array of the autoshifts that are active for the resource.</p>
   */
  autoshifts?: AutoshiftInResource[];

  /**
   * @public
   * <p>The practice run configuration for zonal autoshift that's associated with
   * 			the resource.</p>
   */
  practiceRunConfiguration?: PracticeRunConfiguration;

  /**
   * @public
   * <p>The status for zonal autoshift for a resource. When the
   * 			autoshift status is <code>ENABLED</code>, Amazon Web Services shifts traffic
   * 			for a resource away from an Availability Zone, on your behalf, when
   * 			Amazon Web Services determines that there's an issue in
   * 			the Availability Zone that could potentially affect customers.</p>
   */
  zonalAutoshiftStatus?: ZonalAutoshiftStatus;
}

/**
 * @public
 */
export interface ListManagedResourcesRequest {
  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the
   *    		previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous
   *    		call's <code>NextToken</code> response to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The number of objects that you want to return with this call.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A complex structure for a managed resource in an Amazon Web Services account with information about zonal shifts
 *    		and autoshifts.</p>
 *          <p>A managed resource is a load balancer that has been registered
 *    		with Route 53 ARC by Elastic Load Balancing. You can start a zonal shift in Route 53 ARC for a managed resource to
 *    		temporarily move traffic for the resource away from an Availability Zone in an Amazon Web Services Region.
 *    		You can also configure zonal autoshift for a managed resource.</p>
 *          <note>
 *             <p>At this time, managed resources are Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
 *          </note>
 */
export interface ManagedResourceSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the managed resource.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the managed resource.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Availability Zones that a resource is deployed in.</p>
   */
  availabilityZones: string[] | undefined;

  /**
   * @public
   * <p>A collection of key-value pairs that indicate whether resources are active in Availability Zones or not.
   * 			The key name is the Availability Zone where the resource is deployed. The value is 1 or 0.</p>
   */
  appliedWeights?: Record<string, number>;

  /**
   * @public
   * <p>An array of the zonal shifts for a resource.</p>
   */
  zonalShifts?: ZonalShiftInResource[];

  /**
   * @public
   * <p>An array of the autoshifts that have been completed for a resource.</p>
   */
  autoshifts?: AutoshiftInResource[];

  /**
   * @public
   * <p>The status of autoshift for a resource. When you configure zonal autoshift for a
   * 			resource, you can set the value of the status to <code>ENABLED</code> or <code>DISABLED</code>.</p>
   */
  zonalAutoshiftStatus?: ZonalAutoshiftStatus;

  /**
   * @public
   * <p>This status tracks whether a practice run configuration exists for a resource. When you configure
   * 			a practice run for a resource so that a practice run configuration exists, Route 53 ARC sets this value to
   * 			<code>ENABLED</code>. If a you have not configured a practice run for the resource, or delete a practice
   * 			run configuration, Route 53 ARC sets the value to <code>DISABLED</code>.</p>
   *          <p>Route 53 ARC updates this status; you can't set a practice run status to <code>ENABLED</code> or
   * 			<code>DISABLED</code>.</p>
   */
  practiceRunStatus?: ZonalAutoshiftStatus;
}

/**
 * @public
 */
export interface ListManagedResourcesResponse {
  /**
   * @public
   * <p>The items in the response list.</p>
   */
  items: ManagedResourceSummary[] | undefined;

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the
   *    		previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous
   *    		call's <code>NextToken</code> response to request the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListZonalShiftsRequest {
  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the
   *    		previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous
   *    		call's <code>NextToken</code> response to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A status for a zonal shift.</p>
   *          <p>The <code>Status</code> for a zonal shift can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b>: The zonal shift has been started and active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EXPIRED</b>: The zonal shift has expired (the expiry time was exceeded).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELED</b>: The zonal shift was canceled.</p>
   *             </li>
   *          </ul>
   */
  status?: ZonalShiftStatus;

  /**
   * @public
   * <p>The number of objects that you want to return with this call.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The identifier for the resource that you want to list zonal shifts for.
   * 			The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   */
  resourceIdentifier?: string;
}

/**
 * @public
 * <p>Lists information about zonal shifts in Amazon Route 53 Application Recovery Controller, including zonal shifts that you start yourself and zonal shifts that Route 53 ARC starts
 *    		on your behalf for practice runs with zonal autoshift.</p>
 *          <p>Zonal shifts are temporary, including customer-started zonal shifts and the zonal autoshift practice run zonal shifts that
 *    		Route 53 ARC starts weekly, on your behalf. A zonal shift that a customer starts can be active for up to three days (72 hours). A
 *    		practice run zonal shift has a 30 minute duration.</p>
 */
export interface ZonalShiftSummary {
  /**
   * @public
   * <p>The identifier of a zonal shift.</p>
   */
  zonalShiftId: string | undefined;

  /**
   * @public
   * <p>The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   *          <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The Availability Zone that traffic is moved away from for a resource when you start a zonal shift.
   *    		Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the Amazon Web Services Region.</p>
   */
  awayFrom: string | undefined;

  /**
   * @public
   * <p>The expiry time (expiration time) for a customer-started zonal shift. A zonal shift is temporary and must be set to expire when you start the zonal shift.
   *    		You can initially set a zonal shift to expire in a maximum of three days (72 hours). However, you can update a zonal shift
   *    		to set a new expiration at any time. </p>
   *          <p>When you start a zonal shift, you specify how long you want it to be active, which Route 53 ARC converts
   *    		to an expiry time (expiration time). You can cancel a zonal shift when you're ready to restore traffic to the Availability Zone, or
   *    		just wait for it to expire. Or you can update the zonal shift to specify another length of time to expire in.</p>
   */
  expiryTime: Date | undefined;

  /**
   * @public
   * <p>The time (UTC) when the zonal shift starts.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>A status for a zonal shift.</p>
   *          <p>The <code>Status</code> for a zonal shift can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ACTIVE:</b> The zonal shift has been started and active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EXPIRED:</b> The zonal shift has expired (the expiry time was exceeded).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELED:</b> The zonal shift was canceled.</p>
   *             </li>
   *          </ul>
   */
  status: ZonalShiftStatus | undefined;

  /**
   * @public
   * <p>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment
   *    		history is maintained. That is, a new comment overwrites any existing comment string.</p>
   */
  comment: string | undefined;

  /**
   * @public
   * <p>The outcome, or end state, of a practice run. The following values can be returned:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PENDING:</b> Outcome value when the practice run is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SUCCEEDED:</b> Outcome value when the outcome alarm specified for
   * 				the practice run configuration does not go into an <code>ALARM</code> state during the practice run, and the practice run
   * 				was not interrupted before it completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>INTERRUPTED:</b> Outcome value when the practice run did not run for the
   * 				expected 30 minutes or there was another problem with the practice run that created an inconclusive outcome.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED:</b> Outcome value when the outcome alarm specified for
   * 				the practice run configuration goes into an <code>ALARM</code> state during the practice run, and the practice run
   * 				was not interrupted before it completed.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about practice run outcomes, see
   * 			<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.configure.html">
   * 				Considerations when you configure zonal autoshift</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   */
  practiceRunOutcome?: PracticeRunOutcome;
}

/**
 * @public
 */
export interface ListZonalShiftsResponse {
  /**
   * @public
   * <p>The items in the response list.</p>
   */
  items?: ZonalShiftSummary[];

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the
   *    		previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous
   *    		call's <code>NextToken</code> response to request the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateZonalAutoshiftConfigurationRequest {
  /**
   * @public
   * <p>The identifier for the resource that you want to update the zonal autoshift
   * 			configuration for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The zonal autoshift status for the resource that you want to update the zonal
   * 			autoshift configuration for.</p>
   */
  zonalAutoshiftStatus: ZonalAutoshiftStatus | undefined;
}

/**
 * @public
 */
export interface UpdateZonalAutoshiftConfigurationResponse {
  /**
   * @public
   * <p>The identifier for the resource that you updated the zonal autoshift
   * 			configuration for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The zonal autoshift status for the resource that you updated the zonal
   * 			autoshift configuration for.</p>
   */
  zonalAutoshiftStatus: ZonalAutoshiftStatus | undefined;
}

/**
 * @public
 */
export interface UpdatePracticeRunConfigurationRequest {
  /**
   * @public
   * <p>The identifier for the resource that you want to update the practice
   * 			run configuration for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * @public
   * <p>Add, change, or remove windows of days and times for when you can, optionally,
   * 			block Route 53 ARC from starting a practice run for a resource.</p>
   *          <p>The format for blocked windows is: DAY:HH:SS-DAY:HH:SS. Keep in mind, when you specify dates,
   * 			that dates and times for practice runs are in UTC. Also, be aware of potential time adjustments
   * 			that might be required for daylight saving time differences. Separate multiple blocked windows
   * 			with spaces.</p>
   *          <p>For example, say you run business report summaries three days a week. For
   * 			this scenario, you might set the following recurring days and times as blocked windows,
   * 			for example: <code>MON-20:30-21:30 WED-20:30-21:30
   * 				FRI-20:30-21:30</code>.</p>
   */
  blockedWindows?: string[];

  /**
   * @public
   * <p>Add, change, or remove blocked dates for a practice run in zonal autoshift.</p>
   *          <p>Optionally, you can block practice runs for specific calendar dates.
   * 			The format for blocked dates is: YYYY-MM-DD. Keep in mind, when you specify dates,
   * 			that dates and times for practice runs are in UTC. Separate multiple blocked
   * 			dates with spaces.</p>
   *          <p>For example, if you have an application update scheduled to launch on May 1, 2024, and
   * 			you don't want practice runs to shift traffic away at that time, you could set a blocked date
   * 			for <code>2024-05-01</code>.</p>
   */
  blockedDates?: string[];

  /**
   * @public
   * <p>Add, change, or remove the Amazon CloudWatch alarm that you optionally
   * 			specify as the blocking alarm for practice runs.</p>
   */
  blockingAlarms?: ControlCondition[];

  /**
   * @public
   * <p>Specify a new the Amazon CloudWatch alarm as the outcome alarm for practice runs.</p>
   */
  outcomeAlarms?: ControlCondition[];
}

/**
 * @public
 */
export interface UpdatePracticeRunConfigurationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you updated the practice
   * 			run for.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the resource that you updated the practice
   * 			run for. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The zonal autoshift status for the resource that you updated the practice
   * 		run for.</p>
   */
  zonalAutoshiftStatus: ZonalAutoshiftStatus | undefined;

  /**
   * @public
   * <p>The practice run configuration that was updated.</p>
   */
  practiceRunConfiguration: PracticeRunConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateZonalShiftRequest {
  /**
   * @public
   * <p>The identifier of a zonal shift.</p>
   */
  zonalShiftId: string | undefined;

  /**
   * @public
   * <p>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment
   *    		history is maintained. A new comment overwrites any existing comment string.</p>
   */
  comment?: string;

  /**
   * @public
   * <p>The length of time that you want a zonal shift to be active, which Route 53 ARC converts to an expiry time (expiration time).
   *    		Zonal shifts are temporary. You can set a zonal shift to be active initially for up to three days (72 hours).</p>
   *          <p>If you want to still keep traffic away from an Availability Zone, you can update the
   *    		zonal shift and set a new expiration. You can also cancel a zonal shift, before it expires, for example, if you're ready to
   *    		restore traffic to the Availability Zone.</p>
   *          <p>To set a length of time for a zonal shift to be active, specify a whole number, and then one of the following, with no space:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>A lowercase letter m:</b> To specify that the value is in minutes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>A lowercase letter h:</b> To specify that the value is in hours.</p>
   *             </li>
   *          </ul>
   *          <p>For example: <code>20h</code> means the zonal shift expires in 20 hours. <code>120m</code> means the zonal shift expires in 120 minutes (2 hours).</p>
   */
  expiresIn?: string;
}

/**
 * @public
 */
export interface StartZonalShiftRequest {
  /**
   * @public
   * <p>The identifier for the resource to shift away traffic for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   *          <p>At this time, supported resources are Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The Availability Zone that traffic is moved away from for a resource when you start a zonal shift.
   *    		Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the Amazon Web Services Region.</p>
   */
  awayFrom: string | undefined;

  /**
   * @public
   * <p>The length of time that you want a zonal shift to be active, which Route 53 ARC converts to an expiry time (expiration time).
   * 		Zonal shifts are temporary. You can set a zonal shift to be active initially for up to three days (72 hours).</p>
   *          <p>If you want to still keep traffic away from an Availability Zone, you can update the
   * 		zonal shift and set a new expiration. You can also cancel a zonal shift, before it expires, for example, if you're ready to
   * 		restore traffic to the Availability Zone.</p>
   *          <p>To set a length of time for a zonal shift to be active, specify a whole number, and then one of the following, with no space:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>A lowercase letter m:</b> To specify that the value is in minutes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>A lowercase letter h:</b> To specify that the value is in hours.</p>
   *             </li>
   *          </ul>
   *          <p>For example: <code>20h</code> means the zonal shift expires in 20 hours. <code>120m</code> means the zonal shift expires in 120 minutes (2 hours).</p>
   */
  expiresIn: string | undefined;

  /**
   * @public
   * <p>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment
   *    		history is maintained. A new comment overwrites any existing comment string.</p>
   */
  comment: string | undefined;
}
