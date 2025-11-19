// smithy-typescript generated code
import {
  AppliedStatus,
  AutoshiftAppliedStatus,
  AutoshiftExecutionStatus,
  AutoshiftObserverNotificationStatus,
  ControlConditionType,
  PracticeRunOutcome,
  ShiftType,
  ZonalAutoshiftStatus,
  ZonalShiftStatus,
} from "./enums";

/**
 * @public
 */
export interface ListAutoshiftsRequest {
  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The status of the autoshift.</p>
   * @public
   */
  status?: AutoshiftExecutionStatus | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Information about an autoshift. Amazon Web Services starts an autoshift to temporarily move traffic for a resource away from an Availability Zone in an Amazon Web Services Region when Amazon Web Services determines that there's an issue in the Availability Zone that could potentially affect customers. You can configure zonal autoshift in ARC for managed resources in your Amazon Web Services account in a Region. Supported Amazon Web Services resources are automatically registered with ARC.</p> <p>Autoshifts are temporary. When the Availability Zone recovers, Amazon Web Services ends the autoshift, and traffic for the resource is no longer directed to the other Availability Zones in the Region.</p> <p>You can stop an autoshift for a resource by disabling zonal autoshift.</p>
 * @public
 */
export interface AutoshiftSummary {
  /**
   * <p>The Availability Zone (for example, <code>use1-az1</code>) that traffic is shifted away from for a resource when Amazon Web Services starts an autoshift. Until the autoshift ends, traffic for the resource is instead directed to other Availability Zones in the Amazon Web Services Region. An autoshift can end for a resource, for example, when Amazon Web Services ends the autoshift for the Availability Zone or when you disable zonal autoshift for the resource.</p>
   * @public
   */
  awayFrom: string | undefined;

  /**
   * <p>The time (in UTC) when the autoshift ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The time (in UTC) when the autoshift started.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The status for an autoshift. </p>
   * @public
   */
  status: AutoshiftExecutionStatus | undefined;
}

/**
 * @public
 */
export interface ListAutoshiftsResponse {
  /**
   * <p>The items in the response list.</p>
   * @public
   */
  items?: AutoshiftSummary[] | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A complex structure that lists an autoshift that is currently active for a managed resource and information about the autoshift.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.how-it-works.html">How zonal autoshift and practice runs work</a> in the Amazon Application Recovery Controller Developer Guide.</p>
 * @public
 */
export interface AutoshiftInResource {
  /**
   * <p>The <code>appliedStatus</code> field specifies which application traffic shift is in effect for a resource when there is more than one active traffic shift. There can be more than one application traffic shift in progress at the same time - that is, practice run zonal shifts, customer-initiated zonal shifts, or an autoshift. The <code>appliedStatus</code> field for a shift that is in progress for a resource can have one of two values: <code>APPLIED</code> or <code>NOT_APPLIED</code>. The zonal shift or autoshift that is currently in effect for the resource has an <code>appliedStatus</code> set to <code>APPLIED</code>.</p> <p>The overall principle for precedence is that zonal shifts that you start as a customer take precedence autoshifts, which take precedence over practice runs. That is, customer-initiated zonal shifts &gt; autoshifts &gt; practice run zonal shifts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.how-it-works.html">How zonal autoshift and practice runs work</a> in the Amazon Application Recovery Controller Developer Guide.</p>
   * @public
   */
  appliedStatus: AutoshiftAppliedStatus | undefined;

  /**
   * <p>The Availability Zone (for example, <code>use1-az1</code>) that traffic is shifted away from for a resource, when Amazon Web Services starts an autoshift. Until the autoshift ends, traffic for the resource is instead directed to other Availability Zones in the Amazon Web Services Region. An autoshift can end for a resource, for example, when Amazon Web Services ends the autoshift for the Availability Zone or when you disable zonal autoshift for the resource.</p>
   * @public
   */
  awayFrom: string | undefined;

