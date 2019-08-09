import { _UnmarshalledTopic } from "./_Topic";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Response for ListTopics action.</p>
 */
export interface ListTopicsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of topic ARNs.</p>
   */
  Topics?: Array<_UnmarshalledTopic>;

  /**
   * <p>Token to pass along to the next <code>ListTopics</code> request. This element is returned if there are additional topics to retrieve.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
