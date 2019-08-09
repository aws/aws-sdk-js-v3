/**
 * <p>For <code>List</code> operations, an optional specification to return a subset of objects, such as resolver endpoints or resolver rules.</p>
 */
export interface _Filter {
  /**
   * <p>When you're using a <code>List</code> operation and you want the operation to return a subset of objects, such as resolver endpoints or resolver rules, the name of the parameter that you want to use to filter objects. For example, to list only inbound resolver endpoints, specify <code>Direction</code> for the value of <code>Name</code>.</p>
   */
  Name?: string;

  /**
   * <p>When you're using a <code>List</code> operation and you want the operation to return a subset of objects, such as resolver endpoints or resolver rules, the value of the parameter that you want to use to filter objects. For example, to list only inbound resolver endpoints, specify <code>INBOUND</code> for the value of <code>Values</code>.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledFilter extends _Filter {
  /**
   * <p>When you're using a <code>List</code> operation and you want the operation to return a subset of objects, such as resolver endpoints or resolver rules, the value of the parameter that you want to use to filter objects. For example, to list only inbound resolver endpoints, specify <code>INBOUND</code> for the value of <code>Values</code>.</p>
   */
  Values?: Array<string>;
}
