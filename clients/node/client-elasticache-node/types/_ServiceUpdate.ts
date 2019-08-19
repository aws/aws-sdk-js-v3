/**
 * <p>An update that you can apply to your Redis clusters.</p>
 */
export interface _ServiceUpdate {
  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The date when the service update is initially available</p>
   */
  ServiceUpdateReleaseDate?: Date | string | number;

  /**
   * <p>The date after which the service update is no longer available</p>
   */
  ServiceUpdateEndDate?: Date | string | number;

  /**
   * <p>The severity of the service update</p>
   */
  ServiceUpdateSeverity?: "critical" | "important" | "medium" | "low" | string;

  /**
   * <p>The recommendend date to apply the service update in order to ensure compliance. For information on compliance, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-compliance.html#elasticache-compliance-self-service">Self-Service Security Updates for Compliance</a>.</p>
   */
  ServiceUpdateRecommendedApplyByDate?: Date | string | number;

  /**
   * <p>The status of the service update</p>
   */
  ServiceUpdateStatus?: "available" | "cancelled" | "expired" | string;

  /**
   * <p>Provides details of the service update</p>
   */
  ServiceUpdateDescription?: string;

  /**
   * <p>Reflects the nature of the service update</p>
   */
  ServiceUpdateType?: "security-update" | string;

  /**
   * <p>The Redis engine to which the service update applies</p>
   */
  Engine?: string;

  /**
   * <p>The Redis engine version to which the service update applies</p>
   */
  EngineVersion?: string;

  /**
   * <p>Indicates whether the service update will be automatically applied once the recommended apply-by date has expired. </p>
   */
  AutoUpdateAfterRecommendedApplyByDate?: boolean;

  /**
   * <p>The estimated length of time the service update will take</p>
   */
  EstimatedUpdateTime?: string;
}

export interface _UnmarshalledServiceUpdate extends _ServiceUpdate {
  /**
   * <p>The date when the service update is initially available</p>
   */
  ServiceUpdateReleaseDate?: Date;

  /**
   * <p>The date after which the service update is no longer available</p>
   */
  ServiceUpdateEndDate?: Date;

  /**
   * <p>The recommendend date to apply the service update in order to ensure compliance. For information on compliance, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-compliance.html#elasticache-compliance-self-service">Self-Service Security Updates for Compliance</a>.</p>
   */
  ServiceUpdateRecommendedApplyByDate?: Date;
}
