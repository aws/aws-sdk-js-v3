import { _StorageConnector } from "./_StorageConnector";
import { _UserSetting } from "./_UserSetting";
import { _ApplicationSettings } from "./_ApplicationSettings";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateStackInput shape
 */
export interface UpdateStackInput {
  /**
   * <p>The stack name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The name of the stack.</p>
   */
  Name: string;

  /**
   * <p>The storage connectors to enable.</p>
   */
  StorageConnectors?: Array<_StorageConnector> | Iterable<_StorageConnector>;

  /**
   * <p>Deletes the storage connectors currently enabled for the stack.</p>
   */
  DeleteStorageConnectors?: boolean;

  /**
   * <p>The URL that users are redirected to after their streaming session ends.</p>
   */
  RedirectURL?: string;

  /**
   * <p>The URL that users are redirected to after they choose the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</p>
   */
  FeedbackURL?: string;

  /**
   * <p>The stack attributes to delete.</p>
   */
  AttributesToDelete?:
    | Array<
        | "STORAGE_CONNECTORS"
        | "STORAGE_CONNECTOR_HOMEFOLDERS"
        | "STORAGE_CONNECTOR_GOOGLE_DRIVE"
        | "STORAGE_CONNECTOR_ONE_DRIVE"
        | "REDIRECT_URL"
        | "FEEDBACK_URL"
        | "THEME_NAME"
        | "USER_SETTINGS"
        | string
      >
    | Iterable<
        | "STORAGE_CONNECTORS"
        | "STORAGE_CONNECTOR_HOMEFOLDERS"
        | "STORAGE_CONNECTOR_GOOGLE_DRIVE"
        | "STORAGE_CONNECTOR_ONE_DRIVE"
        | "REDIRECT_URL"
        | "FEEDBACK_URL"
        | "THEME_NAME"
        | "USER_SETTINGS"
        | string
      >;

  /**
   * <p>The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.</p>
   */
  UserSettings?: Array<_UserSetting> | Iterable<_UserSetting>;

  /**
   * <p>The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.</p>
   */
  ApplicationSettings?: _ApplicationSettings;

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
