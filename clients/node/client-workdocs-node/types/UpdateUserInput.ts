import { _StorageRuleType } from "./_StorageRuleType";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateUserInput shape
 */
export interface UpdateUserInput {
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the user.</p>
   */
  UserId: string;

  /**
   * <p>The given name of the user.</p>
   */
  GivenName?: string;

  /**
   * <p>The surname of the user.</p>
   */
  Surname?: string;

  /**
   * <p>The type of the user.</p>
   */
  Type?:
    | "USER"
    | "ADMIN"
    | "POWERUSER"
    | "MINIMALUSER"
    | "WORKSPACESUSER"
    | string;

  /**
   * <p>The amount of storage for the user.</p>
   */
  StorageRule?: _StorageRuleType;

  /**
   * <p>The time zone ID of the user.</p>
   */
  TimeZoneId?: string;

  /**
   * <p>The locale of the user.</p>
   */
  Locale?:
    | "en"
    | "fr"
    | "ko"
    | "de"
    | "es"
    | "ja"
    | "ru"
    | "zh_CN"
    | "zh_TW"
    | "pt_BR"
    | "default"
    | string;

  /**
   * <p>Boolean value to determine whether the user is granted Poweruser privileges.</p>
   */
  GrantPoweruserPrivileges?: "TRUE" | "FALSE" | string;

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
