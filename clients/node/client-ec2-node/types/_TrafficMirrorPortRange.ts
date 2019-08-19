/**
 * <p>Describes the Traffic Mirror port range.</p>
 */
export interface _TrafficMirrorPortRange {
  /**
   * <p>The start of the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  FromPort?: number;

  /**
   * <p>The end of the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  ToPort?: number;
}

export type _UnmarshalledTrafficMirrorPortRange = _TrafficMirrorPortRange;
