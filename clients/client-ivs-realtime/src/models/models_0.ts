// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IVSRealTimeServiceException as __BaseException } from "./IVSRealTimeServiceException";

/**
 * @public
 * <p/>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>User does not have sufficient access to perform this action.</p>
   */
  exceptionMessage?: string;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 * @enum
 */
export const ParticipantTokenCapability = {
  PUBLISH: "PUBLISH",
  SUBSCRIBE: "SUBSCRIBE",
} as const;

/**
 * @public
 */
export type ParticipantTokenCapability = (typeof ParticipantTokenCapability)[keyof typeof ParticipantTokenCapability];

/**
 * @public
 */
export interface CreateParticipantTokenRequest {
  /**
   * @public
   * <p>ARN of the stage to which this token is scoped.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>Duration (in minutes), after which the token expires. Default:  720 (12 hours).</p>
   */
  duration?: number;

  /**
   * @public
   * <p>Name that can be specified to help identify the token. This can be any UTF-8 encoded
   *          text. <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  userId?: string;

  /**
   * @public
   * <p>Application-provided attributes to encode into the token and attach to a stage. Map keys
   *          and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>Set of capabilities that the user is allowed to perform in the stage. Default:
   *             <code>PUBLISH, SUBSCRIBE</code>.</p>
   */
  capabilities?: ParticipantTokenCapability[];
}

/**
 * @public
 * <p>Object specifying a participant token in a stage.</p>
 *          <p>
 *             <b>Important</b>: Treat tokens as opaque; i.e., do not build functionality
 *          based on token contents. The format of tokens could change in the future.</p>
 */
export interface ParticipantToken {
  /**
   * @public
   * <p>Unique identifier for this participant token, assigned by IVS.</p>
   */
  participantId?: string;

  /**
   * @public
   * <p>The issued client token, encrypted.</p>
   */
  token?: string;

  /**
   * @public
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  userId?: string;

  /**
   * @public
   * <p>Application-provided attributes to encode into the token and attach to a stage.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>Duration (in minutes), after which the participant token expires. Default: 720 (12
   *          hours).</p>
   */
  duration?: number;

  /**
   * @public
   * <p>Set of capabilities that the user is allowed to perform in the stage.</p>
   */
  capabilities?: ParticipantTokenCapability[];

  /**
   * @public
   * <p>ISO 8601 timestamp (returned as a string) for when this token expires.</p>
   */
  expirationTime?: Date;
}

/**
 * @public
 */
export interface CreateParticipantTokenResponse {
  /**
   * @public
   * <p>The participant token that was created.</p>
   */
  participantToken?: ParticipantToken;
}

/**
 * @public
 * <p/>
 */
