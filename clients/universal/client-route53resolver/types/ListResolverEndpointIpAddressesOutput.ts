import { _UnmarshalledIpAddressResponse } from "./_IpAddressResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResolverEndpointIpAddressesOutput shape
 */
export interface ListResolverEndpointIpAddressesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the specified endpoint has more than <code>MaxResults</code> IP addresses, you can submit another <code>ListResolverEndpointIpAddresses</code> request to get the next group of IP addresses. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The IP addresses that DNS queries pass through on their way to your network (outbound endpoint) or on the way to Resolver (inbound endpoint).</p>
   */
  IpAddresses?: Array<_UnmarshalledIpAddressResponse>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
