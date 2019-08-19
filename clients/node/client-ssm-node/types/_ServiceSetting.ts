/**
 * <p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p>
 */
export interface _ServiceSetting {
  /**
   * <p>The ID of the service setting.</p>
   */
  SettingId?: string;

  /**
   * <p>The value of the service setting.</p>
   */
  SettingValue?: string;

  /**
   * <p>The last time the service setting was modified.</p>
   */
  LastModifiedDate?: Date | string | number;

  /**
   * <p>The ARN of the last modified user. This field is populated only if the setting value was overwritten.</p>
   */
  LastModifiedUser?: string;

  /**
   * <p>The ARN of the service setting.</p>
   */
  ARN?: string;

  /**
   * <p>The status of the service setting. The value can be Default, Customized or PendingUpdate.</p> <ul> <li> <p>Default: The current setting uses a default value provisioned by the AWS service team.</p> </li> <li> <p>Customized: The current setting use a custom value specified by the customer.</p> </li> <li> <p>PendingUpdate: The current setting uses a default or custom value, but a setting change request is pending approval.</p> </li> </ul>
   */
  Status?: string;
}

export interface _UnmarshalledServiceSetting extends _ServiceSetting {
  /**
   * <p>The last time the service setting was modified.</p>
   */
  LastModifiedDate?: Date;
}
