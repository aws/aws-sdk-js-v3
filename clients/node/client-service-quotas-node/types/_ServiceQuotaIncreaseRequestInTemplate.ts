/**
 * <p>A structure that contains information about one service quota increase request.</p>
 */
export interface _ServiceQuotaIncreaseRequestInTemplate {
  /**
   * <p>The code identifier for the AWS service specified in the increase request.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The name of the AWS service specified in the increase request. </p>
   */
  ServiceName?: string;

  /**
   * <p>The code identifier for the service quota specified in the increase request.</p>
   */
  QuotaCode?: string;

  /**
   * <p>The name of the service quota in the increase request.</p>
   */
  QuotaName?: string;

  /**
   * <p>Identifies the new, increased value of the service quota in the increase request. </p>
   */
  DesiredValue?: number;

  /**
   * <p>The AWS Region where the increase request occurs.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The unit of measure for the increase request.</p>
   */
  Unit?: string;

  /**
   * <p>Specifies if the quota is a global quota.</p>
   */
  GlobalQuota?: boolean;
}

export type _UnmarshalledServiceQuotaIncreaseRequestInTemplate = _ServiceQuotaIncreaseRequestInTemplate;
