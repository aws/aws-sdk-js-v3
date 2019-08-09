/**
 * <p>Identifying information for a Device Defender security profile.</p>
 */
export interface _SecurityProfileIdentifier {
  /**
   * <p>The name you have given to the security profile.</p>
   */
  name: string;

  /**
   * <p>The ARN of the security profile.</p>
   */
  arn: string;
}

export type _UnmarshalledSecurityProfileIdentifier = _SecurityProfileIdentifier;
