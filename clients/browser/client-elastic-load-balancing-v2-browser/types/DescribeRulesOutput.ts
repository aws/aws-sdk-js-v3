import { _UnmarshalledRule } from "./_Rule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRulesOutput shape
 */
export interface DescribeRulesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the rules.</p>
   */
  Rules?: Array<_UnmarshalledRule>;

  /**
   * <p>If there are additional results, this is the marker for the next set of results. Otherwise, this is null.</p>
   */
  NextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
