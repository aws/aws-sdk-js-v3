import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface ActivateEventSourceRequest {
  /**
   * <p>The name of the partner event source to activate.</p>
   */
  Name: string | undefined;
}

export namespace ActivateEventSourceRequest {
  export const filterSensitiveLog = (obj: ActivateEventSourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception occurs due to unexpected causes.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  message?: string;
}

export namespace InternalException {
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified state is not a valid state for an event source.</p>
 */
export interface InvalidStateException extends __SmithyException, $MetadataBearer {
  name: "InvalidStateException";
  $fault: "client";
  message?: string;
}

export namespace InvalidStateException {
  export const filterSensitiveLog = (obj: InvalidStateException): any => ({
    ...obj,
  });
}

/**
 * <p>The operation you are attempting is not available in this region.</p>
 */
export interface OperationDisabledException extends __SmithyException, $MetadataBearer {
  name: "OperationDisabledException";
  $fault: "client";
  message?: string;
}

export namespace OperationDisabledException {
  export const filterSensitiveLog = (obj: OperationDisabledException): any => ({
    ...obj,
  });
}

/**
 * <p>An entity that you specified does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export enum ArchiveState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>An <code>Archive</code> object that contains details about an archive.</p>
 */
export interface Archive {
  /**
   * <p>The name of the archive.</p>
   */
  ArchiveName?: string;

  /**
   * <p>The ARN of the event bus associated with the archive. Only events from this event bus
   *             are sent to the archive.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>The current state of the archive.</p>
   */
  State?: ArchiveState | string;

  /**
   * <p>A description for the reason that the archive is in the current state.</p>
   */
  StateReason?: string;

  /**
   * <p>The number of days to retain events in the archive before they are deleted.</p>
   */
  RetentionDays?: number;

  /**
   * <p>The size of the archive, in bytes.</p>
   */
  SizeBytes?: number;

  /**
   * <p>The number of events in the archive.</p>
   */
  EventCount?: number;

  /**
   * <p>The time stamp for the time that the archive was created.</p>
   */
  CreationTime?: Date;
}

export namespace Archive {
  export const filterSensitiveLog = (obj: Archive): any => ({
    ...obj,
  });
}

export enum AssignPublicIp {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface CancelReplayRequest {
  /**
   * <p>The name of the replay to cancel.</p>
   */
  ReplayName: string | undefined;
}

export namespace CancelReplayRequest {
  export const filterSensitiveLog = (obj: CancelReplayRequest): any => ({
    ...obj,
  });
}

export enum ReplayState {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
}

export interface CancelReplayResponse {
  /**
   * <p>The ARN of the replay to cancel.</p>
   */
  ReplayArn?: string;

  /**
   * <p>The current state of the replay.</p>
   */
  State?: ReplayState | string;

