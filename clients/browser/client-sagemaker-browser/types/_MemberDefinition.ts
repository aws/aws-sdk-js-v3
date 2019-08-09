import {
  _CognitoMemberDefinition,
  _UnmarshalledCognitoMemberDefinition
} from "./_CognitoMemberDefinition";

/**
 * <p>Defines the Amazon Cognito user group that is part of a work team.</p>
 */
export interface _MemberDefinition {
  /**
   * <p>The Amazon Cognito user group that is part of the work team.</p>
   */
  CognitoMemberDefinition?: _CognitoMemberDefinition;
}

export interface _UnmarshalledMemberDefinition extends _MemberDefinition {
  /**
   * <p>The Amazon Cognito user group that is part of the work team.</p>
   */
  CognitoMemberDefinition?: _UnmarshalledCognitoMemberDefinition;
}
