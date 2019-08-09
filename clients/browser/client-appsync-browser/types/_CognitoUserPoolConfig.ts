/**
 * <p>Describes an Amazon Cognito user pool configuration.</p>
 */
export interface _CognitoUserPoolConfig {
  /**
   * <p>The user pool ID.</p>
   */
  userPoolId: string;

  /**
   * <p>The AWS Region in which the user pool was created.</p>
   */
  awsRegion: string;

  /**
   * <p>A regular expression for validating the incoming Amazon Cognito user pool app client ID.</p>
   */
  appIdClientRegex?: string;
}

export type _UnmarshalledCognitoUserPoolConfig = _CognitoUserPoolConfig;
