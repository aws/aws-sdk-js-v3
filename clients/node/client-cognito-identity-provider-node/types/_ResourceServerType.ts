import {
  _ResourceServerScopeType,
  _UnmarshalledResourceServerScopeType
} from "./_ResourceServerScopeType";

/**
 * <p>A container for information about a resource server for a user pool.</p>
 */
export interface _ResourceServerType {
  /**
   * <p>The user pool ID for the user pool that hosts the resource server.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The identifier for the resource server.</p>
   */
  Identifier?: string;

  /**
   * <p>The name of the resource server.</p>
   */
  Name?: string;

  /**
   * <p>A list of scopes that are defined for the resource server.</p>
   */
  Scopes?: Array<_ResourceServerScopeType> | Iterable<_ResourceServerScopeType>;
}

export interface _UnmarshalledResourceServerType extends _ResourceServerType {
  /**
   * <p>A list of scopes that are defined for the resource server.</p>
   */
  Scopes?: Array<_UnmarshalledResourceServerScopeType>;
}
