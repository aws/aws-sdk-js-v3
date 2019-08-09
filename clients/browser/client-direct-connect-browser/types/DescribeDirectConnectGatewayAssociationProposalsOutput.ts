import { _UnmarshalledDirectConnectGatewayAssociationProposal } from "./_DirectConnectGatewayAssociationProposal";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDirectConnectGatewayAssociationProposalsOutput shape
 */
export interface DescribeDirectConnectGatewayAssociationProposalsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes the Direct Connect gateway association proposals.</p>
   */
  directConnectGatewayAssociationProposals?: Array<
    _UnmarshalledDirectConnectGatewayAssociationProposal
  >;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
