import { _UnmarshalledIpRouteInfo } from "./_IpRouteInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListIpRoutesOutput shape
 */
export interface ListIpRoutesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <a>IpRoute</a>s.</p>
   */
  IpRoutesInfo?: Array<_UnmarshalledIpRouteInfo>;

  /**
   * <p>If not null, more results are available. Pass this value for the <i>NextToken</i> parameter in a subsequent call to <a>ListIpRoutes</a> to retrieve the next set of items.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
