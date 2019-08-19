/**
 * <p>The creation date and time, and name, of a security configuration.</p>
 */
export interface _SecurityConfigurationSummary {
  /**
   * <p>The name of the security configuration.</p>
   */
  Name?: string;

  /**
   * <p>The date and time the security configuration was created.</p>
   */
  CreationDateTime?: Date | string | number;
}

export interface _UnmarshalledSecurityConfigurationSummary
  extends _SecurityConfigurationSummary {
  /**
   * <p>The date and time the security configuration was created.</p>
   */
  CreationDateTime?: Date;
}
