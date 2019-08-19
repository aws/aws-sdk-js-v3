/**
 * <p>Information about the Traffic Mirror filter rule port range.</p>
 */
export interface _TrafficMirrorPortRangeRequest {
  /**
   * <p>The first port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  FromPort?: number;

  /**
   * <p>The last port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  ToPort?: number;
}

export type _UnmarshalledTrafficMirrorPortRangeRequest = _TrafficMirrorPortRangeRequest;
