/**
 * <p>A collection of authorization information.</p>
 */
export interface _AuthInfo {
  /**
   * <p>The type of action for which the principal is being authorized.</p>
   */
  actionType?: "PUBLISH" | "SUBSCRIBE" | "RECEIVE" | "CONNECT" | string;

  /**
   * <p>The resources for which the principal is being authorized to perform the specified action.</p>
   */
  resources?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledAuthInfo extends _AuthInfo {
  /**
   * <p>The resources for which the principal is being authorized to perform the specified action.</p>
   */
  resources?: Array<string>;
}
