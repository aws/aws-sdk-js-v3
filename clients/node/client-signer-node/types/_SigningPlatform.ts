import {
  _SigningConfiguration,
  _UnmarshalledSigningConfiguration
} from "./_SigningConfiguration";
import {
  _SigningImageFormat,
  _UnmarshalledSigningImageFormat
} from "./_SigningImageFormat";

/**
 * <p>Contains information about the signing configurations and parameters that is used to perform an AWS Signer job.</p>
 */
export interface _SigningPlatform {
  /**
   * <p>The ID of an AWS Signer platform.</p>
   */
  platformId?: string;

  /**
   * <p>The display name of an AWS Signer platform.</p>
   */
  displayName?: string;

  /**
   * <p>Any partner entities linked to an AWS Signer platform.</p>
   */
  partner?: string;

  /**
   * <p>The types of targets that can be signed by an AWS Signer platform.</p>
   */
  target?: string;

  /**
   * <p>The category of an AWS Signer platform.</p>
   */
  category?: "AWSIoT" | string;

  /**
   * <p>The configuration of an AWS Signer platform. This includes the designated hash algorithm and encryption algorithm of a signing platform.</p>
   */
  signingConfiguration?: _SigningConfiguration;

  /**
   * <p>The signing image format that is used by an AWS Signer platform.</p>
   */
  signingImageFormat?: _SigningImageFormat;

  /**
   * <p>The maximum size (in MB) of code that can be signed by a AWS Signer platform.</p>
   */
  maxSizeInMB?: number;
}

export interface _UnmarshalledSigningPlatform extends _SigningPlatform {
  /**
   * <p>The configuration of an AWS Signer platform. This includes the designated hash algorithm and encryption algorithm of a signing platform.</p>
   */
  signingConfiguration?: _UnmarshalledSigningConfiguration;

  /**
   * <p>The signing image format that is used by an AWS Signer platform.</p>
   */
  signingImageFormat?: _UnmarshalledSigningImageFormat;
}
