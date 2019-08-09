/**
 * <p>Indicates whether the instance is configured for hibernation. This parameter is valid only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation prerequisites</a>. Hibernation is currently supported only for Amazon Linux.</p>
 */
export interface _LaunchTemplateHibernationOptionsRequest {
  /**
   * <p>If you set this parameter to <code>true</code>, the instance is enabled for hibernation.</p> <p>Default: <code>false</code> </p>
   */
  Configured?: boolean;
}

export type _UnmarshalledLaunchTemplateHibernationOptionsRequest = _LaunchTemplateHibernationOptionsRequest;
