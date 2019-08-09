/**
 * <p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.</p>
 */
export interface _ProvisioningPreferences {
  /**
   * <p>One or more AWS accounts that will have access to the provisioned product.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The AWS accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>
   */
  StackSetAccounts?: Array<string> | Iterable<string>;

  /**
   * <p>One or more AWS Regions where the provisioned product will be available.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The specified regions should be within the list of regions from the <code>STACKSET</code> constraint. To get the list of regions in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all regions from the <code>STACKSET</code> constraint.</p>
   */
  StackSetRegions?: Array<string> | Iterable<string>;

  /**
   * <p>The number of accounts, per region, for which this operation can fail before AWS Service Catalog stops the operation in that region. If the operation is stopped in a region, AWS Service Catalog doesn't attempt the operation in any subsequent regions.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p> <p>The default value is <code>0</code> if no value is specified.</p>
   */
  StackSetFailureToleranceCount?: number;

  /**
   * <p>The percentage of accounts, per region, for which this stack operation can fail before AWS Service Catalog stops the operation in that region. If the operation is stopped in a region, AWS Service Catalog doesn't attempt the operation in any subsequent regions.</p> <p>When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
   */
  StackSetFailureTolerancePercentage?: number;

  /**
   * <p>The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of <code>StackSetFailureToleranceCount</code>. <code>StackSetMaxConcurrentCount</code> is at most one more than the <code>StackSetFailureToleranceCount</code>.</p> <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
   */
  StackSetMaxConcurrencyCount?: number;

  /**
   * <p>The maximum percentage of accounts in which to perform this operation at one time.</p> <p>When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, AWS Service Catalog sets the number as <code>1</code> instead.</p> <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
   */
  StackSetMaxConcurrencyPercentage?: number;
}

export interface _UnmarshalledProvisioningPreferences
  extends _ProvisioningPreferences {
  /**
   * <p>One or more AWS accounts that will have access to the provisioned product.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The AWS accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>
   */
  StackSetAccounts?: Array<string>;

  /**
   * <p>One or more AWS Regions where the provisioned product will be available.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The specified regions should be within the list of regions from the <code>STACKSET</code> constraint. To get the list of regions in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all regions from the <code>STACKSET</code> constraint.</p>
   */
  StackSetRegions?: Array<string>;
}
