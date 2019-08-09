import { _Predicate, _UnmarshalledPredicate } from "./_Predicate";

/**
 * <p>Specifies a <code>Predicate</code> (such as an <code>IPSet</code>) and indicates whether you want to add it to a <code>Rule</code> or delete it from a <code>Rule</code>.</p>
 */
export interface _RuleUpdate {
  /**
   * <p>Specify <code>INSERT</code> to add a <code>Predicate</code> to a <code>Rule</code>. Use <code>DELETE</code> to remove a <code>Predicate</code> from a <code>Rule</code>.</p>
   */
  Action: "INSERT" | "DELETE" | string;

  /**
   * <p>The ID of the <code>Predicate</code> (such as an <code>IPSet</code>) that you want to add to a <code>Rule</code>.</p>
   */
  Predicate: _Predicate;
}

export interface _UnmarshalledRuleUpdate extends _RuleUpdate {
  /**
   * <p>The ID of the <code>Predicate</code> (such as an <code>IPSet</code>) that you want to add to a <code>Rule</code>.</p>
   */
  Predicate: _UnmarshalledPredicate;
}
