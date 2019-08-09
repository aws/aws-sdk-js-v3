import { _UnmarshalledServerEvent } from "./_ServerEvent";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEventsOutput shape
 */
export interface DescribeEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the response to a <code>DescribeEvents</code> request. </p>
   */
  ServerEvents?: Array<_UnmarshalledServerEvent>;

  /**
   * <p>NextToken is a string that is returned in some command responses. It indicates that not all entries have been returned, and that you must run at least one more request to get remaining items. To get remaining results, call <code>DescribeEvents</code> again, and assign the token from the previous results as the value of the <code>nextToken</code> parameter. If there are no more results, the response object's <code>nextToken</code> parameter value is <code>null</code>. Setting a <code>nextToken</code> value that was not returned in your previous results causes an <code>InvalidNextTokenException</code> to occur. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
