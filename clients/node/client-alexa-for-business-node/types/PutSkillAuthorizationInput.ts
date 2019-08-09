import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutSkillAuthorizationInput shape
 */
export interface PutSkillAuthorizationInput {
  /**
   * <p>The authorization result specific to OAUTH code grant output. "Code” must be populated in the AuthorizationResult map to establish the authorization.</p>
   */
  AuthorizationResult: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The unique identifier of a skill.</p>
   */
  SkillId: string;

  /**
   * <p>The room that the skill is authorized for.</p>
   */
  RoomArn?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
