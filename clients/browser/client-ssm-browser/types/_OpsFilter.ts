/**
 * <p>A filter for viewing OpsItem summaries.</p>
 */
export interface _OpsFilter {
  /**
   * <p>The name of the filter.</p>
   */
  Key: string;

  /**
   * <p>The filter value.</p>
   */
  Values: Array<string> | Iterable<string>;

  /**
   * <p>The type of filter.</p>
   */
  Type?:
    | "Equal"
    | "NotEqual"
    | "BeginWith"
    | "LessThan"
    | "GreaterThan"
    | "Exists"
    | string;
}

export interface _UnmarshalledOpsFilter extends _OpsFilter {
  /**
   * <p>The filter value.</p>
   */
  Values: Array<string>;
}
