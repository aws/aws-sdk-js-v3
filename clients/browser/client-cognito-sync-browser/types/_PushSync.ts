/**
 * <p>Configuration options to be applied to the identity pool.</p>
 */
export interface _PushSync {
  /**
   * <p>List of SNS platform application ARNs that could be used by clients.</p>
   */
  ApplicationArns?: Array<string> | Iterable<string>;

  /**
   * <p>A role configured to allow Cognito to call SNS on behalf of the developer.</p>
   */
  RoleArn?: string;
}

export interface _UnmarshalledPushSync extends _PushSync {
  /**
   * <p>List of SNS platform application ARNs that could be used by clients.</p>
   */
  ApplicationArns?: Array<string>;
}
