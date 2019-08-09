/**
 * <p/>
 */
export interface _PublicAccessBlockConfiguration {
  /**
   * <p/>
   */
  BlockPublicAcls?: boolean;

  /**
   * <p/>
   */
  IgnorePublicAcls?: boolean;

  /**
   * <p/>
   */
  BlockPublicPolicy?: boolean;

  /**
   * <p/>
   */
  RestrictPublicBuckets?: boolean;
}

export type _UnmarshalledPublicAccessBlockConfiguration = _PublicAccessBlockConfiguration;
