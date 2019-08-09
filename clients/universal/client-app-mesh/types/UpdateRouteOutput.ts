import { _UnmarshalledRouteData } from "./_RouteData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateRouteOutput shape
 */
export interface UpdateRouteOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A full description of the route that was updated.</p>
   */
  route: _UnmarshalledRouteData;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
