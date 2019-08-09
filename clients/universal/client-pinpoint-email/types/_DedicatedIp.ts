/**
 * <p>Contains information about a dedicated IP address that is associated with your Amazon Pinpoint account.</p> <p/>
 */
export interface _DedicatedIp {
  /**
   * <p>An IP address that is reserved for use by your Amazon Pinpoint account.</p>
   */
  Ip: string;

  /**
   * <p>The warm-up status of a dedicated IP address. The status can have one of the following values:</p> <ul> <li> <p> <code>IN_PROGRESS</code> – The IP address isn't ready to use because the dedicated IP warm-up process is ongoing.</p> </li> <li> <p> <code>DONE</code> – The dedicated IP warm-up process is complete, and the IP address is ready to use.</p> </li> </ul>
   */
  WarmupStatus: "IN_PROGRESS" | "DONE" | string;

  /**
   * <p>Indicates how complete the dedicated IP warm-up process is. When this value equals 1, the address has completed the warm-up process and is ready for use.</p>
   */
  WarmupPercentage: number;

  /**
   * <p>The name of the dedicated IP pool that the IP address is associated with.</p>
   */
  PoolName?: string;
}

export type _UnmarshalledDedicatedIp = _DedicatedIp;