  /**
   * <p>The reason that the replay is in the current state.</p>
   */
  StateReason?: string;
}

export namespace CancelReplayResponse {
  export const filterSensitiveLog = (obj: CancelReplayResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An error occurred because a replay can be canceled only when the state is Running or
 *             Starting.</p>
 */
export interface IllegalStatusException extends __SmithyException, $MetadataBearer {
  name: "IllegalStatusException";
  $fault: "client";
  message?: string;
}

export namespace IllegalStatusException {
  export const filterSensitiveLog = (obj: IllegalStatusException): any => ({
    ...obj,
  });
}

export interface CreateArchiveRequest {
  /**
   * <p>The name for the archive to create.</p>
   */
  ArchiveName: string | undefined;

  /**
   * <p>The ARN of the event source associated with the archive.</p>
   */
  EventSourceArn: string | undefined;

  /**
   * <p>A description for the archive.</p>
   */
  Description?: string;

  /**
   * <p>An event pattern to use to filter events sent to the archive.</p>
   */
  EventPattern?: string;

  /**
   * <p>The number of days to retain events for. Default value is 0. If set to 0, events are
   *             retained indefinitely</p>
   */
  RetentionDays?: number;
}

export namespace CreateArchiveRequest {
  export const filterSensitiveLog = (obj: CreateArchiveRequest): any => ({
    ...obj,
  });
}

export interface CreateArchiveResponse {
  /**
   * <p>The ARN of the archive that was created.</p>
   */
  ArchiveArn?: string;

  /**
   * <p>The state of the archive that was created.</p>
   */
  State?: ArchiveState | string;

  /**
   * <p>The reason that the archive is in the state.</p>
   */
  StateReason?: string;

  /**
   * <p>The time at which the archive was created.</p>
   */
  CreationTime?: Date;
}

export namespace CreateArchiveResponse {
  export const filterSensitiveLog = (obj: CreateArchiveResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The event pattern is not valid.</p>
 */
export interface InvalidEventPatternException extends __SmithyException, $MetadataBearer {
  name: "InvalidEventPatternException";
  $fault: "client";
  message?: string;
}

export namespace InvalidEventPatternException {
  export const filterSensitiveLog = (obj: InvalidEventPatternException): any => ({
    ...obj,
  });
}

/**
 * <p>The request failed because it attempted to create resource beyond the allowed service
 *             quota.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource you are trying to create already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>A key-value pair associated with an AWS resource. In EventBridge, rules and event
 *             buses support tagging.</p>
 */
export interface Tag {
  /**
   * <p>A string you can use to assign a value. The combination of tag keys and values can
   *             help you organize and categorize your resources.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value for the specified tag key.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateEventBusRequest {
  /**
   * <p>The name of the new event bus. </p>
   *         <p>Event bus names cannot contain the / character. You can't use the name
   *                 <code>default</code> for a custom event bus, as this name is already used for your
   *             account's default event bus.</p>
   *         <p>If this is a partner event bus, the name must exactly match the name of the partner
   *             event source that this event bus is matched to.</p>
   */
  Name: string | undefined;

  /**
   * <p>If you are creating a partner event bus, this specifies the partner event source that
   *             the new event bus will be matched with.</p>
   */
  EventSourceName?: string;

  /**
   * <p>Tags to associate with the event bus.</p>
   */
  Tags?: Tag[];
}

export namespace CreateEventBusRequest {
  export const filterSensitiveLog = (obj: CreateEventBusRequest): any => ({
    ...obj,
  });
}

export interface CreateEventBusResponse {
  /**
   * <p>The ARN of the new event bus.</p>
   */
  EventBusArn?: string;
}

export namespace CreateEventBusResponse {
  export const filterSensitiveLog = (obj: CreateEventBusResponse): any => ({
    ...obj,
  });
}

export interface CreatePartnerEventSourceRequest {
  /**
   * <p>The name of the partner event source. This name must be unique and must be in the
   *             format
   *                     <code>
   *                <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i>
   *             </code>.
   *             The AWS account that wants to use this partner event source must create a partner event
   *             bus with a name that matches the name of the partner event source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The AWS account ID that is permitted to create a matching partner event bus for this
   *             partner event source.</p>
   */
  Account: string | undefined;
}

export namespace CreatePartnerEventSourceRequest {
  export const filterSensitiveLog = (obj: CreatePartnerEventSourceRequest): any => ({
    ...obj,
  });
}

export interface CreatePartnerEventSourceResponse {
  /**
   * <p>The ARN of the partner event source.</p>
   */
  EventSourceArn?: string;
}

export namespace CreatePartnerEventSourceResponse {
  export const filterSensitiveLog = (obj: CreatePartnerEventSourceResponse): any => ({
    ...obj,
  });
}

export interface DeactivateEventSourceRequest {
  /**
   * <p>The name of the partner event source to deactivate.</p>
   */
  Name: string | undefined;
}

export namespace DeactivateEventSourceRequest {
  export const filterSensitiveLog = (obj: DeactivateEventSourceRequest): any => ({
    ...obj,
  });
}

export interface DeleteArchiveRequest {
  /**
   * <p>The name of the archive to delete.</p>
   */
  ArchiveName: string | undefined;
}

export namespace DeleteArchiveRequest {
  export const filterSensitiveLog = (obj: DeleteArchiveRequest): any => ({
    ...obj,
  });
}

export interface DeleteArchiveResponse {}

export namespace DeleteArchiveResponse {
  export const filterSensitiveLog = (obj: DeleteArchiveResponse): any => ({
    ...obj,
  });
}

export interface DeleteEventBusRequest {
  /**
   * <p>The name of the event bus to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteEventBusRequest {
  export const filterSensitiveLog = (obj: DeleteEventBusRequest): any => ({
    ...obj,
  });
}

export interface DeletePartnerEventSourceRequest {
  /**
   * <p>The name of the event source to delete.</p>
   */
  Name: string | undefined;

  /**
   * <p>The AWS account ID of the AWS customer that the event source was created for.</p>
   */
  Account: string | undefined;
}

export namespace DeletePartnerEventSourceRequest {
  export const filterSensitiveLog = (obj: DeletePartnerEventSourceRequest): any => ({
    ...obj,
  });
}

export interface DeleteRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is
   *             used.</p>
   */
  EventBusName?: string;

  /**
   * <p>If this is a managed rule, created by an AWS service on your behalf, you must specify
   *                 <code>Force</code> as <code>True</code> to delete the rule. This parameter is
   *             ignored for rules that are not managed rules. You can check whether a rule is a managed
   *             rule by using <code>DescribeRule</code> or <code>ListRules</code> and checking the
   *                 <code>ManagedBy</code> field of the response.</p>
   */
  Force?: boolean;
}

export namespace DeleteRuleRequest {
  export const filterSensitiveLog = (obj: DeleteRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>This rule was created by an AWS service on behalf of your account. It is managed by
 *             that service. If you see this error in response to <code>DeleteRule</code> or
 *                 <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those
 *             calls to delete the rule or remove targets from the rule. You cannot modify these
 *             managed rules by using <code>DisableRule</code>, <code>EnableRule</code>,
 *                 <code>PutTargets</code>, <code>PutRule</code>, <code>TagResource</code>, or
 *                 <code>UntagResource</code>. </p>
 */
export interface ManagedRuleException extends __SmithyException, $MetadataBearer {
  name: "ManagedRuleException";
  $fault: "client";
  message?: string;
}

export namespace ManagedRuleException {
  export const filterSensitiveLog = (obj: ManagedRuleException): any => ({
    ...obj,
  });
}

export interface DescribeArchiveRequest {
  /**
   * <p>The name of the archive to retrieve.</p>
   */
  ArchiveName: string | undefined;
}

export namespace DescribeArchiveRequest {
  export const filterSensitiveLog = (obj: DescribeArchiveRequest): any => ({
    ...obj,
  });
}

export interface DescribeArchiveResponse {
  /**
   * <p>The ARN of the archive.</p>
   */
  ArchiveArn?: string;

  /**
   * <p>The name of the archive.</p>
   */
  ArchiveName?: string;

  /**
   * <p>The ARN of the event source associated with the archive.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>The description of the archive.</p>
   */
  Description?: string;

  /**
   * <p>The event pattern used to filter events sent to the archive.</p>
   */
  EventPattern?: string;

  /**
   * <p>The state of the archive.</p>
   */
  State?: ArchiveState | string;

  /**
   * <p>The reason that the archive is in the state.</p>
   */
  StateReason?: string;

  /**
   * <p>The number of days to retain events for in the archive.</p>
   */
  RetentionDays?: number;

  /**
   * <p>The size of the archive in bytes.</p>
   */
  SizeBytes?: number;

  /**
   * <p>The number of events in the archive.</p>
   */
  EventCount?: number;

  /**
   * <p>The time at which the archive was created.</p>
   */
  CreationTime?: Date;
}

export namespace DescribeArchiveResponse {
  export const filterSensitiveLog = (obj: DescribeArchiveResponse): any => ({
    ...obj,
  });
}

export interface DescribeEventBusRequest {
  /**
   * <p>The name or ARN of the event bus to show details for. If you omit this, the default event bus
   *             is displayed.</p>
   */
  Name?: string;
}

export namespace DescribeEventBusRequest {
  export const filterSensitiveLog = (obj: DescribeEventBusRequest): any => ({
    ...obj,
  });
}

export interface DescribeEventBusResponse {
  /**
   * <p>The name of the event bus. Currently, this is always
   *             <code>default</code>.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the account permitted to write events to the
   *             current account.</p>
   */
  Arn?: string;

  /**
   * <p>The policy that enables the external account to send events to your
   *             account.</p>
   */
  Policy?: string;
}

export namespace DescribeEventBusResponse {
  export const filterSensitiveLog = (obj: DescribeEventBusResponse): any => ({
    ...obj,
  });
}

export interface DescribeEventSourceRequest {
  /**
   * <p>The name of the partner event source to display the details of.</p>
   */
  Name: string | undefined;
}

export namespace DescribeEventSourceRequest {
  export const filterSensitiveLog = (obj: DescribeEventSourceRequest): any => ({
    ...obj,
  });
}

export enum EventSourceState {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  PENDING = "PENDING",
}

export interface DescribeEventSourceResponse {
  /**
   * <p>The ARN of the partner event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the SaaS partner that created the event source.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time that the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time that the event source will expire if you do not create a matching
   *             event bus.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>The name of the partner event source.</p>
   */
  Name?: string;

  /**
   * <p>The state of the event source. If it is ACTIVE, you have already created a matching
   *             event bus for this event source, and that event bus is active. If it is PENDING, either
   *             you haven't yet created a matching event bus, or that event bus is deactivated. If it is
   *             DELETED, you have created a matching event bus, but the event source has since been
   *             deleted.</p>
   */
  State?: EventSourceState | string;
}

export namespace DescribeEventSourceResponse {
  export const filterSensitiveLog = (obj: DescribeEventSourceResponse): any => ({
    ...obj,
  });
}

export interface DescribePartnerEventSourceRequest {
  /**
   * <p>The name of the event source to display.</p>
   */
  Name: string | undefined;
}

export namespace DescribePartnerEventSourceRequest {
  export const filterSensitiveLog = (obj: DescribePartnerEventSourceRequest): any => ({
    ...obj,
  });
}

export interface DescribePartnerEventSourceResponse {
  /**
   * <p>The ARN of the event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the event source.</p>
   */
  Name?: string;
}

export namespace DescribePartnerEventSourceResponse {
  export const filterSensitiveLog = (obj: DescribePartnerEventSourceResponse): any => ({
    ...obj,
  });
}

export interface DescribeReplayRequest {
  /**
   * <p>The name of the replay to retrieve.</p>
   */
  ReplayName: string | undefined;
}

export namespace DescribeReplayRequest {
  export const filterSensitiveLog = (obj: DescribeReplayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A <code>ReplayDestination</code> object that contains details about a replay.</p>
 */
export interface ReplayDestination {
  /**
   * <p>The ARN of the event bus to replay event to. You can replay events only to the event
   *             bus specified to create the archive.</p>
   */
  Arn: string | undefined;

  /**
   * <p>A list of ARNs for rules to replay events to.</p>
   */
  FilterArns?: string[];
}

export namespace ReplayDestination {
  export const filterSensitiveLog = (obj: ReplayDestination): any => ({
    ...obj,
  });
}

export interface DescribeReplayResponse {
  /**
   * <p>The name of the replay.</p>
   */
  ReplayName?: string;

  /**
   * <p>The ARN of the replay.</p>
   */
  ReplayArn?: string;

  /**
   * <p>The description of the replay.</p>
   */
  Description?: string;

  /**
   * <p>The current state of the replay.</p>
   */
  State?: ReplayState | string;

  /**
   * <p>The reason that the replay is in the current state.</p>
   */
  StateReason?: string;

  /**
   * <p>The ARN of the archive events were replayed from.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>A <code>ReplayDestination</code> object that contains details about the replay.</p>
   */
  Destination?: ReplayDestination;

  /**
   * <p>The time stamp of the first event that was last replayed from the archive.</p>
   */
  EventStartTime?: Date;

  /**
   * <p>The time stamp for the last event that was replayed from the archive.</p>
   */
  EventEndTime?: Date;

  /**
   * <p>The time that the event was last replayed.</p>
   */
  EventLastReplayedTime?: Date;

  /**
   * <p>A time stamp for the time that the replay started.</p>
   */
  ReplayStartTime?: Date;

  /**
   * <p>A time stamp for the time that the replay stopped.</p>
   */
  ReplayEndTime?: Date;
}

export namespace DescribeReplayResponse {
  export const filterSensitiveLog = (obj: DescribeReplayResponse): any => ({
    ...obj,
  });
}

export interface DescribeRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is
   *             used.</p>
   */
  EventBusName?: string;
}

export namespace DescribeRuleRequest {
  export const filterSensitiveLog = (obj: DescribeRuleRequest): any => ({
    ...obj,
  });
}

export enum RuleState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface DescribeRuleResponse {
  /**
   * <p>The name of the rule.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  Arn?: string;

  /**
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and
   *                 Event Patterns</a> in the <i>Amazon EventBridge User
   *             Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * <p>The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5
   *             minutes)".</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>Specifies whether the rule is enabled or disabled.</p>
   */
  State?: RuleState | string;

  /**
   * <p>The description of the rule.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p>
   */
  RoleArn?: string;

  /**
   * <p>If this is a managed rule, created by an AWS service on your behalf, this field
   *             displays the principal name of the AWS service that created the rule.</p>
   */
  ManagedBy?: string;

  /**
   * <p>The name of the event bus associated with the rule.</p>
   */
  EventBusName?: string;

  /**
   * <p>The account ID of the user that created the rule. If you use <code>PutRule</code>
   *             to put a rule on an event bus in another account, the other account is the owner of the rule, and the rule ARN includes the account ID for that account.
   *             However, the value for <code>CreatedBy</code> is the account ID as the account that created the rule in the other account.</p>
   */
  CreatedBy?: string;
}

export namespace DescribeRuleResponse {
  export const filterSensitiveLog = (obj: DescribeRuleResponse): any => ({
    ...obj,
  });
}

export interface DisableRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is
   *             used.</p>
   */
  EventBusName?: string;
}

export namespace DisableRuleRequest {
  export const filterSensitiveLog = (obj: DisableRuleRequest): any => ({
    ...obj,
  });
}

export interface EnableRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is
   *             used.</p>
   */
  EventBusName?: string;
}

export namespace EnableRuleRequest {
  export const filterSensitiveLog = (obj: EnableRuleRequest): any => ({
    ...obj,
  });
}

export interface ListArchivesRequest {
  /**
   * <p>A name prefix to filter the archives returned. Only archives with name that match the
   *             prefix are returned.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The ARN of the event source associated with the archive.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>The state of the archive.</p>
   */
  State?: ArchiveState | string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;
}

export namespace ListArchivesRequest {
  export const filterSensitiveLog = (obj: ListArchivesRequest): any => ({
    ...obj,
  });
}

export interface ListArchivesResponse {
  /**
   * <p>An array of <code>Archive</code> objects that include details about an archive.</p>
   */
  Archives?: Archive[];

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListArchivesResponse {
  export const filterSensitiveLog = (obj: ListArchivesResponse): any => ({
    ...obj,
  });
}

export interface ListEventBusesRequest {
  /**
   * <p>Specifying this limits the results to only those event buses with names that start
   *             with the specified prefix.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifying this limits the number of results returned by this operation. The operation
   *             also returns a NextToken which you can use in a subsequent operation to retrieve the
   *             next set of results.</p>
   */
  Limit?: number;
}

export namespace ListEventBusesRequest {
  export const filterSensitiveLog = (obj: ListEventBusesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An event bus receives events from a source and routes them to rules associated with
 *             that event bus. Your account's default event bus receives rules from AWS services. A
 *             custom event bus can receive rules from AWS services as well as your custom applications
 *             and services. A partner event bus receives events from an event source created by an
 *             SaaS partner. These events come from the partners services or applications.</p>
 */
export interface EventBus {
  /**
   * <p>The name of the event bus.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of the event bus.</p>
   */
  Arn?: string;

  /**
   * <p>The permissions policy of the event bus, describing which other AWS accounts can write
   *             events to this event bus.</p>
   */
  Policy?: string;
}

export namespace EventBus {
  export const filterSensitiveLog = (obj: EventBus): any => ({
    ...obj,
  });
}

export interface ListEventBusesResponse {
  /**
   * <p>This list of event buses.</p>
   */
  EventBuses?: EventBus[];

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

export namespace ListEventBusesResponse {
  export const filterSensitiveLog = (obj: ListEventBusesResponse): any => ({
    ...obj,
  });
}

export interface ListEventSourcesRequest {
  /**
   * <p>Specifying this limits the results to only those partner event sources with names that
   *             start with the specified prefix.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifying this limits the number of results returned by this operation. The operation
   *             also returns a NextToken which you can use in a subsequent operation to retrieve the
   *             next set of results.</p>
   */
  Limit?: number;
}

export namespace ListEventSourcesRequest {
  export const filterSensitiveLog = (obj: ListEventSourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A partner event source is created by an SaaS partner. If a customer creates a partner
 *             event bus that matches this event source, that AWS account can receive events from the
 *             partner's applications or services.</p>
 */
export interface EventSource {
  /**
   * <p>The ARN of the event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the partner that created the event source.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time that the event source will expire, if the AWS account doesn't create
   *             a matching event bus for it.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>The name of the event source.</p>
   */
  Name?: string;

  /**
   * <p>The state of the event source. If it is ACTIVE, you have already created a matching
   *             event bus for this event source, and that event bus is active. If it is PENDING, either
   *             you haven't yet created a matching event bus, or that event bus is deactivated. If it is
   *             DELETED, you have created a matching event bus, but the event source has since been
   *             deleted.</p>
   */
  State?: EventSourceState | string;
}

export namespace EventSource {
  export const filterSensitiveLog = (obj: EventSource): any => ({
    ...obj,
  });
}

export interface ListEventSourcesResponse {
  /**
   * <p>The list of event sources.</p>
   */
  EventSources?: EventSource[];

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

export namespace ListEventSourcesResponse {
  export const filterSensitiveLog = (obj: ListEventSourcesResponse): any => ({
    ...obj,
  });
}

export interface ListPartnerEventSourceAccountsRequest {
  /**
   * <p>The name of the partner event source to display account information about.</p>
   */
  EventSourceName: string | undefined;

  /**
   * <p>The token returned by a previous call to this operation. Specifying this retrieves the
   *             next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifying this limits the number of results returned by this operation. The operation
   *             also returns a NextToken which you can use in a subsequent operation to retrieve the
   *             next set of results.</p>
   */
  Limit?: number;
}

export namespace ListPartnerEventSourceAccountsRequest {
  export const filterSensitiveLog = (obj: ListPartnerEventSourceAccountsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The AWS account that a partner event source has been offered to.</p>
 */
export interface PartnerEventSourceAccount {
  /**
   * <p>The AWS account ID that the partner event source was offered to.</p>
   */
  Account?: string;

  /**
   * <p>The date and time the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time that the event source will expire, if the AWS account doesn't create
   *             a matching event bus for it.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>The state of the event source. If it is ACTIVE, you have already created a matching
   *             event bus for this event source, and that event bus is active. If it is PENDING, either
   *             you haven't yet created a matching event bus, or that event bus is deactivated. If it is
   *             DELETED, you have created a matching event bus, but the event source has since been
   *             deleted.</p>
   */
  State?: EventSourceState | string;
}

export namespace PartnerEventSourceAccount {
  export const filterSensitiveLog = (obj: PartnerEventSourceAccount): any => ({
    ...obj,
  });
}

export interface ListPartnerEventSourceAccountsResponse {
  /**
   * <p>The list of partner event sources returned by the operation.</p>
   */
  PartnerEventSourceAccounts?: PartnerEventSourceAccount[];

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

export namespace ListPartnerEventSourceAccountsResponse {
  export const filterSensitiveLog = (obj: ListPartnerEventSourceAccountsResponse): any => ({
    ...obj,
  });
}

export interface ListPartnerEventSourcesRequest {
  /**
   * <p>If you specify this, the results are limited to only those partner event sources that
   *             start with the string you specify.</p>
   */
  NamePrefix: string | undefined;

  /**
   * <p>The token returned by a previous call to this operation. Specifying this retrieves the
   *             next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>pecifying this limits the number of results returned by this operation. The operation
   *             also returns a NextToken which you can use in a subsequent operation to retrieve the
   *             next set of results.</p>
   */
  Limit?: number;
}

export namespace ListPartnerEventSourcesRequest {
  export const filterSensitiveLog = (obj: ListPartnerEventSourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A partner event source is created by an SaaS partner. If a customer creates a partner
 *             event bus that matches this event source, that AWS account can receive events from the
 *             partner's applications or services.</p>
 */
export interface PartnerEventSource {
  /**
   * <p>The ARN of the partner event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the partner event source.</p>
   */
  Name?: string;
}

export namespace PartnerEventSource {
  export const filterSensitiveLog = (obj: PartnerEventSource): any => ({
    ...obj,
  });
}

export interface ListPartnerEventSourcesResponse {
  /**
   * <p>The list of partner event sources returned by the operation.</p>
   */
  PartnerEventSources?: PartnerEventSource[];

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

export namespace ListPartnerEventSourcesResponse {
  export const filterSensitiveLog = (obj: ListPartnerEventSourcesResponse): any => ({
    ...obj,
  });
}

export interface ListReplaysRequest {
  /**
   * <p>A name prefix to filter the replays returned. Only replays with name that match the
   *             prefix are returned.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The state of the replay.</p>
   */
  State?: ReplayState | string;

  /**
   * <p>The ARN of the event source associated with the replay.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of replays to retrieve.</p>
   */
  Limit?: number;
}

export namespace ListReplaysRequest {
  export const filterSensitiveLog = (obj: ListReplaysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A <code>Replay</code> object that contains details about a replay.</p>
 */
export interface Replay {
  /**
   * <p>The name of the replay.</p>
   */
  ReplayName?: string;

  /**
   * <p>The ARN of the archive to replay event from.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>The current state of the replay.</p>
   */
  State?: ReplayState | string;

  /**
   * <p>A description of why the replay is in the current state.</p>
   */
  StateReason?: string;

  /**
   * <p>A time stamp for the time to start replaying events. This is determined by the time in
   *             the event as described in <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEventsRequestEntry.html#eventbridge-Type-PutEventsRequestEntry-Time">Time</a>.</p>
   */
  EventStartTime?: Date;

  /**
   * <p>A time stamp for the time to start replaying events. Any event with a creation time
   *             prior to the <code>EventEndTime</code> specified is replayed.</p>
   */
  EventEndTime?: Date;

  /**
   * <p>A time stamp for the time that the last event was replayed.</p>
   */
  EventLastReplayedTime?: Date;

  /**
   * <p>A time stamp for the time that the replay started.</p>
   */
  ReplayStartTime?: Date;

  /**
   * <p>A time stamp for the time that the replay completed.</p>
   */
  ReplayEndTime?: Date;
}

export namespace Replay {
  export const filterSensitiveLog = (obj: Replay): any => ({
    ...obj,
  });
}

export interface ListReplaysResponse {
  /**
   * <p>An array of <code>Replay</code> objects that contain information about the
   *             replay.</p>
   */
  Replays?: Replay[];

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListReplaysResponse {
  export const filterSensitiveLog = (obj: ListReplaysResponse): any => ({
    ...obj,
  });
}

export interface ListRuleNamesByTargetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the target resource.</p>
   */
  TargetArn: string | undefined;

  /**
   * <p>The name or ARN of the event bus to list rules for. If you omit this, the default event bus is
   *             used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;
}

export namespace ListRuleNamesByTargetRequest {
  export const filterSensitiveLog = (obj: ListRuleNamesByTargetRequest): any => ({
    ...obj,
  });
}

export interface ListRuleNamesByTargetResponse {
  /**
   * <p>The names of the rules that can invoke the given target.</p>
   */
  RuleNames?: string[];

  /**
   * <p>Indicates whether there are additional results to retrieve. If there are no more
   *             results, the value is null.</p>
   */
  NextToken?: string;
}

export namespace ListRuleNamesByTargetResponse {
  export const filterSensitiveLog = (obj: ListRuleNamesByTargetResponse): any => ({
    ...obj,
  });
}

export interface ListRulesRequest {
  /**
   * <p>The prefix matching the rule name.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The name or ARN of the event bus to list the rules for. If you omit this, the default event bus is
   *             used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;
}

export namespace ListRulesRequest {
  export const filterSensitiveLog = (obj: ListRulesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a rule in Amazon EventBridge.</p>
 */
export interface Rule {
  /**
   * <p>The name of the rule.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  Arn?: string;

  /**
   * <p>The event pattern of the rule. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and
   *                 Event Patterns</a> in the <i>Amazon EventBridge User
   *             Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * <p>The state of the rule.</p>
   */
  State?: RuleState | string;

  /**
   * <p>The description of the rule.</p>
   */
  Description?: string;

  /**
   * <p>The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5
   *             minutes)".</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that is used for target
   *             invocation.</p>
   */
  RoleArn?: string;

  /**
   * <p>If the rule was created on behalf of your account by an AWS service, this field
   *             displays the principal name of the service that created the rule.</p>
   */
  ManagedBy?: string;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is
   *             used.</p>
   */
  EventBusName?: string;
}

export namespace Rule {
  export const filterSensitiveLog = (obj: Rule): any => ({
    ...obj,
  });
}

export interface ListRulesResponse {
  /**
   * <p>The rules that match the specified criteria.</p>
   */
  Rules?: Rule[];

  /**
   * <p>Indicates whether there are additional results to retrieve. If there are no more
   *             results, the value is null.</p>
   */
  NextToken?: string;
}

export namespace ListRulesResponse {
  export const filterSensitiveLog = (obj: ListRulesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the EventBridge resource for which you want to view tags.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tag keys and values associated with the resource you specified</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListTargetsByRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  Rule: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is
   *             used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;
}

export namespace ListTargetsByRuleRequest {
  export const filterSensitiveLog = (obj: ListTargetsByRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The array properties for the submitted job, such as the size of the array. The
 *             array size can be between 2 and 10,000. If you specify array properties for a job, it
 *             becomes an array job. This parameter is used only if the target is an AWS Batch
 *             job.</p>
 */
export interface BatchArrayProperties {
  /**
   * <p>The size of the array, if this is an array batch job. Valid values are integers
   *             between 2 and 10,000.</p>
   */
  Size?: number;
}

export namespace BatchArrayProperties {
  export const filterSensitiveLog = (obj: BatchArrayProperties): any => ({
    ...obj,
  });
}

/**
 * <p>The retry strategy to use for failed jobs, if the target is an AWS Batch job. If
 *             you specify a retry strategy here, it overrides the retry strategy defined in the job
 *             definition.</p>
 */
export interface BatchRetryStrategy {
  /**
   * <p>The number of times to attempt to retry, if the job fails. Valid values are
   *             1–10.</p>
   */
  Attempts?: number;
}

export namespace BatchRetryStrategy {
  export const filterSensitiveLog = (obj: BatchRetryStrategy): any => ({
    ...obj,
  });
}

/**
 * <p>The custom parameters to be used when the target is an AWS Batch job.</p>
 */
export interface BatchParameters {
  /**
   * <p>The ARN or name of the job definition to use if the event target is an AWS Batch
   *             job. This job definition must already exist.</p>
   */
  JobDefinition: string | undefined;

  /**
   * <p>The name to use for this execution of the job, if the target is an AWS Batch
   *             job.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The array properties for the submitted job, such as the size of the array. The
   *             array size can be between 2 and 10,000. If you specify array properties for a job, it
   *             becomes an array job. This parameter is used only if the target is an AWS Batch
   *             job.</p>
   */
  ArrayProperties?: BatchArrayProperties;

  /**
   * <p>The retry strategy to use for failed jobs, if the target is an AWS Batch job. The
   *             retry strategy is the number of times to retry the failed job execution. Valid values
   *             are 1–10. When you specify a retry strategy here, it overrides the retry strategy
   *             defined in the job definition.</p>
   */
  RetryStrategy?: BatchRetryStrategy;
}

export namespace BatchParameters {
  export const filterSensitiveLog = (obj: BatchParameters): any => ({
    ...obj,
  });
}

/**
 * <p>A <code>DeadLetterConfig</code> object that contains information about a dead-letter
 *             queue configuration.</p>
 */
export interface DeadLetterConfig {
  /**
   * <p>The ARN of the SQS queue specified as the target for the dead-letter queue.</p>
   */
  Arn?: string;
}

export namespace DeadLetterConfig {
  export const filterSensitiveLog = (obj: DeadLetterConfig): any => ({
    ...obj,
  });
}

export enum LaunchType {
  EC2 = "EC2",
  FARGATE = "FARGATE",
}

/**
 * <p>This structure specifies the VPC subnets and security groups for the task, and whether
 *             a public IP address is to be used. This structure is relevant only for ECS tasks that
 *             use the <code>awsvpc</code> network mode.</p>
 */
export interface AwsVpcConfiguration {
  /**
   * <p>Specifies the subnets associated with the task. These subnets must all be in the same
   *             VPC. You can specify as many as 16 subnets.</p>
   */
  Subnets: string[] | undefined;

  /**
   * <p>Specifies the security groups associated with the task. These security groups must all
   *             be in the same VPC. You can specify as many as five security groups. If you do not
   *             specify a security group, the default security group for the VPC is used.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Specifies whether the task's elastic network interface receives a public IP address.
   *             You can specify <code>ENABLED</code> only when <code>LaunchType</code> in
   *                 <code>EcsParameters</code> is set to <code>FARGATE</code>.</p>
   */
  AssignPublicIp?: AssignPublicIp | string;
}

export namespace AwsVpcConfiguration {
  export const filterSensitiveLog = (obj: AwsVpcConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>This structure specifies the network configuration for an ECS task.</p>
 */
export interface NetworkConfiguration {
  /**
   * <p>Use this structure to specify the VPC subnets and security groups for the task, and
   *             whether a public IP address is to be used. This structure is relevant only for ECS tasks
   *             that use the <code>awsvpc</code> network mode.</p>
   */
  awsvpcConfiguration?: AwsVpcConfiguration;
}

export namespace NetworkConfiguration {
  export const filterSensitiveLog = (obj: NetworkConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The custom parameters to be used when the target is an Amazon ECS task.</p>
 */
export interface EcsParameters {
  /**
   * <p>The ARN of the task definition to use if the event target is an Amazon ECS task.
   *         </p>
   */
  TaskDefinitionArn: string | undefined;

  /**
   * <p>The number of tasks to create based on <code>TaskDefinition</code>. The default is
   *             1.</p>
   */
  TaskCount?: number;

  /**
   * <p>Specifies the launch type on which your task is running. The launch type that you
   *             specify here must match one of the launch type (compatibilities) of the target task. The
   *                 <code>FARGATE</code> value is supported only in the Regions where AWS Fargate with
   *             Amazon ECS is supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html">AWS Fargate on Amazon
   *                 ECS</a> in the <i>Amazon Elastic Container Service Developer
   *                 Guide</i>.</p>
   */
  LaunchType?: LaunchType | string;

  /**
   * <p>Use this structure if the ECS task uses the <code>awsvpc</code> network mode. This
   *             structure specifies the VPC subnets and security groups associated with the task, and
   *             whether a public IP address is to be used. This structure is required if
   *                 <code>LaunchType</code> is <code>FARGATE</code> because the <code>awsvpc</code> mode
   *             is required for Fargate tasks.</p>
   *         <p>If you specify <code>NetworkConfiguration</code> when the target ECS task does not use
   *             the <code>awsvpc</code> network mode, the task fails.</p>
   */
  NetworkConfiguration?: NetworkConfiguration;

  /**
   * <p>Specifies the platform version for the task. Specify only the numeric portion of the
   *             platform version, such as <code>1.1.0</code>.</p>
   *         <p>This structure is used only if <code>LaunchType</code> is <code>FARGATE</code>. For
   *             more information about valid platform versions, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate Platform
   *                 Versions</a> in the <i>Amazon Elastic Container Service Developer
   *                 Guide</i>.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>Specifies an ECS task group for the task. The maximum length is 255 characters.</p>
   */
  Group?: string;
}

export namespace EcsParameters {
  export const filterSensitiveLog = (obj: EcsParameters): any => ({
    ...obj,
  });
}

/**
 * <p>These are custom parameter to be used when the target is an API Gateway REST
 *             APIs.</p>
 */
export interface HttpParameters {
  /**
   * <p>The path parameter values to be used to populate API Gateway REST API path wildcards
   *             ("*").</p>
   */
  PathParameterValues?: string[];

  /**
   * <p>The headers that need to be sent as part of request invoking the API Gateway REST
   *             API.</p>
   */
  HeaderParameters?: { [key: string]: string };

  /**
   * <p>The query string keys/values that need to be sent as part of request invoking the API
   *             Gateway REST API.</p>
   */
  QueryStringParameters?: { [key: string]: string };
}

export namespace HttpParameters {
  export const filterSensitiveLog = (obj: HttpParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters needed for you to provide custom input to a target based on
 *             one or more pieces of data extracted from the event.</p>
 */
export interface InputTransformer {
  /**
   * <p>Map of JSON paths to be extracted from the event. You can then insert these in the
   *             template in <code>InputTemplate</code> to produce the output you want to be sent to the
   *             target.</p>
   *         <p>
   *             <code>InputPathsMap</code> is an array key-value pairs, where each value is a valid
   *             JSON path. You can have as many as 10 key-value pairs. You must use JSON dot notation,
   *             not bracket notation.</p>
   *         <p>The keys cannot start with "AWS." </p>
   */
  InputPathsMap?: { [key: string]: string };

  /**
   * <p>Input template where you specify placeholders that will be filled with the values
   *             of the keys from <code>InputPathsMap</code> to customize the data sent to the target.
   *             Enclose each <code>InputPathsMaps</code> value in brackets:
   *                 <<i>value</i>> The InputTemplate must be valid JSON.</p>
   *
   *         <p>If <code>InputTemplate</code> is a JSON object (surrounded by curly braces), the
   *             following restrictions apply:</p>
   *         <ul>
   *             <li>
   *                 <p>The placeholder cannot be used as an object key.</p>
   *             </li>
   *             <li>
   *                 <p>Object values cannot include quote marks.</p>
   *             </li>
   *          </ul>
   *         <p>The following example shows the syntax for using <code>InputPathsMap</code> and
   *                 <code>InputTemplate</code>.</p>
   *         <p>
   *             <code> "InputTransformer":</code>
   *          </p>
   *         <p>
   *             <code>{</code>
   *          </p>
   *         <p>
   *             <code>"InputPathsMap": {"instance": "$.detail.instance","status":
   *                 "$.detail.status"},</code>
   *          </p>
   *         <p>
   *             <code>"InputTemplate": "<instance> is in state
   *             <status>"</code>
   *          </p>
   *         <p>
   *             <code>}</code>
   *          </p>
   *         <p>To have the <code>InputTemplate</code> include quote marks within a JSON string,
   *             escape each quote marks with a slash, as in the following example:</p>
   *         <p>
   *             <code> "InputTransformer":</code>
   *          </p>
   *         <p>
   *             <code>{</code>
   *          </p>
   *         <p>
   *             <code>"InputPathsMap": {"instance": "$.detail.instance","status":
   *                 "$.detail.status"},</code>
   *          </p>
   *         <p>
   *             <code>"InputTemplate": "<instance> is in state
   *             \"<status>\""</code>
   *          </p>
   *         <p>
   *             <code>}</code>
   *          </p>
   */
  InputTemplate: string | undefined;
}

export namespace InputTransformer {
  export const filterSensitiveLog = (obj: InputTransformer): any => ({
    ...obj,
  });
}

/**
 * <p>This object enables you to specify a JSON path to extract from the event and use as
 *             the partition key for the Amazon Kinesis data stream, so that you can control the shard
 *             to which the event goes. If you do not include this parameter, the default is to use the
 *                 <code>eventId</code> as the partition key.</p>
 */
export interface KinesisParameters {
  /**
   * <p>The JSON path to be extracted from the event and used as the partition key. For
   *             more information, see <a href="https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html#partition-key">Amazon Kinesis Streams Key
   *                 Concepts</a> in the <i>Amazon Kinesis Streams Developer
   *             Guide</i>.</p>
   */
  PartitionKeyPath: string | undefined;
}

export namespace KinesisParameters {
  export const filterSensitiveLog = (obj: KinesisParameters): any => ({
    ...obj,
  });
}

/**
 * <p>These are custom parameters to be used when the target is a Redshift cluster to invoke
 *             the Redshift Data API ExecuteStatement based on EventBridge events.</p>
 */
export interface RedshiftDataParameters {
  /**
   * <p>The name or ARN of the secret that enables access to the database. Required when
   *             authenticating using AWS Secrets Manager.</p>
   */
  SecretManagerArn?: string;

  /**
   * <p>The name of the database. Required when authenticating using temporary
   *             credentials.</p>
   */
  Database: string | undefined;

  /**
   * <p>The database user name. Required when authenticating using temporary
   *             credentials.</p>
   */
  DbUser?: string;

  /**
   * <p>The SQL statement text to run.</p>
   */
  Sql: string | undefined;

  /**
   * <p>The name of the SQL statement. You can name the SQL statement when you create it to
   *             identify the query.</p>
   */
  StatementName?: string;

  /**
   * <p>Indicates whether to send an event back to EventBridge after the SQL statement
   *             runs.</p>
   */
  WithEvent?: boolean;
}

export namespace RedshiftDataParameters {
  export const filterSensitiveLog = (obj: RedshiftDataParameters): any => ({
    ...obj,
  });
}

/**
 * <p>A <code>RetryPolicy</code> object that includes information about the retry policy
 *             settings.</p>
 */
export interface RetryPolicy {
  /**
   * <p>The maximum number of retry attempts to make before the request fails. Retry attempts
   *             continue until either the maximum number of attempts is made or until the duration of
   *             the <code>MaximumEventAgeInSeconds</code> is met.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>The maximum amount of time, in seconds, to continue to make retry attempts.</p>
   */
  MaximumEventAgeInSeconds?: number;
}

export namespace RetryPolicy {
  export const filterSensitiveLog = (obj: RetryPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the EC2 instances that are to be sent the command, specified as
 *             key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but
 *             this key may specify multiple values.</p>
 */
export interface RunCommandTarget {
  /**
   * <p>Can be either <code>tag:</code>
   *             <i>tag-key</i> or
   *                 <code>InstanceIds</code>.</p>
   */
  Key: string | undefined;

  /**
   * <p>If <code>Key</code> is <code>tag:</code>
   *             <i>tag-key</i>,
   *                 <code>Values</code> is a list of tag values. If <code>Key</code> is
   *                 <code>InstanceIds</code>, <code>Values</code> is a list of Amazon EC2 instance
   *             IDs.</p>
   */
  Values: string[] | undefined;
}

export namespace RunCommandTarget {
  export const filterSensitiveLog = (obj: RunCommandTarget): any => ({
    ...obj,
  });
}

/**
 * <p>This parameter contains the criteria (either InstanceIds or a tag) used to specify
 *             which EC2 instances are to be sent the command. </p>
 */
export interface RunCommandParameters {
  /**
   * <p>Currently, we support including only one RunCommandTarget block, which specifies
   *             either an array of InstanceIds or a tag.</p>
   */
  RunCommandTargets: RunCommandTarget[] | undefined;
}

export namespace RunCommandParameters {
  export const filterSensitiveLog = (obj: RunCommandParameters): any => ({
    ...obj,
  });
}

/**
 * <p>This structure includes the custom parameter to be used when the target is an SQS FIFO
 *             queue.</p>
 */
export interface SqsParameters {
  /**
   * <p>The FIFO message group ID to use as the target.</p>
   */
  MessageGroupId?: string;
}

export namespace SqsParameters {
  export const filterSensitiveLog = (obj: SqsParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Targets are the resources to be invoked when a rule is triggered. For a complete
 *             list of services and resources that can be set as a target, see <a>PutTargets</a>.</p>
 *
 *         <p>If you are setting the event bus of another account as the target, and that account
 *             granted permission to your account through an organization instead of directly by the
 *             account ID, then you must specify a <code>RoleArn</code> with proper permissions in the
 *                 <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between AWS Accounts</a> in the <i>Amazon
 *                 EventBridge User Guide</i>.</p>
 */
export interface Target {
  /**
   * <p>The ID of the target.</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be used for this target when the
   *             rule is triggered. If one rule triggers multiple targets, you can use a different IAM
   *             role for each target.</p>
   */
  RoleArn?: string;

  /**
   * <p>Valid JSON text passed to the target. In this case, nothing from the event itself
   *             is passed to the target. For more information, see <a href="http://www.rfc-editor.org/rfc/rfc7159.txt">The JavaScript Object Notation
   *                 (JSON) Data Interchange Format</a>.</p>
   */
  Input?: string;

  /**
   * <p>The value of the JSONPath that is used for extracting part of the matched event
   *             when passing it to the target. You must use JSON dot notation, not bracket notation. For
   *             more information about JSON paths, see <a href="http://goessner.net/articles/JsonPath/">JSONPath</a>.</p>
   */
  InputPath?: string;

  /**
   * <p>Settings to enable you to provide custom input to a target based on certain event
   *             data. You can extract one or more key-value pairs from the event and then use that data
   *             to send customized input to the target.</p>
   */
  InputTransformer?: InputTransformer;

  /**
   * <p>The custom parameter you can use to control the shard assignment, when the target
   *             is a Kinesis data stream. If you do not include this parameter, the default is to use
   *             the <code>eventId</code> as the partition key.</p>
   */
  KinesisParameters?: KinesisParameters;

  /**
   * <p>Parameters used when you are using the rule to invoke Amazon EC2 Run
   *             Command.</p>
   */
  RunCommandParameters?: RunCommandParameters;

  /**
   * <p>Contains the Amazon ECS task definition and task count to be used, if the event
   *             target is an Amazon ECS task. For more information about Amazon ECS tasks, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Task
   *                 Definitions </a> in the <i>Amazon EC2 Container Service Developer
   *                 Guide</i>.</p>
   */
  EcsParameters?: EcsParameters;

  /**
   * <p>If the event target is an AWS Batch job, this contains the job definition, job
   *             name, and other parameters. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/jobs.html">Jobs</a> in the <i>AWS Batch User
   *                 Guide</i>.</p>
   */
  BatchParameters?: BatchParameters;

  /**
   * <p>Contains the message group ID to use when the target is a FIFO queue.</p>
   *         <p>If you specify an SQS FIFO queue as a target, the queue must have content-based
   *             deduplication enabled.</p>
   */
  SqsParameters?: SqsParameters;

  /**
   * <p>Contains the HTTP parameters to use when the target is a API Gateway REST
   *             endpoint.</p>
   *         <p>If you specify an API Gateway REST API as a target, you can use this parameter to
   *             specify headers, path parameter, query string keys/values as part of your target
   *             invoking request.</p>
   */
  HttpParameters?: HttpParameters;

  /**
   * <p>Contains the Redshift Data API parameters to use when the target is a Redshift
   *             cluster.</p>
   *         <p>If you specify a Redshift Cluster as a Target, you can use this to specify
   *             parameters to invoke the Redshift Data API ExecuteStatement based on EventBridge
   *             events.</p>
   */
  RedshiftDataParameters?: RedshiftDataParameters;

  /**
   * <p>The <code>DeadLetterConfig</code> that defines the target queue to send dead-letter
   *             queue events to.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * <p>The <code>RetryPolicy</code> object that contains the retry policy configuration to
   *             use for the dead-letter queue.</p>
   */
  RetryPolicy?: RetryPolicy;
}

export namespace Target {
  export const filterSensitiveLog = (obj: Target): any => ({
    ...obj,
  });
}

export interface ListTargetsByRuleResponse {
  /**
   * <p>The targets assigned to the rule.</p>
   */
  Targets?: Target[];

  /**
   * <p>Indicates whether there are additional results to retrieve. If there are no more
   *             results, the value is null.</p>
   */
  NextToken?: string;
}

export namespace ListTargetsByRuleResponse {
  export const filterSensitiveLog = (obj: ListTargetsByRuleResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an event to be submitted.</p>
 */
export interface PutEventsRequestEntry {
  /**
   * <p>The time stamp of the event, per <a href="https://www.rfc-editor.org/rfc/rfc3339.txt">RFC3339</a>. If no time stamp
   *             is provided, the time stamp of the <a>PutEvents</a> call is used.</p>
   */
  Time?: Date;

  /**
   * <p>The source of the event.</p>
   */
  Source?: string;

  /**
   * <p>AWS resources, identified by Amazon Resource Name (ARN), which the event primarily
   *             concerns. Any number, including zero, may be present.</p>
   */
  Resources?: string[];

  /**
   * <p>Free-form string used to decide what fields to expect in the event
   *             detail.</p>
   */
  DetailType?: string;

  /**
   * <p>A valid JSON string. There is no other schema imposed. The JSON string may contain
   *             fields and nested subobjects.</p>
   */
  Detail?: string;

  /**
   * <p>The name or ARN of the event bus to receive the event. Only the rules that are associated with
   *             this event bus are used to match the event. If you omit this, the default event bus is
   *             used.</p>
   */
  EventBusName?: string;
}

export namespace PutEventsRequestEntry {
  export const filterSensitiveLog = (obj: PutEventsRequestEntry): any => ({
    ...obj,
  });
}

export interface PutEventsRequest {
  /**
   * <p>The entry that defines an event in your system. You can specify several parameters
   *             for the entry such as the source and type of the event, resources associated with the
   *             event, and so on.</p>
   */
  Entries: PutEventsRequestEntry[] | undefined;
}

export namespace PutEventsRequest {
  export const filterSensitiveLog = (obj: PutEventsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an event that failed to be submitted.</p>
 */
export interface PutEventsResultEntry {
  /**
   * <p>The ID of the event.</p>
   */
  EventId?: string;

  /**
   * <p>The error code that indicates why the event submission failed.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that explains why the event submission failed.</p>
   */
  ErrorMessage?: string;
}

export namespace PutEventsResultEntry {
  export const filterSensitiveLog = (obj: PutEventsResultEntry): any => ({
    ...obj,
  });
}

export interface PutEventsResponse {
  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;

  /**
   * <p>The successfully and unsuccessfully ingested events results. If the ingestion was
   *             successful, the entry has the event ID in it. Otherwise, you can use the error code and
   *             error message to identify the problem with the entry.</p>
   */
  Entries?: PutEventsResultEntry[];
}

export namespace PutEventsResponse {
  export const filterSensitiveLog = (obj: PutEventsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The details about an event generated by an SaaS partner.</p>
 */
export interface PutPartnerEventsRequestEntry {
  /**
   * <p>The date and time of the event.</p>
   */
  Time?: Date;

  /**
   * <p>The event source that is generating the evntry.</p>
   */
  Source?: string;

  /**
   * <p>AWS resources, identified by Amazon Resource Name (ARN), which the event primarily
   *             concerns. Any number, including zero, may be present.</p>
   */
  Resources?: string[];

  /**
   * <p>A free-form string used to decide what fields to expect in the event detail.</p>
   */
  DetailType?: string;

  /**
   * <p>A valid JSON string. There is no other schema imposed. The JSON string may contain
   *             fields and nested subobjects.</p>
   */
  Detail?: string;
}

export namespace PutPartnerEventsRequestEntry {
  export const filterSensitiveLog = (obj: PutPartnerEventsRequestEntry): any => ({
    ...obj,
  });
}

export interface PutPartnerEventsRequest {
  /**
   * <p>The list of events to write to the event bus.</p>
   */
  Entries: PutPartnerEventsRequestEntry[] | undefined;
}

export namespace PutPartnerEventsRequest {
  export const filterSensitiveLog = (obj: PutPartnerEventsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an event that a partner tried to generate, but failed.</p>
 */
export interface PutPartnerEventsResultEntry {
  /**
   * <p>The ID of the event.</p>
   */
  EventId?: string;

  /**
   * <p>The error code that indicates why the event submission failed.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that explains why the event submission failed.</p>
   */
  ErrorMessage?: string;
}

export namespace PutPartnerEventsResultEntry {
  export const filterSensitiveLog = (obj: PutPartnerEventsResultEntry): any => ({
    ...obj,
  });
}

export interface PutPartnerEventsResponse {
  /**
   * <p>The number of events from this operation that could not be written to the partner
   *             event bus.</p>
   */
  FailedEntryCount?: number;

  /**
   * <p>The list of events from this operation that were successfully written to the partner
   *             event bus.</p>
   */
  Entries?: PutPartnerEventsResultEntry[];
}

export namespace PutPartnerEventsResponse {
  export const filterSensitiveLog = (obj: PutPartnerEventsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The event bus policy is too long. For more information, see the limits.</p>
 */
export interface PolicyLengthExceededException extends __SmithyException, $MetadataBearer {
  name: "PolicyLengthExceededException";
  $fault: "client";
  message?: string;
}

export namespace PolicyLengthExceededException {
  export const filterSensitiveLog = (obj: PolicyLengthExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON string which you can use to limit the event bus permissions you are granting to
 *             only accounts that fulfill the condition. Currently, the only supported condition is
 *             membership in a certain AWS organization. The string must contain <code>Type</code>,
 *                 <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field
 *             specifies the ID of the AWS organization. Following is an example value for
 *                 <code>Condition</code>:</p>
 *         <p>
 *             <code>'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value":
 *                 "o-1234567890"}'</code>
 *          </p>
 */
export interface Condition {
  /**
   * <p>Specifies the type of condition. Currently the only supported value is
   *                 <code>StringEquals</code>.</p>
   */
  Type: string | undefined;

  /**
   * <p>Specifies the key for the condition. Currently the only supported key is
   *                 <code>aws:PrincipalOrgID</code>.</p>
   */
  Key: string | undefined;

  /**
   * <p>Specifies the value for the key. Currently, this must be the ID of the
   *             organization.</p>
   */
  Value: string | undefined;
}

export namespace Condition {
  export const filterSensitiveLog = (obj: Condition): any => ({
    ...obj,
  });
}

export interface PutPermissionRequest {
  /**
   * <p>The name of the event bus associated with the rule. If you omit this, the default event bus is
   *             used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The action that you are enabling the other account to perform. Currently, this must
   *             be <code>events:PutEvents</code>.</p>
   */
  Action?: string;

  /**
   * <p>The 12-digit AWS account ID that you are permitting to put events to your default
   *             event bus. Specify "*" to permit any account to put events to your default event
   *             bus.</p>
   *
   *         <p>If you specify "*" without specifying <code>Condition</code>, avoid creating rules
   *             that may match undesirable events. To create more secure rules, make sure that the event
   *             pattern for each rule contains an <code>account</code> field with a specific account ID
   *             from which to receive events. Rules with an account field do not match any events sent
   *             from other accounts.</p>
   */
  Principal?: string;

  /**
   * <p>An identifier string for the external account that you are granting permissions to.
   *             If you later want to revoke the permission for this external account, specify this
   *                 <code>StatementId</code> when you run <a>RemovePermission</a>.</p>
   */
  StatementId?: string;

  /**
   * <p>This parameter enables you to limit the permission to accounts that fulfill a certain
   *             condition, such as being a member of a certain AWS organization. For more information
   *             about AWS Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">What Is AWS
   *                 Organizations</a> in the <i>AWS Organizations User
   *             Guide</i>.</p>
   *         <p>If you specify <code>Condition</code> with an AWS organization ID, and specify "*" as
   *             the value for <code>Principal</code>, you grant permission to all the accounts in the
   *             named organization.</p>
   *
   *         <p>The <code>Condition</code> is a JSON string which must contain <code>Type</code>,
   *                 <code>Key</code>, and <code>Value</code> fields.</p>
   */
  Condition?: Condition;

  /**
   * <p>A JSON string that describes the permission policy statement. You can include a <code>Policy</code> parameter
   *             in the request instead of using the <code>StatementId</code>, <code>Action</code>, <code>Principal</code>, or <code>Condition</code> parameters.</p>
   */
  Policy?: string;
}

export namespace PutPermissionRequest {
  export const filterSensitiveLog = (obj: PutPermissionRequest): any => ({
    ...obj,
  });
}

export interface PutRuleRequest {
  /**
   * <p>The name of the rule that you are creating or updating.</p>
   */
  Name: string | undefined;

  /**
   * <p>The scheduling expression. For example, "cron(0 20 * * ? *)" or "rate(5
   *             minutes)".</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and
   *                 Event Patterns</a> in the <i>Amazon EventBridge User
   *             Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * <p>Indicates whether the rule is enabled or disabled.</p>
   */
  State?: RuleState | string;

  /**
   * <p>A description of the rule.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p>
   */
  RoleArn?: string;

  /**
   * <p>The list of key-value pairs to associate with the rule.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name or ARN of the event bus to associate with this rule. If you omit this, the default event bus is
   *             used.</p>
   */
  EventBusName?: string;
}

export namespace PutRuleRequest {
  export const filterSensitiveLog = (obj: PutRuleRequest): any => ({
    ...obj,
  });
}

export interface PutRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn?: string;
}

export namespace PutRuleResponse {
  export const filterSensitiveLog = (obj: PutRuleResponse): any => ({
    ...obj,
  });
}

export interface PutTargetsRequest {
  /**
   * <p>The name of the rule.</p>
   */
  Rule: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *             event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The targets to update or add to the rule.</p>
   */
  Targets: Target[] | undefined;
}

export namespace PutTargetsRequest {
  export const filterSensitiveLog = (obj: PutTargetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a target that failed to be added to a rule.</p>
 */
export interface PutTargetsResultEntry {
  /**
   * <p>The ID of the target.</p>
   */
  TargetId?: string;

  /**
   * <p>The error code that indicates why the target addition failed. If the value is
   *                 <code>ConcurrentModificationException</code>, too many requests were made at the
   *             same time.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that explains why the target addition failed.</p>
   */
  ErrorMessage?: string;
}

export namespace PutTargetsResultEntry {
  export const filterSensitiveLog = (obj: PutTargetsResultEntry): any => ({
    ...obj,
  });
}

export interface PutTargetsResponse {
  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;

  /**
   * <p>The failed target entries.</p>
   */
  FailedEntries?: PutTargetsResultEntry[];
}

export namespace PutTargetsResponse {
  export const filterSensitiveLog = (obj: PutTargetsResponse): any => ({
    ...obj,
  });
}

export interface RemovePermissionRequest {
  /**
   * <p>The statement ID corresponding to the account that is no longer allowed to put
   *             events to the default event bus.</p>
   */
  StatementId?: string;

  /**
   * <p>Specifies whether to remove all permissions.</p>
   */
  RemoveAllPermissions?: boolean;

  /**
   * <p>The name of the event bus to revoke permissions for. If you omit this, the default
   *             event bus is used.</p>
   */
  EventBusName?: string;
}

export namespace RemovePermissionRequest {
  export const filterSensitiveLog = (obj: RemovePermissionRequest): any => ({
    ...obj,
  });
}

export interface RemoveTargetsRequest {
  /**
   * <p>The name of the rule.</p>
   */
  Rule: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is
   *             used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The IDs of the targets to remove from the rule.</p>
   */
  Ids: string[] | undefined;

  /**
   * <p>If this is a managed rule, created by an AWS service on your behalf, you must specify
   *                 <code>Force</code> as <code>True</code> to remove targets. This parameter is ignored
   *             for rules that are not managed rules. You can check whether a rule is a managed rule by
   *             using <code>DescribeRule</code> or <code>ListRules</code> and checking the
   *                 <code>ManagedBy</code> field of the response.</p>
   */
  Force?: boolean;
}

export namespace RemoveTargetsRequest {
  export const filterSensitiveLog = (obj: RemoveTargetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a target that failed to be removed from a rule.</p>
 */
export interface RemoveTargetsResultEntry {
  /**
   * <p>The ID of the target.</p>
   */
  TargetId?: string;

  /**
   * <p>The error code that indicates why the target removal failed. If the value is
   *                 <code>ConcurrentModificationException</code>, too many requests were made at the
   *             same time.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that explains why the target removal failed.</p>
   */
  ErrorMessage?: string;
}

export namespace RemoveTargetsResultEntry {
  export const filterSensitiveLog = (obj: RemoveTargetsResultEntry): any => ({
    ...obj,
  });
}

export interface RemoveTargetsResponse {
  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;

  /**
   * <p>The failed target entries.</p>
   */
  FailedEntries?: RemoveTargetsResultEntry[];
}

export namespace RemoveTargetsResponse {
  export const filterSensitiveLog = (obj: RemoveTargetsResponse): any => ({
    ...obj,
  });
}

export interface StartReplayRequest {
  /**
   * <p>The name of the replay to start.</p>
   */
  ReplayName: string | undefined;

  /**
   * <p>A description for the replay to start.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the archive to replay events from.</p>
   */
  EventSourceArn: string | undefined;

  /**
   * <p>A time stamp for the time to start replaying events. Only events that occurred between
   *             the <code>EventStartTime</code> and <code>EventEndTime</code> are replayed.</p>
   */
  EventStartTime: Date | undefined;

  /**
   * <p>A time stamp for the time to stop replaying events. Only events that occurred between
   *             the <code>EventStartTime</code> and <code>EventEndTime</code> are replayed.</p>
   */
  EventEndTime: Date | undefined;

  /**
   * <p>A <code>ReplayDestination</code> object that includes details about the destination
   *             for the replay.</p>
   */
  Destination: ReplayDestination | undefined;
}

export namespace StartReplayRequest {
  export const filterSensitiveLog = (obj: StartReplayRequest): any => ({
    ...obj,
  });
}

export interface StartReplayResponse {
  /**
   * <p>The ARN of the replay.</p>
   */
  ReplayArn?: string;

  /**
   * <p>The state of the replay.</p>
   */
  State?: ReplayState | string;

  /**
   * <p>The reason that the replay is in the state.</p>
   */
  StateReason?: string;

  /**
   * <p>The time at which the replay started.</p>
   */
  ReplayStartTime?: Date;
}

export namespace StartReplayResponse {
  export const filterSensitiveLog = (obj: StartReplayResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the EventBridge resource that you're adding tags to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface TestEventPatternRequest {
  /**
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and
   *                 Event Patterns</a> in the <i>Amazon EventBridge User
   *             Guide</i>.</p>
   */
  EventPattern: string | undefined;

  /**
   * <p>The event, in JSON format, to test against the event pattern.</p>
   */
  Event: string | undefined;
}

export namespace TestEventPatternRequest {
  export const filterSensitiveLog = (obj: TestEventPatternRequest): any => ({
    ...obj,
  });
}

export interface TestEventPatternResponse {
  /**
   * <p>Indicates whether the event matches the event pattern.</p>
   */
  Result?: boolean;
}

export namespace TestEventPatternResponse {
  export const filterSensitiveLog = (obj: TestEventPatternResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the EventBridge resource from which you are removing tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateArchiveRequest {
  /**
   * <p>The name of the archive to update.</p>
   */
  ArchiveName: string | undefined;

  /**
   * <p>The description for the archive.</p>
   */
  Description?: string;

  /**
   * <p>The event pattern to use to filter events sent to the archive.</p>
   */
  EventPattern?: string;

  /**
   * <p>The number of days to retain events in the archive.</p>
   */
  RetentionDays?: number;
}

export namespace UpdateArchiveRequest {
  export const filterSensitiveLog = (obj: UpdateArchiveRequest): any => ({
    ...obj,
  });
}

export interface UpdateArchiveResponse {
  /**
   * <p>The ARN of the archive.</p>
   */
  ArchiveArn?: string;

  /**
   * <p>The state of the archive.</p>
   */
  State?: ArchiveState | string;

  /**
   * <p>The reason that the archive is in the current state.</p>
   */
  StateReason?: string;

  /**
   * <p>The time at which the archive was updated.</p>
   */
  CreationTime?: Date;
}

export namespace UpdateArchiveResponse {
  export const filterSensitiveLog = (obj: UpdateArchiveResponse): any => ({
    ...obj,
  });
}
