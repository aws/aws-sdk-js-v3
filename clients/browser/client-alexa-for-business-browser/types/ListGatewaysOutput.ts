import { _UnmarshalledGatewaySummary } from "./_GatewaySummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGatewaysOutput shape
 */
export interface ListGatewaysOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The gateways in the list.</p>
   */
  Gateways?: Array<_UnmarshalledGatewaySummary>;

  /**
   * <p>The token used to paginate though multiple pages of gateway summaries.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