export class PendingVerification extends __BaseException {
  readonly name: "PendingVerification" = "PendingVerification";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p> Your account is pending verification. </p>
   */
  exceptionMessage?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PendingVerification, __BaseException>) {
    super({
      name: "PendingVerification",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PendingVerification.prototype);
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 * <p/>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Request references a resource which does not exist.</p>
   */
  exceptionMessage?: string;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 * <p/>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Request would cause a service quota to be exceeded.</p>
   */
  exceptionMessage?: string;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 * <p/>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
   */
  exceptionMessage?: string;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 * <p>Object specifying a participant token configuration in a stage.</p>
 */
export interface ParticipantTokenConfiguration {
  /**
   * @public
   * <p>Duration (in minutes), after which the corresponding participant token expires. Default:
   *          720 (12 hours).</p>
   */
  duration?: number;

  /**
   * @public
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  userId?: string;

  /**
   * @public
   * <p>Application-provided attributes to encode into the corresponding participant token and
   *          attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length
   *          of this field is 1 KB total. <i>This field is exposed to all stage participants and
   *             should not be used for personally identifying, confidential, or sensitive
   *             information.</i>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>Set of capabilities that the user is allowed to perform in the stage.</p>
   */
  capabilities?: ParticipantTokenCapability[];
}

/**
 * @public
 */
export interface CreateStageRequest {
  /**
   * @public
   * <p>Optional name that can be specified for the stage being created.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Array of participant token configuration objects to attach to the new stage.</p>
   */
  participantTokenConfigurations?: ParticipantTokenConfiguration[];

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Object specifying a stage.</p>
 */
export interface Stage {
  /**
   * @public
   * <p>Stage ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>Stage name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>ID of the active session within the stage.</p>
   */
  activeSessionId?: string;

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateStageResponse {
  /**
   * @public
   * <p>The stage that was created.</p>
   */
  stage?: Stage;

  /**
   * @public
   * <p>Participant tokens attached to the stage. These correspond to the
   *             <code>participants</code> in the request.</p>
   */
  participantTokens?: ParticipantToken[];
}

/**
 * @public
 * <p/>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Updating or deleting a resource can cause an inconsistent state.</p>
   */
  exceptionMessage?: string;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 */
export interface DeleteStageRequest {
  /**
   * @public
   * <p>ARN of the stage to be deleted.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteStageResponse {}

/**
 * @public
 */
export interface DisconnectParticipantRequest {
  /**
   * @public
   * <p>ARN of the stage to which the participant is attached.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>Identifier of the participant to be disconnected. This is assigned by IVS and returned
   *          by <a>CreateParticipantToken</a>.</p>
   */
  participantId: string | undefined;

  /**
   * @public
   * <p>Description of why this participant is being disconnected.</p>
   */
  reason?: string;
}

/**
 * @public
 */
export interface DisconnectParticipantResponse {}

/**
 * @public
 */
export interface GetParticipantRequest {
  /**
   * @public
   * <p>Stage ARN.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>ID of a session within the stage.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>Unique identifier for the participant. This is assigned by IVS and returned by <a>CreateParticipantToken</a>.</p>
   */
  participantId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ParticipantState = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
} as const;

/**
 * @public
 */
export type ParticipantState = (typeof ParticipantState)[keyof typeof ParticipantState];

/**
 * @public
 * <p>Object describing a participant that has joined a stage.</p>
 */
export interface Participant {
  /**
   * @public
   * <p>Unique identifier for this participant, assigned by IVS.</p>
   */
  participantId?: string;

  /**
   * @public
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   */
  userId?: string;

  /**
   * @public
   * <p>Whether the participant is connected to or disconnected from the stage.</p>
   */
  state?: ParticipantState;

  /**
   * @public
   * <p>ISO 8601 timestamp (returned as a string) when the participant first joined the stage
   *          session.</p>
   */
  firstJoinTime?: Date;

  /**
   * @public
   * <p>Application-provided attributes to encode into the token and attach to a stage. Map keys
   *          and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>Whether the participant ever published to the stage session.</p>
   */
  published?: boolean;

  /**
   * @public
   * <p>The participant’s Internet Service Provider.</p>
   */
  ispName?: string;

  /**
   * @public
   * <p>The participant’s operating system.</p>
   */
  osName?: string;

  /**
   * @public
   * <p>The participant’s operating system version.</p>
   */
  osVersion?: string;

  /**
   * @public
   * <p>The participant’s browser.</p>
   */
  browserName?: string;

  /**
   * @public
   * <p>The participant’s browser version.</p>
   */
  browserVersion?: string;

  /**
   * @public
   * <p>The participant’s SDK version.</p>
   */
  sdkVersion?: string;
}

/**
 * @public
 */
export interface GetParticipantResponse {
  /**
   * @public
   * <p>The participant that is returned.</p>
   */
  participant?: Participant;
}

/**
 * @public
 */
export interface GetStageRequest {
  /**
   * @public
   * <p>ARN of the stage for which the information is to be retrieved.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetStageResponse {
  /**
   * @public
   * <p>The stage that is returned.</p>
   */
  stage?: Stage;
}

/**
 * @public
 */
export interface GetStageSessionRequest {
  /**
   * @public
   * <p>ARN of the stage for which the information is to be retrieved.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>ID of a session within the stage.</p>
   */
  sessionId: string | undefined;
}

/**
 * @public
 * <p>A stage session begins when the first participant joins a stage and ends after the last
 *          participant leaves the stage. A stage session helps with debugging stages by grouping
 *          events and participants into shorter periods of time (i.e., a session), which is helpful
 *          when stages are used over long periods of time.</p>
 */
export interface StageSession {
  /**
   * @public
   * <p>ID of the session within the stage.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p> ISO 8601 timestamp (returned as a string) when this stage session began.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>ISO 8601 timestamp (returned as a string) when the stage session ended. This is null if
   *          the stage is active.</p>
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface GetStageSessionResponse {
  /**
   * @public
   * <p>The stage session that is returned.</p>
   */
  stageSession?: StageSession;
}

/**
 * @public
 */
export interface ListParticipantEventsRequest {
  /**
   * @public
   * <p>Stage ARN.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>ID of a session within the stage.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>Unique identifier for this participant. This is assigned by IVS and returned by <a>CreateParticipantToken</a>.</p>
   */
  participantId: string | undefined;

  /**
   * @public
   * <p>The first participant to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return. Default: 50.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const EventErrorCode = {
  INSUFFICIENT_CAPABILITIES: "INSUFFICIENT_CAPABILITIES",
  PUBLISHER_NOT_FOUND: "PUBLISHER_NOT_FOUND",
  QUOTA_EXCEEDED: "QUOTA_EXCEEDED",
} as const;

/**
 * @public
 */
export type EventErrorCode = (typeof EventErrorCode)[keyof typeof EventErrorCode];

/**
 * @public
 * @enum
 */
export const EventName = {
  JOINED: "JOINED",
  JOIN_ERROR: "JOIN_ERROR",
  LEFT: "LEFT",
  PUBLISH_ERROR: "PUBLISH_ERROR",
  PUBLISH_STARTED: "PUBLISH_STARTED",
  PUBLISH_STOPPED: "PUBLISH_STOPPED",
  SUBSCRIBE_ERROR: "SUBSCRIBE_ERROR",
  SUBSCRIBE_STARTED: "SUBSCRIBE_STARTED",
  SUBSCRIBE_STOPPED: "SUBSCRIBE_STOPPED",
} as const;

/**
 * @public
 */
export type EventName = (typeof EventName)[keyof typeof EventName];

/**
 * @public
 * <p>An occurrence during a stage session.</p>
 */
export interface Event {
  /**
   * @public
   * <p>The name of the event.</p>
   */
  name?: EventName;

  /**
   * @public
   * <p>Unique identifier for the participant who triggered the event. This is assigned by
   *          IVS.</p>
   */
  participantId?: string;

  /**
   * @public
   * <p>ISO 8601 timestamp (returned as a string) for when the event occurred.</p>
   */
  eventTime?: Date;

  /**
   * @public
   * <p>Unique identifier for the remote participant. For a subscribe event, this is the
   *          publisher. For a publish or join event, this is null. This is assigned by IVS.</p>
   */
  remoteParticipantId?: string;

  /**
   * @public
   * <p>If the event is an error event, the error code is provided to give insight into the
   *          specific error that occurred. If the event is not an error event, this field is null.
   *             <code>INSUFFICIENT_CAPABILITIES</code> indicates that the participant tried to take an
   *          action that the participant’s token is not allowed to do. For more information about
   *          participant capabilities, see the <code>capabilities</code> field in <a>CreateParticipantToken</a>. <code>QUOTA_EXCEEDED</code> indicates that the
   *          number of participants who want to publish/subscribe to a stage exceeds the quota; for more
   *          information, see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/service-quotas.html">Service Quotas</a>.
   *             <code>PUBLISHER_NOT_FOUND</code> indicates that the participant tried to subscribe to a
   *          publisher that doesn’t exist. </p>
   */
  errorCode?: EventErrorCode;
}

/**
 * @public
 */
export interface ListParticipantEventsResponse {
  /**
   * @public
   * <p>List of the matching events.</p>
   */
  events: Event[] | undefined;

  /**
   * @public
   * <p>If there are more rooms than <code>maxResults</code>, use <code>nextToken</code> in the
   *          request to get the next set. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListParticipantsRequest {
  /**
   * @public
   * <p>Stage ARN.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>ID of the session within the stage.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>Filters the response list to match the specified user ID. Only one of
   *             <code>filterByUserId</code>, <code>filterByPublished</code>, or
   *             <code>filterByState</code> can be provided per request. A <code>userId</code> is a
   *          customer-assigned name to help identify the token; this can be used to link a participant
   *          to a user in the customer’s own systems.</p>
   */
  filterByUserId?: string;

  /**
   * @public
   * <p>Filters the response list to only show participants who published during the stage
   *          session. Only one of <code>filterByUserId</code>, <code>filterByPublished</code>, or
   *             <code>filterByState</code> can be provided per request.</p>
   */
  filterByPublished?: boolean;

  /**
   * @public
   * <p>Filters the response list to only show participants in the specified state. Only one of
   *             <code>filterByUserId</code>, <code>filterByPublished</code>, or
   *             <code>filterByState</code> can be provided per request.</p>
   */
  filterByState?: ParticipantState;

  /**
   * @public
   * <p>The first participant to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return. Default: 50.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary object describing a participant that has joined a stage.</p>
 */
export interface ParticipantSummary {
  /**
   * @public
   * <p>Unique identifier for this participant, assigned by IVS.</p>
   */
  participantId?: string;

  /**
   * @public
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   */
  userId?: string;

  /**
   * @public
   * <p>Whether the participant is connected to or disconnected from the stage.</p>
   */
  state?: ParticipantState;

  /**
   * @public
   * <p>ISO 8601 timestamp (returned as a string) when the participant first joined the stage
   *          session.</p>
   */
  firstJoinTime?: Date;

  /**
   * @public
   * <p>Whether the participant ever published to the stage session.</p>
   */
  published?: boolean;
}

/**
 * @public
 */
export interface ListParticipantsResponse {
  /**
   * @public
   * <p>List of the matching participants (summary information only).</p>
   */
  participants: ParticipantSummary[] | undefined;

  /**
   * @public
   * <p>If there are more rooms than <code>maxResults</code>, use <code>nextToken</code> in the
   *          request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStagesRequest {
  /**
   * @public
   * <p>The first stage to retrieve. This is used for pagination; see the <code>nextToken</code>
   *          response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return. Default: 50.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about a stage.</p>
 */
export interface StageSummary {
  /**
   * @public
   * <p>Stage ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>Stage name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>ID of the active session within the stage.</p>
   */
  activeSessionId?: string;

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListStagesResponse {
  /**
   * @public
   * <p>List of the matching stages (summary information only).</p>
   */
  stages: StageSummary[] | undefined;

  /**
   * @public
   * <p>If there are more rooms than <code>maxResults</code>, use <code>nextToken</code> in the
   *          request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStageSessionsRequest {
  /**
   * @public
   * <p>Stage ARN.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>The first stage to retrieve. This is used for pagination; see the <code>nextToken</code>
   *          response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return. Default: 50.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about a stage session.</p>
 */
export interface StageSessionSummary {
  /**
   * @public
   * <p>ID of the session within the stage.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p> ISO 8601 timestamp (returned as a string) when this stage session began.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>ISO 8601 timestamp (returned as a string) when the stage session ended. This is null if
   *          the stage is active.</p>
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface ListStageSessionsResponse {
  /**
   * @public
   * <p>List of matching stage sessions.</p>
   */
  stageSessions: StageSessionSummary[] | undefined;

  /**
   * @public
   * <p>If there are more rooms than <code>maxResults</code>, use <code>nextToken</code> in the
   *          request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p/>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>Unexpected error during processing of request.</p>
   */
  exceptionMessage?: string;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to be retrieved. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to be tagged. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Array of tags to be added or updated. Array of maps, each of the form
   *             <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints beyond what is documented
   *          there.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to be untagged. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Array of tags to be removed. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints beyond what is documented
   *          there.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateStageRequest {
  /**
   * @public
   * <p>ARN of the stage to be updated.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>Name of the stage to be updated.</p>
   */
  name?: string;
}

/**
 * @public
 */
export interface UpdateStageResponse {
  /**
   * @public
   * <p>The updated stage.</p>
   */
  stage?: Stage;
}

/**
 * @internal
 */
export const ParticipantTokenFilterSensitiveLog = (obj: ParticipantToken): any => ({
  ...obj,
  ...(obj.token && { token: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateParticipantTokenResponseFilterSensitiveLog = (obj: CreateParticipantTokenResponse): any => ({
  ...obj,
  ...(obj.participantToken && { participantToken: ParticipantTokenFilterSensitiveLog(obj.participantToken) }),
});

/**
 * @internal
 */
export const CreateStageResponseFilterSensitiveLog = (obj: CreateStageResponse): any => ({
  ...obj,
  ...(obj.participantTokens && {
    participantTokens: obj.participantTokens.map((item) => ParticipantTokenFilterSensitiveLog(item)),
  }),
});
