import { _UpdateEncryption } from "./_UpdateEncryption";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * The fields that you want to update in the output.
 */
export interface UpdateFlowOutputInput {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrAllowList?: Array<string> | Iterable<string>;

  /**
   * A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.
   */
  Description?: string;

  /**
   * The IP address where you want to send the output.
   */
  Destination?: string;

  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  Encryption?: _UpdateEncryption;

  /**
   * The flow that is associated with the output that you want to update.
   */
  FlowArn: string;

  /**
   * The maximum latency in milliseconds for Zixi-based streams.
   */
  MaxLatency?: number;

  /**
   * The ARN of the output that you want to update.
   */
  OutputArn: string;

  /**
   * The port to use when content is distributed to this output.
   */
  Port?: number;

  /**
   * The protocol to use for the output.
   */
  Protocol?: "zixi-push" | "rtp-fec" | "rtp" | "zixi-pull" | string;

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
