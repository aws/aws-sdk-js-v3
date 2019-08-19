import {
  _EncryptionConfiguration,
  _UnmarshalledEncryptionConfiguration
} from "./_EncryptionConfiguration";

/**
 * <p>Specifies a security configuration.</p>
 */
export interface _SecurityConfiguration {
  /**
   * <p>The name of the security configuration.</p>
   */
  Name?: string;

  /**
   * <p>The time at which this security configuration was created.</p>
   */
  CreatedTimeStamp?: Date | string | number;

  /**
   * <p>The encryption configuration associated with this security configuration.</p>
   */
  EncryptionConfiguration?: _EncryptionConfiguration;
}

export interface _UnmarshalledSecurityConfiguration
  extends _SecurityConfiguration {
  /**
   * <p>The time at which this security configuration was created.</p>
   */
  CreatedTimeStamp?: Date;

  /**
   * <p>The encryption configuration associated with this security configuration.</p>
   */
  EncryptionConfiguration?: _UnmarshalledEncryptionConfiguration;
}
