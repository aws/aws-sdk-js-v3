import { _UnmarshalledVpcEndpoint } from "./_VpcEndpoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of CreateVpcEndpoint.</p>
 */
export interface CreateVpcEndpointOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the endpoint.</p>
   */
  VpcEndpoint?: _UnmarshalledVpcEndpoint;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request.</p>
   */
  ClientToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
