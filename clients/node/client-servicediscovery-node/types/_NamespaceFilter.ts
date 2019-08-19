/**
 * <p>A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces.</p>
 */
export interface _NamespaceFilter {
  /**
   * <p>Specify <code>TYPE</code>.</p>
   */
  Name: "TYPE" | string;

  /**
   * <p>If you specify <code>EQ</code> for <code>Condition</code>, specify either <code>DNS_PUBLIC</code> or <code>DNS_PRIVATE</code>.</p> <p>If you specify <code>IN</code> for <code>Condition</code>, you can specify <code>DNS_PUBLIC</code>, <code>DNS_PRIVATE</code>, or both.</p>
   */
  Values: Array<string> | Iterable<string>;

  /**
   * <p>The operator that you want to use to determine whether <code>ListNamespaces</code> returns a namespace. Valid values for <code>condition</code> include:</p> <ul> <li> <p> <code>EQ</code>: When you specify <code>EQ</code> for the condition, you can choose to list only public namespaces or private namespaces, but not both. <code>EQ</code> is the default condition and can be omitted.</p> </li> <li> <p> <code>IN</code>: When you specify <code>IN</code> for the condition, you can choose to list public namespaces, private namespaces, or both. </p> </li> <li> <p> <code>BETWEEN</code>: Not applicable</p> </li> </ul>
   */
  Condition?: "EQ" | "IN" | "BETWEEN" | string;
}

export interface _UnmarshalledNamespaceFilter extends _NamespaceFilter {
  /**
   * <p>If you specify <code>EQ</code> for <code>Condition</code>, specify either <code>DNS_PUBLIC</code> or <code>DNS_PRIVATE</code>.</p> <p>If you specify <code>IN</code> for <code>Condition</code>, you can specify <code>DNS_PUBLIC</code>, <code>DNS_PRIVATE</code>, or both.</p>
   */
  Values: Array<string>;
}
