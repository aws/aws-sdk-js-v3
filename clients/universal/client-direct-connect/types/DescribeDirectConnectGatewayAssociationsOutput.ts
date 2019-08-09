import { _UnmarshalledDirectConnectGatewayAssociation } from "./_DirectConnectGatewayAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDirectConnectGatewayAssociationsOutput shape
 */
export interface DescribeDirectConnectGatewayAssociationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the associations.</p>
   */
  directConnectGatewayAssociations?: Array<
    _UnmarshalledDirectConnectGatewayAssociation
  >;

  /**
   * <p>The token to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
