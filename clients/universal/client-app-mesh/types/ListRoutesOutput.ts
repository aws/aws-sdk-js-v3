import { _UnmarshalledRouteRef } from "./_RouteRef";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListRoutesOutput shape
 */
export interface ListRoutesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListRoutes</code> request.
   *          When the results of a <code>ListRoutes</code> request exceed <code>limit</code>, you can
   *          use this value to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of existing routes for the specified service mesh and virtual router.</p>
   */
  routes: Array<_UnmarshalledRouteRef>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
