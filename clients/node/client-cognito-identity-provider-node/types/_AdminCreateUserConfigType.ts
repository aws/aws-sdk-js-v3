import {
  _MessageTemplateType,
  _UnmarshalledMessageTemplateType
} from "./_MessageTemplateType";

/**
 * <p>The configuration for creating a new user profile.</p>
 */
export interface _AdminCreateUserConfigType {
  /**
   * <p>Set to <code>True</code> if only the administrator is allowed to create user profiles. Set to <code>False</code> if users can sign themselves up via an app.</p>
   */
  AllowAdminCreateUserOnly?: boolean;

  /**
   * <p>The user account expiration limit, in days, after which the account is no longer usable. To reset the account after that time limit, you must call <code>AdminCreateUser</code> again, specifying <code>"RESEND"</code> for the <code>MessageAction</code> parameter. The default value for this parameter is 7. </p> <note> <p>If you set a value for <code>TemporaryPasswordValidityDays</code> in <code>PasswordPolicy</code>, that value will be used and <code>UnusedAccountValidityDays</code> will be deprecated for that user pool. </p> </note>
   */
  UnusedAccountValidityDays?: number;

  /**
   * <p>The message template to be used for the welcome message to new users.</p> <p>See also <a href="http://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-message-customizations.html#cognito-user-pool-settings-user-invitation-message-customization">Customizing User Invitation Messages</a>.</p>
   */
  InviteMessageTemplate?: _MessageTemplateType;
}

export interface _UnmarshalledAdminCreateUserConfigType
  extends _AdminCreateUserConfigType {
  /**
   * <p>The message template to be used for the welcome message to new users.</p> <p>See also <a href="http://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-message-customizations.html#cognito-user-pool-settings-user-invitation-message-customization">Customizing User Invitation Messages</a>.</p>
   */
  InviteMessageTemplate?: _UnmarshalledMessageTemplateType;
}
