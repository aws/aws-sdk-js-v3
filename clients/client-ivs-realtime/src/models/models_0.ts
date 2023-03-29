// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

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
   * <p>Duration (in minutes), after which the token expires. Default: 60 (1 hour).</p>
   */
  duration?: number;

  /**
   * <p>Name that can be specified to help identify the token. This can be any UTF-8 encoded text. <i>This field is exposed to all stage
   * 	        participants and should not be used for personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  userId?: string;

  /**
   * <p>Application-provided attributes to encode into the token and attach to a stage. Map keys and values can contain UTF-8
   * 	        encoded text. The maximum length of this field is 1 KB total. <i>This field is exposed to all stage participants and
   * 			should not be used for personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>Set of capabilities that the user is allowed to perform in the stage. Default: <code>PUBLISH, SUBSCRIBE</code>.</p>
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
   * <p>Name to help identify the token. This can be any UTF-8 encoded text. <i>This field is exposed to all
   *             stage participants and should not be used for personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  userId?: string;

  /**
   * <p>Application-provided attributes to encode into the token and attach to a stage. <i>This field is exposed to all
   *             stage participants and should not be used for personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>Duration (in minutes), after which the participant token expires. Default: 60 (1 hour).</p>
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
   * <p>Duration (in minutes), after which the corresponding participant token expires. Default: 60 (1 hour).</p>
   */
  duration?: number;

  /**
   * <p>Name that can be specified to help identify the corresponding participant token. This can be any UTF-8 encoded text. <i>This field is exposed to all
   *             stage participants and should not be used for personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  userId?: string;

  /**
   * <p>Application-provided attributes to encode into the corresponding participant token and attach to a stage. Map keys and values can contain UTF-8 encoded text.
   *             The maximum length of this field is 1 KB total. <i>This field is exposed to all stage participants and should not be used for personally
   *             identifying, confidential, or sensitive information.</i>
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
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is
   *          documented there.
   *       </p>
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
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is
   *          documented there.</p>
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
   * <p>Participant tokens attached to the stage. These correspond to the <code>participants</code> in the request.</p>
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
   * <p>Identifier of the participant to be disconnected. This is returned by <a>CreateParticipantToken</a>.</p>
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
   * <p/>
   */
  stage?: Stage;
}

/**
 * @public
 */
export interface ListStagesRequest {
  /**
   * <p>The first stage to retrieve. This is used for pagination; see the <code>nextToken</code> response field.</p>
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
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is
   *          documented there.</p>
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
   * <p>If there are more rooms than <code>maxResults</code>, use <code>nextToken</code> in the request to get the next set.</p>
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
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string (key:value)</code>.</p>
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
   * <p>The updated stage.
   * </p>
   */
  stage?: Stage;
}
