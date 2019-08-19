import { _CreateTransitGatewayVpcAttachmentRequestOptions } from "./_CreateTransitGatewayVpcAttachmentRequestOptions";
import { _TagSpecification } from "./_TagSpecification";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTransitGatewayVpcAttachmentInput shape
 */
export interface CreateTransitGatewayVpcAttachmentInput {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string;

  /**
   * <p>The IDs of one or more subnets. You can specify only one subnet per Availability Zone. You must specify at least one subnet, but we recommend that you specify two subnets for better availability. The transit gateway uses one IP address from each specified subnet.</p>
   */
  SubnetIds: Array<string> | Iterable<string>;

  /**
   * <p>The VPC attachment options.</p>
   */
  Options?: _CreateTransitGatewayVpcAttachmentRequestOptions;

  /**
   * <p>The tags to apply to the VPC attachment.</p>
   */
  TagSpecifications?: Array<_TagSpecification> | Iterable<_TagSpecification>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

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
