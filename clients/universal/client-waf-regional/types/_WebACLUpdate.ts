import { _ActivatedRule, _UnmarshalledActivatedRule } from "./_ActivatedRule";

/**
 * <p>Specifies whether to insert a <code>Rule</code> into or delete a <code>Rule</code> from a <code>WebACL</code>.</p>
 */
export interface _WebACLUpdate {
  /**
   * <p>Specifies whether to insert a <code>Rule</code> into or delete a <code>Rule</code> from a <code>WebACL</code>.</p>
   */
  Action: "INSERT" | "DELETE" | string;

  /**
   * <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p>
   */
  ActivatedRule: _ActivatedRule;
}

export interface _UnmarshalledWebACLUpdate extends _WebACLUpdate {
  /**
   * <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p>
   */
  ActivatedRule: _UnmarshalledActivatedRule;
}