  /**
   * <p>The time (UTC) when the autoshift started.</p>
   * @public
   */
  startTime: Date | undefined;
}

/**
 * @public
 */
export interface GetAutoshiftObserverNotificationStatusRequest {}

/**
 * @public
 */
export interface GetAutoshiftObserverNotificationStatusResponse {
  /**
   * <p>The status of autoshift observer notification. If the status is <code>ENABLED</code>, ARC includes all autoshift events when you use the Amazon EventBridge pattern <code>Autoshift In Progress</code>. When the status is <code>DISABLED</code>, ARC includes only autoshift events for autoshifts when one or more of your resources is included in the autoshift. </p>
   * @public
   */
  status: AutoshiftObserverNotificationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAutoshiftObserverNotificationStatusRequest {
  /**
   * <p>The status to set for autoshift observer notification. If the status is <code>ENABLED</code>, ARC includes all autoshift events when you use the Amazon EventBridge pattern <code>Autoshift In Progress</code>. When the status is <code>DISABLED</code>, ARC includes only autoshift events for autoshifts when one or more of your resources is included in the autoshift. </p>
   * @public
   */
  status: AutoshiftObserverNotificationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAutoshiftObserverNotificationStatusResponse {
  /**
   * <p>The status for autoshift observer notification.</p>
   * @public
   */
  status: AutoshiftObserverNotificationStatus | undefined;
}

/**
 * <p>A control condition is an alarm that you specify for a practice run. When you configure practice runs with zonal autoshift for a resource, you specify Amazon CloudWatch alarms, which you create in CloudWatch to use with the practice run. The alarms that you specify are an <i>outcome alarm</i>, to monitor application health during practice runs and, optionally, a <i>blocking alarm</i>, to block practice runs from starting or to interrupt a practice run in progress.</p> <p>Control condition alarms do not apply for autoshifts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.considerations.html"> Considerations when you configure zonal autoshift</a> in the Amazon Application Recovery Controller Developer Guide.</p>
 * @public
 */
export interface ControlCondition {
  /**
   * <p>The type of alarm specified for a practice run. You can only specify Amazon CloudWatch alarms for practice runs, so the only valid value is <code>CLOUDWATCH</code>.</p>
   * @public
   */
  type: ControlConditionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for an Amazon CloudWatch alarm that you specify as a control condition for a practice run.</p>
   * @public
   */
  alarmIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CancelPracticeRunRequest {
  /**
   * <p>The identifier of a practice run zonal shift in Amazon Application Recovery Controller that you want to cancel.</p>
   * @public
   */
  zonalShiftId: string | undefined;
}

/**
 * @public
 */
export interface CancelPracticeRunResponse {
  /**
   * <p>The identifier of the practice run zonal shift in Amazon Application Recovery Controller that was canceled.</p>
   * @public
   */
  zonalShiftId: string | undefined;

  /**
   * <p>The identifier for the resource that you canceled a practice run zonal shift for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The Availability Zone (for example, <code>use1-az1</code>) that traffic was moved away from for a resource that you specified for the practice run.</p>
   * @public
   */
  awayFrom: string | undefined;

  /**
   * <p>The expiry time (expiration time) for an on-demand practice run zonal shift is 30 minutes from the time when you start the practice run, unless you cancel it before that time. However, be aware that the <code>expiryTime</code> field for practice run zonal shifts always has a value of 1 minute. </p>
   * @public
   */
  expiryTime: Date | undefined;

  /**
   * <p>The time (UTC) when the zonal shift starts.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>A status for the practice run that you canceled (expected status is <b>CANCELED</b>).</p> <p>The <code>Status</code> for a practice run zonal shift can have one of the following values:</p>
   * @public
   */
  status: ZonalShiftStatus | undefined;

  /**
   * <p>The initial comment that you entered about the practice run. Be aware that this comment can be overwritten by Amazon Web Services if the automatic check for balanced capacity fails. For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.how-it-works.capacity-check.html"> Capacity checks for practice runs</a> in the Amazon Application Recovery Controller Developer Guide. </p>
   * @public
   */
  comment: string | undefined;
}

/**
 * @public
 */
export interface CancelZonalShiftRequest {
  /**
   * <p>The internally-generated identifier of a zonal shift.</p>
   * @public
   */
  zonalShiftId: string | undefined;
}

/**
 * @public
 */
export interface ZonalShift {
  /**
   * <p>The identifier of a zonal shift.</p>
   * @public
   */
  zonalShiftId: string | undefined;

  /**
   * <p>The identifier for the resource that Amazon Web Services shifts traffic for. The identifier is the Amazon Resource Name (ARN) for the resource.</p> <p>Amazon Application Recovery Controller currently supports enabling the following resources for zonal shift and zonal autoshift:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.ec2-auto-scaling-groups.html">Amazon EC2 Auto Scaling groups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.eks.html">Amazon Elastic Kubernetes Service</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.app-load-balancers.html">Application Load Balancer</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.network-load-balancers.html">Network Load Balancer</a> </p> </li> </ul>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The Availability Zone (for example, <code>use1-az1</code>) that traffic is moved away from for a resource when you start a zonal shift. Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the Amazon Web Services Region.</p>
   * @public
   */
  awayFrom: string | undefined;

  /**
   * <p>The expiry time (expiration time) for a customer-initiated zonal shift. A zonal shift is temporary and must be set to expire when you start the zonal shift. You can initially set a zonal shift to expire in a maximum of three days (72 hours). However, you can update a zonal shift to set a new expiration at any time. </p> <p>When you start a zonal shift, you specify how long you want it to be active, which ARC converts to an expiry time (expiration time). You can cancel a zonal shift when you're ready to restore traffic to the Availability Zone, or just wait for it to expire. Or you can update the zonal shift to specify another length of time to expire in.</p>
   * @public
   */
  expiryTime: Date | undefined;

  /**
   * <p>The time (UTC) when the zonal shift starts.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>A status for a zonal shift.</p> <p>The <code>Status</code> for a zonal shift can have one of the following values:</p> <ul> <li> <p> <b>ACTIVE:</b> The zonal shift has been started and is active.</p> </li> <li> <p> <b>EXPIRED:</b> The zonal shift has expired (the expiry time was exceeded).</p> </li> <li> <p> <b>CANCELED:</b> The zonal shift was canceled.</p> </li> </ul>
   * @public
   */
  status: ZonalShiftStatus | undefined;

  /**
   * <p>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. A new comment overwrites any existing comment string.</p>
   * @public
   */
  comment: string | undefined;
}

/**
 * @public
 */
export interface CreatePracticeRunConfigurationRequest {
  /**
   * <p>The identifier of the resource that Amazon Web Services shifts traffic for with a practice run zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource.</p> <p>Amazon Application Recovery Controller currently supports enabling the following resources for zonal shift and zonal autoshift:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.ec2-auto-scaling-groups.html">Amazon EC2 Auto Scaling groups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.eks.html">Amazon Elastic Kubernetes Service</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.app-load-balancers.html">Application Load Balancer</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.network-load-balancers.html">Network Load Balancer</a> </p> </li> </ul>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>Optionally, you can block ARC from starting practice runs for specific windows of days and times. </p> <p>The format for blocked windows is: DAY:HH:SS-DAY:HH:SS. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Also, be aware of potential time adjustments that might be required for daylight saving time differences. Separate multiple blocked windows with spaces.</p> <p>For example, say you run business report summaries three days a week. For this scenario, you could set the following recurring days and times as blocked windows, for example: <code>Mon:00:00-Mon:10:00 Wed-20:30-Wed:21:30 Fri-20:30-Fri:21:30</code>.</p> <important> <p>The <code>blockedWindows</code> have to start and end on the same day. Windows that span multiple days aren't supported.</p> </important>
   * @public
   */
  blockedWindows?: string[] | undefined;

  /**
   * <p>Optionally, you can block ARC from starting practice runs for a resource on specific calendar dates.</p> <p>The format for blocked dates is: YYYY-MM-DD. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Separate multiple blocked dates with spaces.</p> <p>For example, if you have an application update scheduled to launch on May 1, 2024, and you don't want practice runs to shift traffic away at that time, you could set a blocked date for <code>2024-05-01</code>.</p>
   * @public
   */
  blockedDates?: string[] | undefined;

  /**
   * <p> <i>Blocking alarms</i> for practice runs are optional alarms that you can specify that block practice runs when one or more of the alarms is in an <code>ALARM</code> state.</p>
   * @public
   */
  blockingAlarms?: ControlCondition[] | undefined;

  /**
   * <p>Optionally, you can allow ARC to start practice runs for specific windows of days and times. </p> <p>The format for allowed windows is: DAY:HH:SS-DAY:HH:SS. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Also, be aware of potential time adjustments that might be required for daylight saving time differences. Separate multiple allowed windows with spaces.</p> <p>For example, say you want to allow practice runs only on Wednesdays and Fridays from noon to 5 p.m. For this scenario, you could set the following recurring days and times as allowed windows, for example: <code>Wed-12:00-Wed:17:00 Fri-12:00-Fri:17:00</code>.</p> <important> <p>The <code>allowedWindows</code> have to start and end on the same day. Windows that span multiple days aren't supported.</p> </important>
   * @public
   */
  allowedWindows?: string[] | undefined;

  /**
   * <p> <i>Outcome alarms</i> for practice runs are alarms that you specify that end a practice run when one or more of the alarms is in an <code>ALARM</code> state.</p> <p>Configure one or more of these alarms to monitor the health of your application when traffic is shifted away from an Availability Zone during each practice run. You should configure these alarms to go into an <code>ALARM</code> state if you want to stop a zonal shift, to let traffic for the resource return to the original Availability Zone.</p>
   * @public
   */
  outcomeAlarms: ControlCondition[] | undefined;
}

/**
 * <p>A practice run configuration for a resource includes the Amazon CloudWatch alarms that you've specified for a practice run, as well as any blocked dates or blocked windows for the practice run. When a resource has a practice run configuration, ARC shifts traffic for the resource weekly for practice runs.</p> <p>Practice runs are required for zonal autoshift. The zonal shifts that ARC starts for practice runs help you to ensure that shifting away traffic from an Availability Zone during an autoshift is safe for your application.</p> <p>You can update or delete a practice run configuration. Before you delete a practice run configuration, you must disable zonal autoshift for the resource. A practice run configuration is required when zonal autoshift is enabled.</p>
 * @public
 */
export interface PracticeRunConfiguration {
  /**
   * <p> <i>Blocking alarms</i> for practice runs are optional alarms that you can specify that block practice runs when one or more of the alarms is in an <code>ALARM</code> state.</p>
   * @public
   */
  blockingAlarms?: ControlCondition[] | undefined;

  /**
   * <p> <i>Outcome alarms</i> for practice runs are alarms that you specify that end a practice run when one or more of the alarms is in an <code>ALARM</code> state.</p>
   * @public
   */
  outcomeAlarms: ControlCondition[] | undefined;

  /**
   * <p>An array of one or more windows of days and times that you can block ARC from starting practice runs for a resource.</p> <p>Specify the blocked windows in UTC, using the format <code>DAY:HH:MM-DAY:HH:MM</code>, separated by spaces. For example, <code>MON:18:30-MON:19:30 TUE:18:30-TUE:19:30</code>.</p> <p>The <code>blockedWindows</code> have to start and end on the same day. Windows that span multiple days aren't supported.</p>
   * @public
   */
  blockedWindows?: string[] | undefined;

  /**
   * <p>An array of one or more windows of days and times that you can allow ARC to start practice runs for a resource.</p> <p>For example, say you want to allow practice runs only on Wednesdays and Fridays from noon to 5 p.m. For this scenario, you could set the following recurring days and times as allowed windows, for example: <code>Wed-12:00-Wed:17:00 Fri-12:00-Fri:17:00</code>.</p> <p>The <code>allowedWindows</code> have to start and end on the same day. Windows that span multiple days aren't supported.</p>
   * @public
   */
  allowedWindows?: string[] | undefined;

  /**
   * <p>An array of one or more dates that you can specify when Amazon Web Services does not start practice runs for a resource.</p> <p>Specify blocked dates, in UTC, in the format <code>YYYY-MM-DD</code>, separated by spaces. </p>
   * @public
   */
  blockedDates?: string[] | undefined;
}

/**
 * @public
 */
export interface CreatePracticeRunConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you configured the practice run for.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the resource that you configured the practice run for. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status for zonal autoshift for a resource. When you specify <code>ENABLED</code> for the autoshift status, Amazon Web Services shifts traffic away from shifts away application resource traffic from an Availability Zone, on your behalf, when internal telemetry indicates that there is an Availability Zone impairment that could potentially impact customers.</p> <p>When you enable zonal autoshift, you must also configure practice runs for the resource.</p>
   * @public
   */
  zonalAutoshiftStatus: ZonalAutoshiftStatus | undefined;

  /**
   * <p>A practice run configuration for a resource. Configurations include the outcome alarm that you specify for practice runs, and, optionally, a blocking alarm and blocking dates and windows.</p>
   * @public
   */
  practiceRunConfiguration: PracticeRunConfiguration | undefined;
}

/**
 * @public
 */
export interface DeletePracticeRunConfigurationRequest {
  /**
   * <p>The identifier for the resource that you want to delete the practice run configuration for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  resourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeletePracticeRunConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you deleted the practice run for.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the resource that you deleted the practice run for. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of zonal autoshift for the resource.</p>
   * @public
   */
  zonalAutoshiftStatus: ZonalAutoshiftStatus | undefined;
}

/**
 * @public
 */
export interface GetManagedResourceRequest {
  /**
   * <p>The identifier for the resource that Amazon Web Services shifts traffic for. The identifier is the Amazon Resource Name (ARN) for the resource.</p> <p>Amazon Application Recovery Controller currently supports enabling the following resources for zonal shift and zonal autoshift:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.ec2-auto-scaling-groups.html">Amazon EC2 Auto Scaling groups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.eks.html">Amazon Elastic Kubernetes Service</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.app-load-balancers.html">Application Load Balancer</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.network-load-balancers.html">Network Load Balancer</a> </p> </li> </ul>
   * @public
   */
  resourceIdentifier: string | undefined;
}

/**
 * <p>A complex structure that lists the zonal shifts for a managed resource and their statuses for the resource.</p>
 * @public
 */
export interface ZonalShiftInResource {
  /**
   * <p>The <code>appliedStatus</code> field specifies which application traffic shift is in effect for a resource when there is more than one active traffic shift. There can be more than one application traffic shift in progress at the same time - that is, practice run zonal shifts, customer-initiated zonal shifts, or an autoshift. The <code>appliedStatus</code> field for a shift that is in progress for a resource can have one of two values: <code>APPLIED</code> or <code>NOT_APPLIED</code>. The zonal shift or autoshift that is currently in effect for the resource has an <code>appliedStatus</code> set to <code>APPLIED</code>.</p> <p>The overall principle for precedence is that zonal shifts that you start as a customer take precedence autoshifts, which take precedence over practice runs. That is, customer-initiated zonal shifts &gt; autoshifts &gt; practice run zonal shifts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.how-it-works.html">How zonal autoshift and practice runs work</a> in the Amazon Application Recovery Controller Developer Guide.</p>
   * @public
   */
  appliedStatus: AppliedStatus | undefined;

  /**
   * <p>The identifier of a zonal shift.</p>
   * @public
   */
  zonalShiftId: string | undefined;

  /**
   * <p>The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource.</p> <p>Amazon Application Recovery Controller currently supports enabling the following resources for zonal shift and zonal autoshift:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.ec2-auto-scaling-groups.html">Amazon EC2 Auto Scaling groups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.eks.html">Amazon Elastic Kubernetes Service</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.app-load-balancers.html">Application Load Balancer</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.network-load-balancers.html">Network Load Balancer</a> </p> </li> </ul>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The Availability Zone (for example, <code>use1-az1</code>) that traffic is moved away from for a resource when you start a zonal shift. Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the Amazon Web Services Region.</p>
   * @public
   */
  awayFrom: string | undefined;

  /**
   * <p>The expiry time (expiration time) for a customer-initiated zonal shift. A zonal shift is temporary and must be set to expire when you start the zonal shift. You can initially set a zonal shift to expire in a maximum of three days (72 hours). However, you can update a zonal shift to set a new expiration at any time. </p> <p>When you start a zonal shift, you specify how long you want it to be active, which ARC converts to an expiry time (expiration time). You can cancel a zonal shift when you're ready to restore traffic to the Availability Zone, or just wait for it to expire. Or you can update the zonal shift to specify another length of time to expire in.</p>
   * @public
   */
  expiryTime: Date | undefined;

  /**
   * <p>The time (UTC) when the zonal shift starts.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>A comment that you enter for a customer-initiated zonal shift. Only the latest comment is retained; no comment history is maintained. That is, a new comment overwrites any existing comment string.</p>
   * @public
   */
  comment: string | undefined;

  /**
   * <p>Defines the zonal shift type.</p>
   * @public
   */
  shiftType?: ShiftType | undefined;

  /**
   * <p>The outcome, or end state, returned for a practice run. The following values can be returned:</p> <ul> <li> <p> <b>PENDING:</b> Outcome value when a practice run is in progress.</p> </li> <li> <p> <b>SUCCEEDED:</b> Outcome value when the outcome alarm specified for the practice run configuration does not go into an <code>ALARM</code> state during the practice run, and the practice run was not interrupted before it completed the expected 30 minute zonal shift.</p> </li> <li> <p> <b>INTERRUPTED:</b> Outcome value when the practice run was stopped before the expected 30 minute zonal shift duration, or there was another problem with the practice run that created an inconclusive outcome.</p> </li> <li> <p> <b>FAILED:</b> Outcome value when the outcome alarm specified for the practice run configuration goes into an <code>ALARM</code> state during the practice run, and the practice run was not interrupted before it completed.</p> </li> <li> <p> <b>CAPACITY_CHECK_FAILED:</b> The check for balanced capacity across Availability Zones for your load balancing and Auto Scaling group resources failed.</p> </li> </ul> <p>For more information about practice run outcomes, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.configure.html"> Considerations when you configure zonal autoshift</a> in the Amazon Application Recovery Controller Developer Guide.</p>
   * @public
   */
  practiceRunOutcome?: PracticeRunOutcome | undefined;
}

/**
 * @public
 */
export interface GetManagedResourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A collection of key-value pairs that indicate whether resources are active in Availability Zones or not. The key name is the Availability Zone where the resource is deployed. The value is 1 or 0.</p>
   * @public
   */
  appliedWeights: Record<string, number> | undefined;

  /**
   * <p>The zonal shifts that are currently active for a resource. </p>
   * @public
   */
  zonalShifts: ZonalShiftInResource[] | undefined;

  /**
   * <p>An array of the autoshifts that are active for the resource.</p>
   * @public
   */
  autoshifts?: AutoshiftInResource[] | undefined;

  /**
   * <p>The practice run configuration for zonal autoshift that's associated with the resource.</p>
   * @public
   */
  practiceRunConfiguration?: PracticeRunConfiguration | undefined;

  /**
   * <p>The status for zonal autoshift for a resource. When the autoshift status is <code>ENABLED</code>, Amazon Web Services shifts traffic for a resource away from an Availability Zone, on your behalf, when Amazon Web Services determines that there's an issue in the Availability Zone that could potentially affect customers.</p>
   * @public
   */
  zonalAutoshiftStatus?: ZonalAutoshiftStatus | undefined;
}

/**
 * @public
 */
export interface ListManagedResourcesRequest {
  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A complex structure for a managed resource in an Amazon Web Services account with information about zonal shifts and autoshifts.</p> <p>You can start a zonal shift in ARC for a managed resource to temporarily move traffic for the resource away from an Availability Zone in an Amazon Web Services Region. You can also configure zonal autoshift for a managed resource.</p> <note> <p>At this time, managed resources are Amazon EC2 Auto Scaling groups, Amazon Elastic Kubernetes Service, Network Load Balancers, and Application Load Balancer.</p> </note>
 * @public
 */
export interface ManagedResourceSummary {
  /**
   * <p>The Amazon Resource Name (ARN) for the managed resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the managed resource.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Availability Zones that a resource is deployed in.</p>
   * @public
   */
  availabilityZones: string[] | undefined;

