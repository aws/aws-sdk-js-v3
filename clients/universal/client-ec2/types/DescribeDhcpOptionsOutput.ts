import { _UnmarshalledDhcpOptions } from "./_DhcpOptions";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDhcpOptionsOutput shape
 */
export interface DescribeDhcpOptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about one or more DHCP options sets.</p>
   */
  DhcpOptions?: Array<_UnmarshalledDhcpOptions>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
