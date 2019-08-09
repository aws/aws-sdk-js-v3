import { _UnmarshalledVoice } from "./_Voice";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVoicesOutput shape
 */
export interface DescribeVoicesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of voices with their properties.</p>
   */
  Voices?: Array<_UnmarshalledVoice>;

  /**
   * <p>The pagination token to use in the next request to continue the listing of voices. <code>NextToken</code> is returned only if the response is truncated.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
