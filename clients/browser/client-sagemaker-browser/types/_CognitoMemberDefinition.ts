/**
 * <p>Identifies a Amazon Cognito user group. A user group can be used in on or more work teams.</p>
 */
export interface _CognitoMemberDefinition {
  /**
   * <p>An identifier for a user pool. The user pool must be in the same region as the service that you are calling.</p>
   */
  UserPool: string;

  /**
   * <p>An identifier for a user group.</p>
   */
  UserGroup: string;

  /**
   * <p>An identifier for an application client. You must create the app client ID using Amazon Cognito.</p>
   */
  ClientId: string;
}

export type _UnmarshalledCognitoMemberDefinition = _CognitoMemberDefinition;
