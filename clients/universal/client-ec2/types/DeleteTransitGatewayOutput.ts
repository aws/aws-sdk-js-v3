import { _UnmarshalledTransitGateway } from "./_TransitGateway";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteTransitGatewayOutput shape
 */
export interface DeleteTransitGatewayOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the deleted transit gateway.</p>
   */
  TransitGateway?: _UnmarshalledTransitGateway;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
