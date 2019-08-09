import { _Encryption, _UnmarshalledEncryption } from "./_Encryption";

/**
 * The settings for the source of the flow.
 */
export interface _SetSourceRequest {
  /**
   * The type of encryption that is used on the content ingested from this source.
   */
  Decryption?: _Encryption;

  /**
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
   */
  EntitlementArn?: string;

  /**
   * The port that the flow will be listening on for incoming content.
   */
  IngestPort?: number;

  /**
   * The smoothing max bitrate for RTP and RTP-FEC streams.
   */
  MaxBitrate?: number;

  /**
   * The maximum latency in milliseconds for Zixi-based streams.
   */
  MaxLatency?: number;

  /**
   * The name of the source.
   */
  Name?: string;

  /**
   * The protocol that is used by the source.
   */
  Protocol?: "zixi-push" | "rtp-fec" | "rtp" | "zixi-pull" | string;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;

  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  WhitelistCidr?: string;
}

export interface _UnmarshalledSetSourceRequest extends _SetSourceRequest {
  /**
   * The type of encryption that is used on the content ingested from this source.
   */
  Decryption?: _UnmarshalledEncryption;
}
