// smithy-typescript generated code
import { WebACL } from "./models_0";

/**
 * @public
 */
export interface GetWebACLResponse {
  /**
   * <p>The web ACL specification. You can modify the settings in this web ACL and use it to
   *          update this web ACL or create a new one.</p>
   * @public
   */
  WebACL?: WebACL | undefined;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   * @public
   */
  LockToken?: string | undefined;

  /**
   * <p>The URL to use in SDK integrations with Amazon Web Services managed rule groups. For example, you can use the integration SDKs with the account takeover prevention managed rule group <code>AWSManagedRulesATPRuleSet</code> and the account creation fraud prevention managed rule group <code>AWSManagedRulesACFPRuleSet</code>. This is only populated if you are using a rule group in your web ACL that integrates with your applications in this way. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a>
   * in the <i>WAF Developer Guide</i>.</p>
   * @public
   */
  ApplicationIntegrationURL?: string | undefined;
}
