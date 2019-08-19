import {
  _SmsConfigurationType,
  _UnmarshalledSmsConfigurationType
} from "./_SmsConfigurationType";

/**
 * <p>The SMS text message multi-factor authentication (MFA) configuration type.</p>
 */
export interface _SmsMfaConfigType {
  /**
   * <p>The SMS authentication message.</p>
   */
  SmsAuthenticationMessage?: string;

  /**
   * <p>The SMS configuration.</p>
   */
  SmsConfiguration?: _SmsConfigurationType;
}

export interface _UnmarshalledSmsMfaConfigType extends _SmsMfaConfigType {
  /**
   * <p>The SMS configuration.</p>
   */
  SmsConfiguration?: _UnmarshalledSmsConfigurationType;
}
