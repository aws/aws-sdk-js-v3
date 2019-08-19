import { _UnmarshalledEvent } from "./_Event";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains a response to a LookupEvents action.</p>
 */
export interface LookupEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of events returned based on the lookup attributes specified and the CloudTrail event. The events list is sorted by time. The most recent event is listed first.</p>
   */
  Events?: Array<_UnmarshalledEvent>;

  /**
   * <p>The token to use to get the next page of results after a previous API call. If the token does not appear, there are no more results to return. The token must be passed in with the same parameters as the previous call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
