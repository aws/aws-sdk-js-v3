/**
 * <p>Represents a summary of a <a>Method</a> resource, given a particular date and time.</p>
 */
export interface _MethodSnapshot {
  /**
   * <p>The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.</p>
   */
  authorizationType?: string;

  /**
   * <p>Specifies whether the method requires a valid <a>ApiKey</a>.</p>
   */
  apiKeyRequired?: boolean;
}

export type _UnmarshalledMethodSnapshot = _MethodSnapshot;