  /**
   * <p>A collection of key-value pairs that indicate whether resources are active in Availability Zones or not. The key name is the Availability Zone where the resource is deployed. The value is 1 or 0.</p>
   * @public
   */
  appliedWeights?: Record<string, number> | undefined;

  /**
   * <p>An array of the zonal shifts for a resource.</p>
   * @public
   */
  zonalShifts?: ZonalShiftInResource[] | undefined;

  /**
   * <p>An array of the autoshifts that have been completed for a resource.</p>
   * @public
   */
  autoshifts?: AutoshiftInResource[] | undefined;

  /**
   * <p>The status of autoshift for a resource. When you configure zonal autoshift for a resource, you can set the value of the status to <code>ENABLED</code> or <code>DISABLED</code>.</p>
   * @public
   */
  zonalAutoshiftStatus?: ZonalAutoshiftStatus | undefined;

  /**
   * <p>This status tracks whether a practice run configuration exists for a resource. When you configure a practice run for a resource so that a practice run configuration exists, ARC sets this value to <code>ENABLED</code>. If a you have not configured a practice run for the resource, or delete a practice run configuration, ARC sets the value to <code>DISABLED</code>.</p> <p>ARC updates this status; you can't set a practice run status to <code>ENABLED</code> or <code>DISABLED</code>.</p>
   * @public
   */
  practiceRunStatus?: ZonalAutoshiftStatus | undefined;
}

/**
 * @public
 */
export interface ListManagedResourcesResponse {
  /**
   * <p>The items in the response list.</p>
   * @public
   */
  items: ManagedResourceSummary[] | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListZonalShiftsRequest {
  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A status for a zonal shift.</p> <p>The <code>Status</code> for a zonal shift can have one of the following values:</p> <ul> <li> <p> <b>ACTIVE</b>: The zonal shift has been started and is active.</p> </li> <li> <p> <b>EXPIRED</b>: The zonal shift has expired (the expiry time was exceeded).</p> </li> <li> <p> <b>CANCELED</b>: The zonal shift was canceled.</p> </li> </ul>
   * @public
   */
  status?: ZonalShiftStatus | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier for the resource that you want to list zonal shifts for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  resourceIdentifier?: string | undefined;
}

/**
 * <p>Lists information about zonal shifts in Amazon Application Recovery Controller, including zonal shifts that you start yourself and zonal shifts that ARC starts on your behalf for practice runs with zonal autoshift.</p> <p>Zonal shifts are temporary, including customer-initiated zonal shifts and the zonal autoshift practice run zonal shifts that ARC starts weekly, on your behalf. A zonal shift that a customer starts can be active for up to three days (72 hours). A practice run zonal shift has a 30 minute duration.</p>
 * @public
 */
export interface ZonalShiftSummary {
  /**
   * <p>The identifier of a zonal shift.</p>
   * @public
   */
  zonalShiftId: string | undefined;

