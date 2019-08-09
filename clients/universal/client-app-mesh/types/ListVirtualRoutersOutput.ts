import { _UnmarshalledVirtualRouterRef } from "./_VirtualRouterRef";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListVirtualRoutersOutput shape
 */
export interface ListVirtualRoutersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualRouters</code>
   *          request. When the results of a <code>ListVirtualRouters</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of existing virtual routers for the specified service mesh.</p>
   */
  virtualRouters: Array<_UnmarshalledVirtualRouterRef>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
