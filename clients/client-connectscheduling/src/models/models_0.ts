// smithy-typescript generated code
import type {
  ApprovalType,
  DurationUnit,
  RuleFailureAction,
  TimeOffStatus,
  TimeOffValidationCode,
  TimeOffValidationSeverity,
} from "./enums";

/**
 * <p>Information about the identity that performed an action on a time off request: a Connect Customer user or an IAM or AWS STS identity. Exactly one member is set.</p>
 * @public
 */
export type ActorInfo =
  | ActorInfo.AWSIdentityArnMember
  | ActorInfo.ConnectUserArnMember
  | ActorInfo.$UnknownMember;

/**
 * @public
 */
export namespace ActorInfo {
  /**
   * <p>The ARN of the Connect Customer user who performed the action.</p>
   * @public
   */
  export interface ConnectUserArnMember {
    ConnectUserArn: string;
    AWSIdentityArn?: never;
    $unknown?: never;
  }

  /**
   * <p>The IAM or AWS STS ARN of the identity that performed the action. Present when that identity is not a Connect Customer user.</p>
   * @public
   */
  export interface AWSIdentityArnMember {
    ConnectUserArn?: never;
    AWSIdentityArn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ConnectUserArn?: never;
    AWSIdentityArn?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ConnectUserArn: (value: string) => T;
    AWSIdentityArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The request for <code>ApproveTimeOff</code>.</p>
 * @public
 */
export interface ApproveTimeOffRequest {
  /**
   * <p>The identifier of the Connect Customer instance. This can be the ID or the ARN of the instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user who the time off request belongs to. This can be the ID or the ARN of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The unique identifier of the time off request to approve. If the time off request doesn't belong to <code>UserId</code>, the operation returns <code>ResourceNotFoundException</code>.</p>
   * @public
   */
  TimeOffId: string | undefined;

  /**
   * <p>A description recorded with the approval. <code>GetTimeOff</code> doesn't return it.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Controls what happens when a configured rule fails. <code>REJECT</code>, the default, records an <code>ERROR</code> and leaves the request <code>REJECTED</code>. <code>OVERRIDE</code> records a <code>WARNING</code> and approves the request, like the <i>Override time off rules</i> option in the Connect Customer admin website. <code>OVERRIDE</code> never waives <code>CONFLICTING_TIME_OFF_REQUEST</code>.</p>
   * @public
   */
  RuleFailureAction?: RuleFailureAction | undefined;
}

/**
 * <p>The response for <code>ApproveTimeOff</code>.</p>
 * @public
 */
export interface ApproveTimeOffResponse {}

/**
 * <p>An input field that failed validation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The path to the field that failed validation, using JSON pointer-style dotted notation for nested members.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A message describing why the field failed validation.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>The request for <code>CancelTimeOff</code>.</p>
 * @public
 */
export interface CancelTimeOffRequest {
  /**
   * <p>The identifier of the Connect Customer instance. This can be the ID or the ARN of the instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user who the time off request belongs to. This can be the ID or the ARN of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The unique identifier of the time off request to cancel. If the time off request doesn't belong to <code>UserId</code>, the operation returns <code>ResourceNotFoundException</code>.</p>
   * @public
   */
  TimeOffId: string | undefined;

  /**
   * <p>A description recorded with the cancellation. It replaces the description of the time off request. If you omit it, the request's description is removed.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>The response for <code>CancelTimeOff</code>.</p>
 * @public
 */
export interface CancelTimeOffResponse {}

/**
 * <p>The request for <code>CreateTimeOff</code>.</p>
 * @public
 */
export interface CreateTimeOffRequest {
  /**
   * <p>The identifier of the Connect Customer instance. This can be the ID or the ARN of the instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user who the time off request is for. This can be the ID or the ARN of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the shift activity that defines the type of time off being requested. This can be the ID or the ARN of the shift activity. It must be a time off activity. Activities that aren't set as <i>Requestable</i> are accepted.</p>
   * @public
   */
  ShiftActivityId: string | undefined;

  /**
   * <p>The start of the time off window, inclusive. It must be no earlier than one year before the current date. Connect Customer stores the value as sent, to the millisecond.</p>
   * @public
   */
  StartAt: Date | undefined;

  /**
   * <p>The end of the time off window, exclusive. It must be after <code>StartAt</code> and no later than 24 months after the current date. Connect Customer stores the value as sent, to the millisecond.</p>
   * @public
   */
  EndAt: Date | undefined;

