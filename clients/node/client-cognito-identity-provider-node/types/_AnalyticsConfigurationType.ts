/**
 * <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p>
 */
export interface _AnalyticsConfigurationType {
  /**
   * <p>The application ID for an Amazon Pinpoint application.</p>
   */
  ApplicationId: string;

  /**
   * <p>The ARN of an IAM role that authorizes Amazon Cognito to publish events to Amazon Pinpoint analytics.</p>
   */
  RoleArn: string;

  /**
   * <p>The external ID.</p>
   */
  ExternalId: string;

  /**
   * <p>If <code>UserDataShared</code> is <code>true</code>, Amazon Cognito will include user data in the events it publishes to Amazon Pinpoint analytics.</p>
   */
  UserDataShared?: boolean;
}

export type _UnmarshalledAnalyticsConfigurationType = _AnalyticsConfigurationType;