  /**
   * <p>The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource.</p> <p>Amazon Application Recovery Controller currently supports enabling the following resources for zonal shift and zonal autoshift:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.ec2-auto-scaling-groups.html">Amazon EC2 Auto Scaling groups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.eks.html">Amazon Elastic Kubernetes Service</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.app-load-balancers.html">Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.network-load-balancers.html">Network Load Balancers</a> </p> </li> </ul>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The Availability Zone (for example, <code>use1-az1</code>) that traffic is moved away from for a resource when you start a zonal shift. Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the Amazon Web Services Region.</p>
   * @public
   */
  awayFrom: string | undefined;

  /**
   * <p>The expiry time (expiration time) for a customer-initiated zonal shift. A zonal shift is temporary and must be set to expire when you start the zonal shift. You can initially set a zonal shift to expire in a maximum of three days (72 hours). However, you can update a zonal shift to set a new expiration at any time. </p> <p>When you start a zonal shift, you specify how long you want it to be active, which ARC converts to an expiry time (expiration time). You can cancel a zonal shift when you're ready to restore traffic to the Availability Zone, or just wait for it to expire. Or you can update the zonal shift to specify another length of time to expire in.</p>
   * @public
   */
  expiryTime: Date | undefined;

  /**
   * <p>The time (UTC) when the zonal shift starts.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>A status for a zonal shift.</p> <p>The <code>Status</code> for a zonal shift can have one of the following values:</p> <ul> <li> <p> <b>ACTIVE:</b> The zonal shift has been started and is active.</p> </li> <li> <p> <b>EXPIRED:</b> The zonal shift has expired (the expiry time was exceeded).</p> </li> <li> <p> <b>CANCELED:</b> The zonal shift was canceled.</p> </li> </ul>
   * @public
   */
  status: ZonalShiftStatus | undefined;

