import { _UnmarshalledGatewayGroup } from "./_GatewayGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetGatewayGroupOutput shape
 */
export interface GetGatewayGroupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The details of the gateway group.</p>
   */
  GatewayGroup?: _UnmarshalledGatewayGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
