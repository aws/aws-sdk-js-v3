import { _UnmarshalledLoadBalancer } from "./_LoadBalancer";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLoadBalancersOutput shape
 */
export interface GetLoadBalancersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of LoadBalancer objects describing your load balancers.</p>
   */
  loadBalancers?: Array<_UnmarshalledLoadBalancer>;

  /**
   * <p>A token used for advancing to the next page of results from your GetLoadBalancers request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