  /**
   * <p>A description recorded on the time off request. If you omit it, the request has no description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Controls who approves the request. <code>AWAIT_APPROVAL</code> waits for an <code>ApproveTimeOff</code> or <code>RejectTimeOff</code> call. <code>AUTOMATIC</code> has Connect Customer decide the request. For details, see <code>CreateTimeOff</code>.</p>
   * @public
   */
  ApprovalType: ApprovalType | undefined;

  /**
   * <p>Controls what happens when a configured rule fails. <code>REJECT</code>, the default, records an <code>ERROR</code> and ends the request <code>REJECTED</code>, unless the whole window is in the past. <code>OVERRIDE</code> records a <code>WARNING</code> and ends the request <code>APPROVED</code>, like the <i>Override time off rules</i> option in the Connect Customer admin website. <code>OVERRIDE</code> requires <code>AUTOMATIC</code>. With <code>AWAIT_APPROVAL</code>, <code>OVERRIDE</code> fails with <code>ValidationException</code>. Set it on <code>ApproveTimeOff</code> instead. <code>OVERRIDE</code> never waives <code>CONFLICTING_TIME_OFF_REQUEST</code>.</p>
   * @public
   */
  RuleFailureAction?: RuleFailureAction | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If this token matches a previous request, Connect Customer returns the result of that request and doesn't create another time off request. If you don't provide a token, the AWS SDK populates this field. If you reuse a client token with a different request body, the request fails with <code>ValidationException</code>. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>The response for <code>CreateTimeOff</code>.</p>
 * @public
 */
export interface CreateTimeOffResponse {
  /**
   * <p>The identifier of the time off request.</p>
   * @public
   */
  TimeOffId: string | undefined;
}

/**
 * <p>The request for <code>GetTimeOff</code>.</p>
 * @public
 */
export interface GetTimeOffRequest {
  /**
   * <p>The identifier of the Connect Customer instance. This can be the ID or the ARN of the instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user who the time off request belongs to. This can be the ID or the ARN of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the time off request. If the time off request doesn't belong to <code>UserId</code>, the operation returns <code>ResourceNotFoundException</code>.</p>
   * @public
   */
  TimeOffId: string | undefined;
}

/**
 * <p>A warning or failure produced while processing the time off request.</p>
 * @public
 */
export interface TimeOffValidationResult {
  /**
   * <p>The severity of the validation result. <code>WARNING</code> is a breach of the configured rules that is not enough to reject the request, either because of the rules configuration or because the caller sent <code>RuleFailureAction</code> <code>OVERRIDE</code>. <code>ERROR</code> is a reason the request was rejected.</p>
   * @public
   */
  Severity: TimeOffValidationSeverity | undefined;

  /**
   * <p>The specific reason for the validation result. New values may be added, so treat an unrecognized value as a generic failure of the reported severity.</p> <ul> <li> <p> <code>INSUFFICIENT_USER_TIME_OFF_BALANCE</code>: the user's time off balance for the activity is less than the time this request deducts. Connect Customer deducts only working time in the window. For details, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/upload-timeoff-balance.html#how-system-calculates-time-off-deductions">How the system calculates time off deductions</a> in the <i>Connect Customer Administrator Guide</i>.</p> </li> <li> <p> <code>INSUFFICIENT_GROUP_TIME_OFF_ALLOWANCE</code>: the time off allowance of the user's forecast group or demand group for the activity is too low for this request.</p> </li> <li> <p> <code>INSUFFICIENT_STAFFING_GROUP_TIME_OFF_ALLOWANCE</code>: the daily time off allowance of the user's staffing group for the activity is too low for this request.</p> </li> <li> <p> <code>CONFLICTING_TIME_OFF_REQUEST</code>: the request overlaps another time off request for the user that is <code>APPROVED</code> or being approved. Requests in <code>AWAITING_APPROVAL</code> don't count. For <code>CreateTimeOff</code> with <code>AUTOMATIC</code>, overlapping overtime and voluntary time off also count.</p> </li> </ul>
   * @public
   */
  Code: TimeOffValidationCode | undefined;
}

/**
 * <p>The response for <code>GetTimeOff</code>.</p>
 * @public
 */
export interface GetTimeOffResponse {
  /**
   * <p>The identifier of the time off request.</p>
   * @public
   */
  TimeOffId: string | undefined;

