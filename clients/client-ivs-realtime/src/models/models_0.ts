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
   * <p>ARN of the stage to which this token is scoped.</p>
   */
  stageArn: string | undefined;

  /**
   * <p>Duration (in minutes), after which the token expires. Default:  720 (12 hours).</p>
   */
  duration?: number;

  /**
   * <p>Name that can be specified to help identify the token. This can be any UTF-8 encoded
   *          text. <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  userId?: string;

  /**
   * <p>Application-provided attributes to encode into the token and attach to a stage. Map keys
   *          and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>Set of capabilities that the user is allowed to perform in the stage. Default:
   *             <code>PUBLISH, SUBSCRIBE</code>.</p>
   */
  capabilities?: (ParticipantTokenCapability | string)[];
}

/**
 * @public
 * <p>Object specifying a participant token in a stage.</p>
 */
export interface ParticipantToken {
  /**
   * <p>Unique identifier for this participant token, assigned by IVS.</p>
   */
  participantId?: string;

  /**
   * <p>The issued client token, encrypted.</p>
   */
  token?: string;

  /**
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  userId?: string;

  /**
   * <p>Application-provided attributes to encode into the token and attach to a stage.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>Duration (in minutes), after which the participant token expires. Default:  720 (12 hours).</p>
   */
  duration?: number;

  /**
   * <p>Set of capabilities that the user is allowed to perform in the stage.</p>
   */
  capabilities?: (ParticipantTokenCapability | string)[];

  /**
   * <p>ISO 8601 timestamp (returned as a string) for when this token expires.</p>
   */
  expirationTime?: Date;
}

/**
 * @public
 */
export interface CreateParticipantTokenResponse {
  /**
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
   * <p>Duration (in minutes), after which the corresponding participant token expires. Default:
   *          720 (12 hours).</p>
   */
  duration?: number;

  /**
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  userId?: string;

  /**
   * <p>Application-provided attributes to encode into the corresponding participant token and
   *          attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length
   *          of this field is 1 KB total. <i>This field is exposed to all stage participants and
   *             should not be used for personally identifying, confidential, or sensitive
   *             information.</i>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>Set of capabilities that the user is allowed to perform in the stage.</p>
   */
  capabilities?: (ParticipantTokenCapability | string)[];
}

/**
 * @public
 */
export interface CreateStageRequest {
  /**
   * <p>Optional name that can be specified for the stage being created.</p>
   */
  name?: string;

  /**
   * <p>Array of participant token configuration objects to attach to the new stage.</p>
   */
  participantTokenConfigurations?: ParticipantTokenConfiguration[];

  /**
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
   * <p>Stage ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Stage name.</p>
   */
  name?: string;

  /**
   * <p>ID of the active session within the stage.</p>
   */
  activeSessionId?: string;

  /**
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
   * <p>The stage that was created.</p>
   */
  stage?: Stage;

  /**
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
   * <p>ARN of the stage to which the participant is attached.</p>
   */
  stageArn: string | undefined;

  /**
   * <p>Identifier of the participant to be disconnected. This is assigned by IVS and returned
   *          by <a>CreateParticipantToken</a>.</p>
   */
  participantId: string | undefined;

  /**
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
   * <p>Stage ARN.</p>
   */
  stageArn: string | undefined;

  /**
   * <p>ID of a session within the stage.</p>
   */
  sessionId: string | undefined;

  /**
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
   * <p>Unique identifier for this participant, assigned by IVS.</p>
   */
  participantId?: string;

  /**
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   */
  userId?: string;

  /**
   * <p>Whether the participant is connected to or disconnected from the stage.</p>
   */
  state?: ParticipantState | string;

  /**
   * <p>ISO 8601 timestamp (returned as a string) when the participant first joined the stage
   *          session.</p>
   */
  firstJoinTime?: Date;

  /**
   * <p>Application-provided attributes to encode into the token and attach to a stage. Map keys
   *          and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>Whether the participant ever published to the stage session.</p>
   */
  published?: boolean;
}

/**
 * @public
 */
export interface GetParticipantResponse {
  /**
   * <p>The participant that is returned.</p>
   */
  participant?: Participant;
}

/**
 * @public
 */
export interface GetStageRequest {
  /**
   * <p>ARN of the stage for which the information is to be retrieved.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetStageResponse {
  /**
   * <p>The stage that is returned.</p>
   */
  stage?: Stage;
}

/**
 * @public
 */
export interface GetStageSessionRequest {
  /**
   * <p>ARN of the stage for which the information is to be retrieved.</p>
   */
  stageArn: string | undefined;

  /**
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
   * <p>ID of the session within the stage.</p>
   */
  sessionId?: string;

  /**
   * <p> ISO 8601 timestamp (returned as a string) when this stage session began.</p>
   */
  startTime?: Date;

  /**
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
   * <p>The stage session that is returned.</p>
   */
  stageSession?: StageSession;
}

/**
 * @public
 */
