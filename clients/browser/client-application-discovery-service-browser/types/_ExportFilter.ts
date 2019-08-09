/**
 * <p>Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.</p>
 */
export interface _ExportFilter {
  /**
   * <p>A single <code>ExportFilter</code> name. Supported filters: <code>agentId</code>.</p>
   */
  name: string;

  /**
   * <p>A single <code>agentId</code> for a Discovery Agent. An <code>agentId</code> can be found using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeAgents</a> action. Typically an ADS <code>agentId</code> is in the form <code>o-0123456789abcdef0</code>.</p>
   */
  values: Array<string> | Iterable<string>;

  /**
   * <p>Supported condition: <code>EQUALS</code> </p>
   */
  condition: string;
}

export interface _UnmarshalledExportFilter extends _ExportFilter {
  /**
   * <p>A single <code>agentId</code> for a Discovery Agent. An <code>agentId</code> can be found using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeAgents</a> action. Typically an ADS <code>agentId</code> is in the form <code>o-0123456789abcdef0</code>.</p>
   */
  values: Array<string>;
}