  /**
   * <p>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. That is, a new comment overwrites any existing comment string.</p>
   * @public
   */
  comment: string | undefined;

  /**
   * <p>Defines the zonal shift type.</p>
   * @public
   */
  shiftType?: ShiftType | undefined;

  /**
   * <p>The outcome, or end state, of a practice run. The following values can be returned:</p> <ul> <li> <p> <b>PENDING:</b> Outcome value when the practice run is in progress.</p> </li> <li> <p> <b>SUCCEEDED:</b> Outcome value when the outcome alarm specified for the practice run configuration does not go into an <code>ALARM</code> state during the practice run, and the practice run was not interrupted before it completed.</p> </li> <li> <p> <b>INTERRUPTED:</b> Outcome value when the practice run did not run for the expected 30 minutes or there was another problem with the practice run that created an inconclusive outcome.</p> </li> <li> <p> <b>FAILED:</b> Outcome value when the outcome alarm specified for the practice run configuration goes into an <code>ALARM</code> state during the practice run, and the practice run was not interrupted before it completed.</p> </li> <li> <p> <b>CAPACITY_CHECK_FAILED:</b> The check for balanced capacity across Availability Zones for your load balancing and Auto Scaling group resources failed.</p> </li> </ul> <p>For more information about practice run outcomes, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.configure.html"> Considerations when you configure zonal autoshift</a> in the Amazon Application Recovery Controller Developer Guide.</p>
   * @public
   */
  practiceRunOutcome?: PracticeRunOutcome | undefined;
}

/**
 * @public
 */
export interface ListZonalShiftsResponse {
  /**
   * <p>The items in the response list.</p>
   * @public
   */
  items?: ZonalShiftSummary[] | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateZonalAutoshiftConfigurationRequest {
  /**
   * <p>The identifier for the resource that you want to update the zonal autoshift configuration for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The zonal autoshift status for the resource that you want to update the zonal autoshift configuration for. Choose <code>ENABLED</code> to authorize Amazon Web Services to shift away resource traffic for an application from an Availability Zone during events, on your behalf, to help reduce time to recovery.</p>
   * @public
   */
  zonalAutoshiftStatus: ZonalAutoshiftStatus | undefined;
}

/**
 * @public
 */
export interface UpdateZonalAutoshiftConfigurationResponse {
  /**
   * <p>The identifier for the resource that you updated the zonal autoshift configuration for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The updated zonal autoshift status for the resource.</p>
   * @public
   */
  zonalAutoshiftStatus: ZonalAutoshiftStatus | undefined;
}

/**
 * @public
 */
export interface UpdatePracticeRunConfigurationRequest {
  /**
   * <p>The identifier for the resource that you want to update the practice run configuration for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>Add, change, or remove windows of days and times for when you can, optionally, block ARC from starting a practice run for a resource.</p> <p>The format for blocked windows is: DAY:HH:SS-DAY:HH:SS. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Also, be aware of potential time adjustments that might be required for daylight saving time differences. Separate multiple blocked windows with spaces.</p> <p>For example, say you run business report summaries three days a week. For this scenario, you might set the following recurring days and times as blocked windows, for example: <code>MON-20:30-21:30 WED-20:30-21:30 FRI-20:30-21:30</code>.</p>
   * @public
   */
  blockedWindows?: string[] | undefined;

