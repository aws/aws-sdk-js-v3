import { _RouteFilterPrefix } from "./_RouteFilterPrefix";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDirectConnectGatewayAssociationProposalInput shape
 */
export interface CreateDirectConnectGatewayAssociationProposalInput {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string;

  /**
   * <p>The ID of the AWS account that owns the Direct Connect gateway.</p>
   */
  directConnectGatewayOwnerAccount: string;

  /**
   * <p>The ID of the virtual private gateway or transit gateway.</p>
   */
  gatewayId: string;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  addAllowedPrefixesToDirectConnectGateway?:
    | Array<_RouteFilterPrefix>
    | Iterable<_RouteFilterPrefix>;

  /**
   * <p>The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.</p>
   */
  removeAllowedPrefixesToDirectConnectGateway?:
    | Array<_RouteFilterPrefix>
    | Iterable<_RouteFilterPrefix>;

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
