import { _UpdateEncryption } from "./_UpdateEncryption";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * A request to update the source of a flow.
 */
export interface UpdateFlowSourceInput {
  /**
   * The type of encryption used on the content ingested from this source.
   */
  Decryption?: _UpdateEncryption;

  /**
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
   */
  EntitlementArn?: string;

  /**
   * The flow that is associated with the source that you want to update.
   */
  FlowArn: string;

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
   * The protocol that is used by the source.
   */
  Protocol?: "zixi-push" | "rtp-fec" | "rtp" | "zixi-pull" | string;

  /**
   * The ARN of the source that you want to update.
   */
  SourceArn: string;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;

  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  WhitelistCidr?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
