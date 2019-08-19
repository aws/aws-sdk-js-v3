import { _Condition, _UnmarshalledCondition } from "./_Condition";
import { _Redirect, _UnmarshalledRedirect } from "./_Redirect";

/**
 * <p>Specifies the redirect behavior and when a redirect is applied.</p>
 */
export interface _RoutingRule {
  /**
   * <p>A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the <code>/docs</code> folder, redirect to the <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.</p>
   */
  Condition?: _Condition;

  /**
   * <p>Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can specify a different error code to return.</p>
   */
  Redirect: _Redirect;
}

export interface _UnmarshalledRoutingRule extends _RoutingRule {
  /**
   * <p>A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the <code>/docs</code> folder, redirect to the <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.</p>
   */
  Condition?: _UnmarshalledCondition;

  /**
   * <p>Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can specify a different error code to return.</p>
   */
  Redirect: _UnmarshalledRedirect;
}
