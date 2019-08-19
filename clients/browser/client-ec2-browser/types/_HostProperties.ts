/**
 * <p>Describes properties of a Dedicated Host.</p>
 */
export interface _HostProperties {
  /**
   * <p>The number of cores on the Dedicated Host.</p>
   */
  Cores?: number;

  /**
   * <p>The instance type size that the Dedicated Host supports (for example, <code>m3.medium</code>).</p>
   */
  InstanceType?: string;

  /**
   * <p>The number of sockets on the Dedicated Host.</p>
   */
  Sockets?: number;

  /**
   * <p>The number of vCPUs on the Dedicated Host.</p>
   */
  TotalVCpus?: number;
}

export type _UnmarshalledHostProperties = _HostProperties;
