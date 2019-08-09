import { _UnmarshalledNatGateway } from "./_NatGateway";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateNatGatewayOutput shape
 */
export interface CreateNatGatewayOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>Information about the NAT gateway.</p>
   */
  NatGateway?: _UnmarshalledNatGateway;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
