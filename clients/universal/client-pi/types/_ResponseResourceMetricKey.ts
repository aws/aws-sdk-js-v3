/**
 * <p>An object describing a Performance Insights metric and one or more dimensions for that metric.</p>
 */
export interface _ResponseResourceMetricKey {
  /**
   * <p>The name of a Performance Insights metric to be measured.</p> <p>Valid values for <code>Metric</code> are:</p> <ul> <li> <p> <code>db.load.avg</code> - a scaled representation of the number of active sessions for the database engine.</p> </li> <li> <p> <code>db.sampledload.avg</code> - the raw number of active sessions for the database engine.</p> </li> </ul>
   */
  Metric: string;

  /**
   * <p>The valid dimensions for the metric.</p>
   */
  Dimensions?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledResponseResourceMetricKey
  extends _ResponseResourceMetricKey {
  /**
   * <p>The valid dimensions for the metric.</p>
   */
  Dimensions?: { [key: string]: string };
}
