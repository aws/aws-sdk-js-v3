/**
 * <p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/discovery-api-queries.html">Querying Discovered Configuration Items</a>. </p>
 */
export interface _Filter {
  /**
   * <p>The name of the filter.</p>
   */
  name: string;

  /**
   * <p>A string value on which to filter. For example, if you choose the <code>destinationServer.osVersion</code> filter name, you could specify <code>Ubuntu</code> for the value.</p>
   */
  values: Array<string> | Iterable<string>;

  /**
   * <p>A conditional operator. The following operators are valid: EQUALS, NOT_EQUALS, CONTAINS, NOT_CONTAINS. If you specify multiple filters, the system utilizes all filters as though concatenated by <i>AND</i>. If you specify multiple values for a particular filter, the system differentiates the values using <i>OR</i>. Calling either <i>DescribeConfigurations</i> or <i>ListConfigurations</i> returns attributes of matching configuration items.</p>
   */
  condition: string;
}

export interface _UnmarshalledFilter extends _Filter {
  /**
   * <p>A string value on which to filter. For example, if you choose the <code>destinationServer.osVersion</code> filter name, you could specify <code>Ubuntu</code> for the value.</p>
   */
  values: Array<string>;
}
