import { _Expression, _UnmarshalledExpression } from "./_Expression";
import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p>The value of an <code>Expression</code> and its current status.</p>
 */
export interface _ExpressionStatus {
  /**
   * <p>The expression that is evaluated for sorting while processing a search request.</p>
   */
  Options: _Expression;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledExpressionStatus extends _ExpressionStatus {
  /**
   * <p>The expression that is evaluated for sorting while processing a search request.</p>
   */
  Options: _UnmarshalledExpression;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: _UnmarshalledOptionStatus;
}
