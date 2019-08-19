import { _UnmarshalledTransitGateway } from "./_TransitGateway";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTransitGatewayOutput shape
 */
export interface CreateTransitGatewayOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the transit gateway.</p>
   */
  TransitGateway?: _UnmarshalledTransitGateway;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
