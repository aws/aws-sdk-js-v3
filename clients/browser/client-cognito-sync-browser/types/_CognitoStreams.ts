/**
 * Configuration options for configure Cognito streams.
 */
export interface _CognitoStreams {
  /**
   * The name of the Cognito stream to receive updates. This stream must be in the developers account and in the same region as the identity pool.
   */
  StreamName?: string;

  /**
   * The ARN of the role Amazon Cognito can assume in order to publish to the stream. This role must grant access to Amazon Cognito (cognito-sync) to invoke PutRecord on your Cognito stream.
   */
  RoleArn?: string;

  /**
   * Status of the Cognito streams. Valid values are: <p>ENABLED - Streaming of updates to identity pool is enabled.</p> <p>DISABLED - Streaming of updates to identity pool is disabled. Bulk publish will also fail if StreamingStatus is DISABLED.</p>
   */
  StreamingStatus?: "ENABLED" | "DISABLED" | string;
}

export type _UnmarshalledCognitoStreams = _CognitoStreams;
