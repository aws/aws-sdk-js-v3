/**
 * <p>Describes the code-signing profile.</p>
 */
export interface _SigningProfileParameter {
  /**
   * <p>Certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The hardware platform of your device.</p>
   */
  platform?: string;

  /**
   * <p>The location of the code-signing certificate on your device.</p>
   */
  certificatePathOnDevice?: string;
}

export type _UnmarshalledSigningProfileParameter = _SigningProfileParameter;
