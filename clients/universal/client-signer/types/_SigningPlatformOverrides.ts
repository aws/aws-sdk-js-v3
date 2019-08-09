import {
  _SigningConfigurationOverrides,
  _UnmarshalledSigningConfigurationOverrides
} from "./_SigningConfigurationOverrides";

/**
 * <p>Any overrides that are applied to the signing configuration of an AWS Signer platform.</p>
 */
export interface _SigningPlatformOverrides {
  /**
   * <p>A signing configuration that overrides the default encryption or hash algorithm of a signing job.</p>
   */
  signingConfiguration?: _SigningConfigurationOverrides;
}

export interface _UnmarshalledSigningPlatformOverrides
  extends _SigningPlatformOverrides {
  /**
   * <p>A signing configuration that overrides the default encryption or hash algorithm of a signing job.</p>
   */
  signingConfiguration?: _UnmarshalledSigningConfigurationOverrides;
}
