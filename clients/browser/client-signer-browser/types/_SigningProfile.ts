import {
  _SigningMaterial,
  _UnmarshalledSigningMaterial
} from "./_SigningMaterial";

/**
 * <p>Contains information about the ACM certificates and AWS Signer configuration parameters that can be used by a given AWS Signer user.</p>
 */
export interface _SigningProfile {
  /**
   * <p>The name of the AWS Signer profile.</p>
   */
  profileName?: string;

  /**
   * <p>The ACM certificate that is available for use by a signing profile.</p>
   */
  signingMaterial?: _SigningMaterial;

  /**
   * <p>The ID of a platform that is available for use by a signing profile.</p>
   */
  platformId?: string;

  /**
   * <p>The parameters that are available for use by an AWS Signer user.</p>
   */
  signingParameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The status of an AWS Signer profile.</p>
   */
  status?: "Active" | "Canceled" | string;
}

export interface _UnmarshalledSigningProfile extends _SigningProfile {
  /**
   * <p>The ACM certificate that is available for use by a signing profile.</p>
   */
  signingMaterial?: _UnmarshalledSigningMaterial;

  /**
   * <p>The parameters that are available for use by an AWS Signer user.</p>
   */
  signingParameters?: { [key: string]: string };
}