export interface ListParticipantEventsRequest {
  /**
   * <p>Stage ARN.</p>
   */
  stageArn: string | undefined;

  /**
   * <p>ID of a session within the stage.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>Unique identifier for this participant. This is assigned by IVS and returned by <a>CreateParticipantToken</a>.</p>
   */
  participantId: string | undefined;

  /**
   * <p>The first participant to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The name of the event.</p>
   */
  name?: EventName | string;

  /**
   * <p>Unique identifier for the participant who triggered the event. This is assigned by
   *          IVS.</p>
   */
  participantId?: string;

  /**
   * <p>ISO 8601 timestamp (returned as a string) for when the event occurred.</p>
   */
  eventTime?: Date;

  /**
   * <p>Unique identifier for the remote participant. For a subscribe event, this is the
   *          publisher. For a publish or join event, this is null. This is assigned by IVS.</p>
   */
  remoteParticipantId?: string;

  /**
   * <p>If the event is an error event, the error code is provided to give insight into the
   *          specific error that occurred. If the event is not an error event, this field is null.
   *          <code>INSUFFICIENT_CAPABILITIES</code> indicates that the participant tried to take an action that the
   *          participant’s token is not allowed to do. For more information about participant
   *          capabilities, see the <code>capabilities</code> field in <a>CreateParticipantToken</a>.</p>
   */
  errorCode?: EventErrorCode | string;
}

/**
 * @public
 */
export interface ListParticipantEventsResponse {
  /**
   * <p>List of the matching events.</p>
   */
  events: Event[] | undefined;

  /**
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
   * <p>Stage ARN.</p>
   */
  stageArn: string | undefined;

  /**
   * <p>ID of the session within the stage.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>Filters the response list to match the specified user ID. Only one of
   *             <code>filterByUserId</code>, <code>filterByPublished</code>, or
   *             <code>filterByState</code> can be provided per request. A <code>userId</code> is a
   *          customer-assigned name to help identify the token; this can be used to link a participant
   *          to a user in the customer’s own systems.</p>
   */
  filterByUserId?: string;

  /**
   * <p>Filters the response list to only show participants who published during the stage
   *          session. Only one of <code>filterByUserId</code>, <code>filterByPublished</code>, or
   *             <code>filterByState</code> can be provided per request.</p>
   */
  filterByPublished?: boolean;

  /**
   * <p>Filters the response list to only show participants in the specified state. Only one of
   *             <code>filterByUserId</code>, <code>filterByPublished</code>, or
   *             <code>filterByState</code> can be provided per request.</p>
   */
  filterByState?: ParticipantState | string;

  /**
   * <p>The first participant to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
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
   * <p>Unique identifier for this participant, assigned by IVS.</p>
   */
  participantId?: string;

  /**
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   */
  userId?: string;

  /**
   * <p>Whether the participant is connected to or disconnected from the stage.</p>
   */
  state?: ParticipantState | string;

  /**
   * <p>ISO 8601 timestamp (returned as a string) when the participant first joined the stage
   *          session.</p>
   */
  firstJoinTime?: Date;

  /**
   * <p>Whether the participant ever published to the stage session.</p>
   */
  published?: boolean;
}

/**
 * @public
 */
export interface ListParticipantsResponse {
  /**
   * <p>List of the matching participants (summary information only).</p>
   */
  participants: ParticipantSummary[] | undefined;

  /**
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
   * <p>The first stage to retrieve. This is used for pagination; see the <code>nextToken</code>
   *          response field.</p>
   */
  nextToken?: string;

  /**
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
   * <p>Stage ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Stage name.</p>
   */
  name?: string;

  /**
   * <p>ID of the active session within the stage.</p>
   */
  activeSessionId?: string;

  /**
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
   * <p>List of the matching stages (summary information only).</p>
   */
  stages: StageSummary[] | undefined;

  /**
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
   * <p>Stage ARN.</p>
   */
  stageArn: string | undefined;

  /**
   * <p>The first stage to retrieve. This is used for pagination; see the <code>nextToken</code>
   *          response field.</p>
   */
  nextToken?: string;

  /**
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
   * <p>ID of the session within the stage.</p>
   */
  sessionId?: string;

  /**
   * <p> ISO 8601 timestamp (returned as a string) when this stage session began.</p>
   */
  startTime?: Date;

  /**
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
   * <p>List of matching stage sessions.</p>
   */
  stageSessions: StageSessionSummary[] | undefined;

  /**
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
   * <p>The ARN of the resource to be retrieved. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
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
   * <p>The ARN of the resource to be tagged. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;

  /**
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
   * <p>The ARN of the resource to be untagged. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;

  /**
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
   * <p>ARN of the stage to be updated.</p>
   */
  arn: string | undefined;

  /**
   * <p>Name of the stage to be updated.</p>
   */
  name?: string;
}

/**
 * @public
 */
export interface UpdateStageResponse {
  /**
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
