import { _UnmarshalledVirtualServiceRef } from "./_VirtualServiceRef";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListVirtualServicesOutput shape
 */
export interface ListVirtualServicesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualServices</code>
   *          request. When the results of a <code>ListVirtualServices</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of existing virtual services for the specified service mesh.</p>
   */
  virtualServices: Array<_UnmarshalledVirtualServiceRef>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
