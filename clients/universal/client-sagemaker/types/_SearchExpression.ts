import { _Filter, _UnmarshalledFilter } from "./_Filter";
import { _NestedFilters, _UnmarshalledNestedFilters } from "./_NestedFilters";

/**
 * <p>A multi-expression that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results. You must specify at least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to twenty elements.</p> <p>A <code>SearchExpression</code> contains the following components:</p> <ul> <li> <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean expression comprised of a resource property name, Boolean operator, and value.</p> </li> <li> <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list of Boolean expressions using a list of resource properties. A nested filter is satisfied if a single object in the list satisfies all Boolean expressions.</p> </li> <li> <p>A list of <code>SearchExpression</code> objects. A search expression object can be nested in a list of search expression objects.</p> </li> <li> <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p> </li> </ul>
 */
export interface _SearchExpression {
  /**
   * <p>A list of filter objects.</p>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>A list of nested filter objects.</p>
   */
  NestedFilters?: Array<_NestedFilters> | Iterable<_NestedFilters>;

  /**
   * <p>A list of search expression objects.</p>
   */
  SubExpressions?: Array<_SearchExpression> | Iterable<_SearchExpression>;

  /**
   * <p>A Boolean operator used to evaluate the search expression. If you want every conditional statement in all lists to be satisfied for the entire search expression to be true, specify <code>And</code>. If only a single conditional statement needs to be true for the entire search expression to be true, specify <code>Or</code>. The default value is <code>And</code>.</p>
   */
  Operator?: "And" | "Or" | string;
}

export interface _UnmarshalledSearchExpression extends _SearchExpression {
  /**
   * <p>A list of filter objects.</p>
   */
  Filters?: Array<_UnmarshalledFilter>;

  /**
   * <p>A list of nested filter objects.</p>
   */
  NestedFilters?: Array<_UnmarshalledNestedFilters>;

  /**
   * <p>A list of search expression objects.</p>
   */
  SubExpressions?: Array<_UnmarshalledSearchExpression>;
}
