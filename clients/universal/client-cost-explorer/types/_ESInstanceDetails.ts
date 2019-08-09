/**
 * <p>Details about the Amazon ES instances that AWS recommends that you purchase.</p>
 */
export interface _ESInstanceDetails {
  /**
   * <p>The class of instance that AWS recommends.</p>
   */
  InstanceClass?: string;

  /**
   * <p>The size of instance that AWS recommends.</p>
   */
  InstanceSize?: string;

  /**
   * <p>The AWS Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * <p>Whether the recommendation is for a current-generation instance.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>Whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

export type _UnmarshalledESInstanceDetails = _ESInstanceDetails;
