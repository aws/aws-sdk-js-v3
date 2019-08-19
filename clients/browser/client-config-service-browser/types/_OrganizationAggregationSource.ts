/**
 * <p>This object contains regions to set up the aggregator and an IAM role to retrieve organization details.</p>
 */
export interface _OrganizationAggregationSource {
  /**
   * <p>ARN of the IAM role used to retrieve AWS Organization details associated with the aggregator account.</p>
   */
  RoleArn: string;

  /**
   * <p>The source regions being aggregated.</p>
   */
  AwsRegions?: Array<string> | Iterable<string>;

  /**
   * <p>If true, aggregate existing AWS Config regions and future regions.</p>
   */
  AllAwsRegions?: boolean;
}

export interface _UnmarshalledOrganizationAggregationSource
  extends _OrganizationAggregationSource {
  /**
   * <p>The source regions being aggregated.</p>
   */
  AwsRegions?: Array<string>;
}
