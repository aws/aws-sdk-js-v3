/**
 * <p>Describes an Amazon Cognito user pool configuration.</p>
 */
export interface _UserPoolConfig {
  /**
   * <p>The user pool ID.</p>
   */
  userPoolId: string;

  /**
   * <p>The AWS Region in which the user pool was created.</p>
   */
  awsRegion: string;

  /**
   * <p>The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.</p>
   */
  defaultAction: "ALLOW" | "DENY" | string;

  /**
   * <p>A regular expression for validating the incoming Amazon Cognito user pool app client ID.</p>
   */
  appIdClientRegex?: string;
}

export type _UnmarshalledUserPoolConfig = _UserPoolConfig;
