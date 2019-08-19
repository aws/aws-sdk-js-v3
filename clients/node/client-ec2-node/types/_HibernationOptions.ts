/**
 * <p>Indicates whether your instance is configured for hibernation. This parameter is valid only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation prerequisites</a>. Hibernation is currently supported only for Amazon Linux. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate Your Instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface _HibernationOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, your instance is enabled for hibernation; otherwise, it is not enabled for hibernation.</p>
   */
  Configured?: boolean;
}

export type _UnmarshalledHibernationOptions = _HibernationOptions;
