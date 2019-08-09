/**
 * <p>Represents summary information about the health of an instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.</p>
 */
export interface _InstanceHealthSummary {
  /**
   * <p> <b>Grey.</b> AWS Elastic Beanstalk and the health agent are reporting no data on an instance.</p>
   */
  NoData?: number;

  /**
   * <p> <b>Grey.</b> AWS Elastic Beanstalk and the health agent are reporting an insufficient amount of data on an instance.</p>
   */
  Unknown?: number;

  /**
   * <p> <b>Grey.</b> An operation is in progress on an instance within the command timeout.</p>
   */
  Pending?: number;

  /**
   * <p> <b>Green.</b> An instance is passing health checks and the health agent is not reporting any problems.</p>
   */
  Ok?: number;

  /**
   * <p> <b>Green.</b> An operation is in progress on an instance.</p>
   */
  Info?: number;

  /**
   * <p> <b>Yellow.</b> The health agent is reporting a moderate number of request failures or other issues for an instance or environment.</p>
   */
  Warning?: number;

  /**
   * <p> <b>Red.</b> The health agent is reporting a high number of request failures or other issues for an instance or environment.</p>
   */
  Degraded?: number;

  /**
   * <p> <b>Red.</b> The health agent is reporting a very high number of request failures or other issues for an instance or environment.</p>
   */
  Severe?: number;
}

export type _UnmarshalledInstanceHealthSummary = _InstanceHealthSummary;
