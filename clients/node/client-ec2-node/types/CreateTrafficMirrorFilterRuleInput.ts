import { _TrafficMirrorPortRangeRequest } from "./_TrafficMirrorPortRangeRequest";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTrafficMirrorFilterRuleInput shape
 */
export interface CreateTrafficMirrorFilterRuleInput {
  /**
   * <p>The ID of the filter that this rule is associated with.</p>
   */
  TrafficMirrorFilterId: string;

  /**
   * <p>The type of traffic (<code>ingress</code> | <code>egress</code>).</p>
   */
  TrafficDirection: "ingress" | "egress" | string;

  /**
   * <p>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given direction. The rules are processed in ascending order by rule number.</p>
   */
  RuleNumber: number;

  /**
   * <p>The action to take (<code>accept</code> | <code>reject</code>) on the filtered traffic.</p>
   */
  RuleAction: "accept" | "reject" | string;

  /**
   * <p>The destination port range.</p>
   */
  DestinationPortRange?: _TrafficMirrorPortRangeRequest;

  /**
   * <p>The source port range.</p>
   */
  SourcePortRange?: _TrafficMirrorPortRangeRequest;

  /**
   * <p>The protocol, for example UDP, to assign to the Traffic Mirror rule.</p> <p>For information about the protocol value, see <a href="https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a> on the Internet Assigned Numbers Authority (IANA) website.</p>
   */
  Protocol?: number;

  /**
   * <p>The destination CIDR block to assign to the Traffic Mirror rule.</p>
   */
  DestinationCidrBlock: string;

  /**
   * <p>The source CIDR block to assign to the Traffic Mirror rule.</p>
   */
  SourceCidrBlock: string;

  /**
   * <p>The description of the Traffic Mirror rule.</p>
   */
  Description?: string;

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
