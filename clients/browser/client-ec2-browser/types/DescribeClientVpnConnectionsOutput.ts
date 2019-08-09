import { _UnmarshalledClientVpnConnection } from "./_ClientVpnConnection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeClientVpnConnectionsOutput shape
 */
export interface DescribeClientVpnConnectionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the active and terminated client connections.</p>
   */
  Connections?: Array<_UnmarshalledClientVpnConnection>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
