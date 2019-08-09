import {
  _StorageConnector,
  _UnmarshalledStorageConnector
} from "./_StorageConnector";
import { _StackError, _UnmarshalledStackError } from "./_StackError";
import { _UserSetting, _UnmarshalledUserSetting } from "./_UserSetting";
import {
  _ApplicationSettingsResponse,
  _UnmarshalledApplicationSettingsResponse
} from "./_ApplicationSettingsResponse";

/**
 * <p>Describes a stack.</p>
 */
export interface _Stack {
  /**
   * <p>The ARN of the stack.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the stack.</p>
   */
  Name: string;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The stack name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The time the stack was created.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>The storage connectors to enable.</p>
   */
  StorageConnectors?: Array<_StorageConnector> | Iterable<_StorageConnector>;

  /**
   * <p>The URL that users are redirected to after their streaming session ends.</p>
   */
  RedirectURL?: string;

  /**
   * <p>The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</p>
   */
  FeedbackURL?: string;

  /**
   * <p>The errors for the stack.</p>
   */
  StackErrors?: Array<_StackError> | Iterable<_StackError>;

  /**
   * <p>The actions that are enabled or disabled for users during their streaming sessions. By default these actions are enabled.</p>
   */
  UserSettings?: Array<_UserSetting> | Iterable<_UserSetting>;

  /**
   * <p>The persistent application settings for users of the stack.</p>
   */
  ApplicationSettings?: _ApplicationSettingsResponse;
}

export interface _UnmarshalledStack extends _Stack {
  /**
   * <p>The time the stack was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The storage connectors to enable.</p>
   */
  StorageConnectors?: Array<_UnmarshalledStorageConnector>;

  /**
   * <p>The errors for the stack.</p>
   */
  StackErrors?: Array<_UnmarshalledStackError>;

  /**
   * <p>The actions that are enabled or disabled for users during their streaming sessions. By default these actions are enabled.</p>
   */
  UserSettings?: Array<_UnmarshalledUserSetting>;

  /**
   * <p>The persistent application settings for users of the stack.</p>
   */
  ApplicationSettings?: _UnmarshalledApplicationSettingsResponse;
}
