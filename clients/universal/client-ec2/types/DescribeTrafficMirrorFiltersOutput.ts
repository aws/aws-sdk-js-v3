import { _UnmarshalledTrafficMirrorFilter } from "./_TrafficMirrorFilter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTrafficMirrorFiltersOutput shape
 */
export interface DescribeTrafficMirrorFiltersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about one or more Traffic Mirror filters.</p>
   */
  TrafficMirrorFilters?: Array<_UnmarshalledTrafficMirrorFilter>;

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
