import { _ResourceQuota, _UnmarshalledResourceQuota } from "./_ResourceQuota";

/**
 * <p>A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect Elastic Beanstalk resource limits for this account.</p>
 */
export interface _ResourceQuotas {
  /**
   * <p>The quota for applications in the AWS account.</p>
   */
  ApplicationQuota?: _ResourceQuota;

  /**
   * <p>The quota for application versions in the AWS account.</p>
   */
  ApplicationVersionQuota?: _ResourceQuota;

  /**
   * <p>The quota for environments in the AWS account.</p>
   */
  EnvironmentQuota?: _ResourceQuota;

  /**
   * <p>The quota for configuration templates in the AWS account.</p>
   */
  ConfigurationTemplateQuota?: _ResourceQuota;

  /**
   * <p>The quota for custom platforms in the AWS account.</p>
   */
  CustomPlatformQuota?: _ResourceQuota;
}

export interface _UnmarshalledResourceQuotas extends _ResourceQuotas {
  /**
   * <p>The quota for applications in the AWS account.</p>
   */
  ApplicationQuota?: _UnmarshalledResourceQuota;

  /**
   * <p>The quota for application versions in the AWS account.</p>
   */
  ApplicationVersionQuota?: _UnmarshalledResourceQuota;

  /**
   * <p>The quota for environments in the AWS account.</p>
   */
  EnvironmentQuota?: _UnmarshalledResourceQuota;

  /**
   * <p>The quota for configuration templates in the AWS account.</p>
   */
  ConfigurationTemplateQuota?: _UnmarshalledResourceQuota;

  /**
   * <p>The quota for custom platforms in the AWS account.</p>
   */
  CustomPlatformQuota?: _UnmarshalledResourceQuota;
}
