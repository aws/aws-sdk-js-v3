/**
 * <p>The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account.</p>
 */
export interface _ResourceQuota {
  /**
   * <p>The maximum number of instances of this Elastic Beanstalk resource type that an AWS account can use.</p>
   */
  Maximum?: number;
}

export type _UnmarshalledResourceQuota = _ResourceQuota;
