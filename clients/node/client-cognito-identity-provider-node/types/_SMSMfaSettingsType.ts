/**
 * <p>The SMS multi-factor authentication (MFA) settings type.</p>
 */
export interface _SMSMfaSettingsType {
  /**
   * <p>Specifies whether SMS text message MFA is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The preferred MFA method.</p>
   */
  PreferredMfa?: boolean;
}

export type _UnmarshalledSMSMfaSettingsType = _SMSMfaSettingsType;