  /**
   * <p>Add, change, or remove blocked dates for a practice run in zonal autoshift.</p> <p>Optionally, you can block practice runs for specific calendar dates. The format for blocked dates is: YYYY-MM-DD. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Separate multiple blocked dates with spaces.</p> <p>For example, if you have an application update scheduled to launch on May 1, 2024, and you don't want practice runs to shift traffic away at that time, you could set a blocked date for <code>2024-05-01</code>.</p>
   * @public
   */
  blockedDates?: string[] | undefined;

  /**
   * <p>Add, change, or remove the Amazon CloudWatch alarms that you optionally specify as the blocking alarms for practice runs.</p>
   * @public
   */
  blockingAlarms?: ControlCondition[] | undefined;

  /**
   * <p>Add, change, or remove windows of days and times for when you can, optionally, allow ARC to start a practice run for a resource.</p> <p>The format for allowed windows is: DAY:HH:SS-DAY:HH:SS. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Also, be aware of potential time adjustments that might be required for daylight saving time differences. Separate multiple allowed windows with spaces.</p> <p>For example, say you want to allow practice runs only on Wednesdays and Fridays from noon to 5 p.m. For this scenario, you could set the following recurring days and times as allowed windows, for example: <code>Wed-12:00-Wed:17:00 Fri-12:00-Fri:17:00</code>.</p> <important> <p>The <code>allowedWindows</code> have to start and end on the same day. Windows that span multiple days aren't supported.</p> </important>
   * @public
   */
  allowedWindows?: string[] | undefined;

