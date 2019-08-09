/**
 * <p>Contains details about the type of identity that made the request.</p>
 */
export interface _Identity {
  /**
   * <p>A unique identifier for the entity that made the call. For Time To Live, the principalId is "dynamodb.amazonaws.com".</p>
   */
  PrincipalId?: string;

  /**
   * <p>The type of the identity. For Time To Live, the type is "Service".</p>
   */
  Type?: string;
}

export type _UnmarshalledIdentity = _Identity;
