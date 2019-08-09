/**
 * <p>One or more filters. Use a filter to return a more specific list of results.</p> <note> <p>The <code>Name</code> and <code>Tier</code> filter keys can't be used with the <a>GetParametersByPath</a> API action. Also, the <code>Label</code> filter key can't be used with the <a>DescribeParameters</a> API action.</p> </note>
 */
export interface _ParameterStringFilter {
  /**
   * <p>The name of the filter.</p>
   */
  Key: string;

  /**
   * <p>Valid options are Equals and BeginsWith. For Path filter, valid options are Recursive and OneLevel.</p>
   */
  Option?: string;

  /**
   * <p>The value you want to search for.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledParameterStringFilter
  extends _ParameterStringFilter {
  /**
   * <p>The value you want to search for.</p>
   */
  Values?: Array<string>;
}