  /**
   * <p>Specify one or more Amazon CloudWatch alarms as the outcome alarms for practice runs.</p>
   * @public
   */
  outcomeAlarms?: ControlCondition[] | undefined;
}

/**
 * @public
 */
export interface UpdatePracticeRunConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you updated the practice run for.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the resource that you updated the practice run for. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The zonal autoshift status for the resource that you updated the practice run for.</p>
   * @public
   */
  zonalAutoshiftStatus: ZonalAutoshiftStatus | undefined;

  /**
   * <p>The practice run configuration that was updated.</p>
   * @public
   */
  practiceRunConfiguration: PracticeRunConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateZonalShiftRequest {
  /**
   * <p>The identifier of a zonal shift.</p>
   * @public
   */
  zonalShiftId: string | undefined;

  /**
   * <p>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. A new comment overwrites any existing comment string.</p>
   * @public
   */
  comment?: string | undefined;

  /**
   * <p>The length of time that you want a zonal shift to be active, which ARC converts to an expiry time (expiration time). Zonal shifts are temporary. You can set a zonal shift to be active initially for up to three days (72 hours).</p> <p>If you want to still keep traffic away from an Availability Zone, you can update the zonal shift and set a new expiration. You can also cancel a zonal shift, before it expires, for example, if you're ready to restore traffic to the Availability Zone.</p> <p>To set a length of time for a zonal shift to be active, specify a whole number, and then one of the following, with no space:</p> <ul> <li> <p> <b>A lowercase letter m:</b> To specify that the value is in minutes.</p> </li> <li> <p> <b>A lowercase letter h:</b> To specify that the value is in hours.</p> </li> </ul> <p>For example: <code>20h</code> means the zonal shift expires in 20 hours. <code>120m</code> means the zonal shift expires in 120 minutes (2 hours).</p>
   * @public
   */
  expiresIn?: string | undefined;
}

/**
 * @public
 */
export interface StartPracticeRunRequest {
  /**
   * <p>The identifier for the resource that you want to start a practice run zonal shift for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The Availability Zone (for example, <code>use1-az1</code>) that traffic is shifted away from for the resource that you specify for the practice run.</p>
   * @public
   */
  awayFrom: string | undefined;

