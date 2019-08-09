import { _UnmarshalledClientVpnRoute } from "./_ClientVpnRoute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeClientVpnRoutesOutput shape
 */
export interface DescribeClientVpnRoutesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the Client VPN endpoint routes.</p>
   */
  Routes?: Array<_UnmarshalledClientVpnRoute>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
