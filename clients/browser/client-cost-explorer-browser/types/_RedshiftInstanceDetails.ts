/**
 * <p>Details about the Amazon Redshift instances that AWS recommends that you purchase.</p>
 */
export interface _RedshiftInstanceDetails {
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
   * <p>Whether the recommendation is for a current-generation instance.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>Whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

export type _UnmarshalledRedshiftInstanceDetails = _RedshiftInstanceDetails;
