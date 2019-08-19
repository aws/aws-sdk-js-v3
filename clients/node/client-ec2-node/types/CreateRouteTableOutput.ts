import { _UnmarshalledRouteTable } from "./_RouteTable";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateRouteTableOutput shape
 */
export interface CreateRouteTableOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the route table.</p>
   */
  RouteTable?: _UnmarshalledRouteTable;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