  /**
   * <p>The identifier of the user the time off is for.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the shift activity for the time off request.</p>
   * @public
   */
  ShiftActivityId: string | undefined;

  /**
   * <p>The start of the time off window, inclusive, as sent to <code>CreateTimeOff</code>.</p>
   * @public
   */
  StartAt: Date | undefined;

  /**
   * <p>The end of the time off window, exclusive, as sent to <code>CreateTimeOff</code>.</p>
   * @public
   */
  EndAt: Date | undefined;

  /**
   * <p>The status of the time off request.</p> <ul> <li> <p> <code>PENDING</code>: Connect Customer is processing a change to the request, which then changes to another status. An edit in the Connect Customer admin website can also make a request <code>PENDING</code>, so an <code>APPROVED</code> request can become <code>PENDING</code> and then end <code>APPROVED</code> or <code>REJECTED</code>.</p> </li> <li> <p> <code>AWAITING_APPROVAL</code>: the request is waiting for an <code>ApproveTimeOff</code> or <code>RejectTimeOff</code> call.</p> </li> </ul>
   * @public
   */
  Status: TimeOffStatus | undefined;

  /**
   * <p>The description of the time off request. <code>CreateTimeOff</code> sets it, and <code>CancelTimeOff</code> replaces or removes it. An edit in the Connect Customer admin website can also change it. <code>GetTimeOff</code> doesn't return descriptions sent with <code>ApproveTimeOff</code> or <code>RejectTimeOff</code>.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Warnings or failures produced while processing the time off request.</p>
   * @public
   */
  ValidationResults?: TimeOffValidationResult[] | undefined;

  /**
   * <p>The identity that created the request. Immutable for the life of the request.</p>
   * @public
   */
  CreatedBy: ActorInfo | undefined;

  /**
   * <p>The timestamp when the time off request was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The identity that made the most recent <code>ApproveTimeOff</code>, <code>RejectTimeOff</code>, or <code>CancelTimeOff</code> call on the request, or took the same action in the Connect Customer admin website. Absent until one of those actions is taken, including after Connect Customer decides an <code>AUTOMATIC</code> request. <code>UpdatedAt</code> also changes when a <code>PENDING</code> request changes to another status and for other edits, which don't set <code>UpdatedBy</code>.</p>
   * @public
   */
  UpdatedBy?: ActorInfo | undefined;

  /**
   * <p>The timestamp when the time off request was last modified.</p>
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * <p>A length of time, expressed as a value and the unit it is counted in.</p>
 * @public
 */
export interface Duration {
  /**
   * <p>The number of units of time. You can use a negative value to report an overdrawn balance. The value must be within 876,000 hours (100 years) of zero: at most 52,560,000 <code>MINUTES</code>, 876,000 <code>HOURS</code>, or 36,500 <code>DAYS</code>.</p>
   * @public
   */
  Value: number | undefined;

  /**
   * <p>The unit the value is counted in.</p>
   * @public
   */
  Unit: DurationUnit | undefined;
}

/**
 * <p>The request for <code>PutTimeOffBalance</code>.</p>
 * @public
 */
export interface PutTimeOffBalanceRequest {
  /**
   * <p>The identifier of the Connect Customer instance. This can be the ID or the ARN of the instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user whose balance is being updated. This can be the ID or the ARN of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the shift activity that the balance applies to. This can be the ID or the ARN of the shift activity.</p>
   * @public
   */
  ShiftActivityId: string | undefined;

  /**
   * <p>The new time off balance for the user and activity. It replaces the existing balance.</p>
   * @public
   */
  Balance: Duration | undefined;
}

/**
 * <p>The response for <code>PutTimeOffBalance</code>.</p>
 * @public
 */
export interface PutTimeOffBalanceResponse {}

/**
 * <p>The request for <code>RejectTimeOff</code>.</p>
 * @public
 */
export interface RejectTimeOffRequest {
  /**
   * <p>The identifier of the Connect Customer instance. This can be the ID or the ARN of the instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user who the time off request belongs to. This can be the ID or the ARN of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The unique identifier of the time off request to reject. If the time off request doesn't belong to <code>UserId</code>, the operation returns <code>ResourceNotFoundException</code>.</p>
   * @public
   */
  TimeOffId: string | undefined;

  /**
   * <p>A description recorded with the rejection, such as the reason. <code>GetTimeOff</code> doesn't return it.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>The response for <code>RejectTimeOff</code>.</p>
 * @public
 */
export interface RejectTimeOffResponse {}
