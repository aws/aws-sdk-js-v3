/**
 * <p>The type used for enabling software token MFA at the user level.</p>
 */
export interface _SoftwareTokenMfaSettingsType {
  /**
   * <p>Specifies whether software token MFA is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The preferred MFA method.</p>
   */
  PreferredMfa?: boolean;
}

export type _UnmarshalledSoftwareTokenMfaSettingsType = _SoftwareTokenMfaSettingsType;
