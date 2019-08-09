/**
 * <p>Details about the Amazon ElastiCache instances that AWS recommends that you purchase.</p>
 */
export interface _ElastiCacheInstanceDetails {
  /**
   * <p>The instance family of the recommended reservation.</p>
   */
  Family?: string;

  /**
   * <p>The type of node that AWS recommends.</p>
   */
  NodeType?: string;

  /**
   * <p>The AWS Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * <p>The description of the recommended reservation.</p>
   */
  ProductDescription?: string;

  /**
   * <p>Whether the recommendation is for a current generation instance.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>Whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

export type _UnmarshalledElastiCacheInstanceDetails = _ElastiCacheInstanceDetails;
