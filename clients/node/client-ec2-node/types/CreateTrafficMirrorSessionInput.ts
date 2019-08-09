import { _TagSpecification } from "./_TagSpecification";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTrafficMirrorSessionInput shape
 */
export interface CreateTrafficMirrorSessionInput {
  /**
   * <p>The ID of the source network interface.</p>
   */
  NetworkInterfaceId: string;

  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId: string;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId: string;

  /**
   * <p>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do not specify this parameter when you want to mirror the entire packet. To mirror a subset of the packet, set this to the length (in bytes) that you want to mirror. For example, if you set this value to 1network0, then the first 100 bytes that meet the filter criteria are copied to the target.</p> <p>If you do not want to mirror the entire packet, use the <code>PacketLength</code> parameter to specify the number of bytes in each packet to mirror.</p>
   */
  PacketLength?: number;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p> <p>Valid values are 1-32766.</p>
   */
  SessionNumber: number;

  /**
   * <p>The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN protocol, see <a href="https://tools.ietf.org/html/rfc7348">RFC 7348</a>. If you do not specify a <code>VirtualNetworkId</code>, an account-wide unique id is chosen at random.</p>
   */
  VirtualNetworkId?: number;

  /**
   * <p>The description of the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * <p>The tags to assign to a Traffic Mirror session.</p>
   */
  TagSpecifications?: Array<_TagSpecification> | Iterable<_TagSpecification>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

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
