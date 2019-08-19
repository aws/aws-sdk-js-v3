import { _UnmarshalledEgressOnlyInternetGateway } from "./_EgressOnlyInternetGateway";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateEgressOnlyInternetGatewayOutput shape
 */
export interface CreateEgressOnlyInternetGatewayOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>Information about the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGateway?: _UnmarshalledEgressOnlyInternetGateway;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
