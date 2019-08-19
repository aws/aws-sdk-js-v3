/**
 * Attributes related to the transport stream that are used in a source or output.
 */
export interface _Transport {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrAllowList?: Array<string> | Iterable<string>;

  /**
   * The smoothing max bitrate for RTP and RTP-FEC streams.
   */
  MaxBitrate?: number;

  /**
   * The maximum latency in milliseconds for Zixi-based streams.
   */
  MaxLatency?: number;

  /**
   * The protocol that is used by the source or output.
   */
  Protocol: "zixi-push" | "rtp-fec" | "rtp" | "zixi-pull" | string;

  /**
   * The remote ID for the Zixi-pull stream.
   */
  RemoteId?: string;

  /**
   * The smoothing latency in milliseconds for RTP and RTP-FEC streams.
   */
  SmoothingLatency?: number;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;
}

export interface _UnmarshalledTransport extends _Transport {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrAllowList?: Array<string>;
}