  /**
   * <p>The initial comment that you enter about the practice run. Be aware that this comment can be overwritten by Amazon Web Services if the automatic check for balanced capacity fails. For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.how-it-works.capacity-check.html"> Capacity checks for practice runs</a> in the Amazon Application Recovery Controller Developer Guide. </p>
   * @public
   */
  comment: string | undefined;
}

/**
 * @public
 */
export interface StartPracticeRunResponse {
  /**
   * <p>The identifier of a practice run zonal shift.</p>
   * @public
   */
  zonalShiftId: string | undefined;

  /**
   * <p>The identifier for the resource that you want to shift traffic for. The identifier is the Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The Availability Zone (for example, <code>use1-az1</code>) that traffic is shifted away from for the resource that you specify for the practice run.</p>
   * @public
   */
  awayFrom: string | undefined;

  /**
   * <p>The expiry time (expiration time) for an on-demand practice run zonal shift is 30 minutes from the time when you start the practice run, unless you cancel it before that time. However, be aware that the <code>expiryTime</code> field for practice run zonal shifts always has a value of 1 minute. </p>
   * @public
   */
  expiryTime: Date | undefined;

  /**
   * <p>The time (UTC) when the zonal shift starts.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>A status for the practice run (expected status is <b>ACTIVE</b>).</p>
   * @public
   */
  status: ZonalShiftStatus | undefined;

  /**
   * <p>The initial comment that you enter about the practice run. Be aware that this comment can be overwritten by Amazon Web Services if the automatic check for balanced capacity fails. For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.how-it-works.capacity-check.html"> Capacity checks for practice runs</a> in the Amazon Application Recovery Controller Developer Guide. </p>
   * @public
   */
  comment: string | undefined;
}

/**
 * @public
 */
export interface StartZonalShiftRequest {
  /**
   * <p>The identifier for the resource that Amazon Web Services shifts traffic for. The identifier is the Amazon Resource Name (ARN) for the resource.</p> <p>Amazon Application Recovery Controller currently supports enabling the following resources for zonal shift and zonal autoshift:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.ec2-auto-scaling-groups.html">Amazon EC2 Auto Scaling groups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.eks.html">Amazon Elastic Kubernetes Service</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.app-load-balancers.html">Application Load Balancer</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.network-load-balancers.html">Network Load Balancer</a> </p> </li> </ul>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The Availability Zone (for example, <code>use1-az1</code>) that traffic is moved away from for a resource when you start a zonal shift. Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the Amazon Web Services Region.</p>
   * @public
   */
  awayFrom: string | undefined;

  /**
   * <p>The length of time that you want a zonal shift to be active, which ARC converts to an expiry time (expiration time). Zonal shifts are temporary. You can set a zonal shift to be active initially for up to three days (72 hours).</p> <p>If you want to still keep traffic away from an Availability Zone, you can update the zonal shift and set a new expiration. You can also cancel a zonal shift, before it expires, for example, if you're ready to restore traffic to the Availability Zone.</p> <p>To set a length of time for a zonal shift to be active, specify a whole number, and then one of the following, with no space:</p> <ul> <li> <p> <b>A lowercase letter m:</b> To specify that the value is in minutes.</p> </li> <li> <p> <b>A lowercase letter h:</b> To specify that the value is in hours.</p> </li> </ul> <p>For example: <code>20h</code> means the zonal shift expires in 20 hours. <code>120m</code> means the zonal shift expires in 120 minutes (2 hours).</p>
   * @public
   */
  expiresIn: string | undefined;

  /**
   * <p>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. A new comment overwrites any existing comment string.</p>
   * @public
   */
  comment: string | undefined;
}
