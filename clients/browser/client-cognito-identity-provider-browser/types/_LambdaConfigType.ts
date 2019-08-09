/**
 * <p>Specifies the configuration for AWS Lambda triggers.</p>
 */
export interface _LambdaConfigType {
  /**
   * <p>A pre-registration AWS Lambda trigger.</p>
   */
  PreSignUp?: string;

  /**
   * <p>A custom Message AWS Lambda trigger.</p>
   */
  CustomMessage?: string;

  /**
   * <p>A post-confirmation AWS Lambda trigger.</p>
   */
  PostConfirmation?: string;

  /**
   * <p>A pre-authentication AWS Lambda trigger.</p>
   */
  PreAuthentication?: string;

  /**
   * <p>A post-authentication AWS Lambda trigger.</p>
   */
  PostAuthentication?: string;

  /**
   * <p>Defines the authentication challenge.</p>
   */
  DefineAuthChallenge?: string;

  /**
   * <p>Creates an authentication challenge.</p>
   */
  CreateAuthChallenge?: string;

  /**
   * <p>Verifies the authentication challenge response.</p>
   */
  VerifyAuthChallengeResponse?: string;

  /**
   * <p>A Lambda trigger that is invoked before token generation.</p>
   */
  PreTokenGeneration?: string;

  /**
   * <p>The user migration Lambda config type.</p>
   */
  UserMigration?: string;
}

export type _UnmarshalledLambdaConfigType = _LambdaConfigType;
