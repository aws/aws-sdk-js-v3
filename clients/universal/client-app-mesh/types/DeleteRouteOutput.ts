import { _UnmarshalledRouteData } from "./_RouteData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteRouteOutput shape
 */
export interface DeleteRouteOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The route that was deleted.</p>
   */
  route: _UnmarshalledRouteData;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
