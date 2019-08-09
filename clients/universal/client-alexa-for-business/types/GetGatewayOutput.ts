import { _UnmarshalledGateway } from "./_Gateway";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetGatewayOutput shape
 */
export interface GetGatewayOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The details of the gateway.</p>
   */
  Gateway?: _UnmarshalledGateway;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
