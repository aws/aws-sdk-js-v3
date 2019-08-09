import { _UnmarshalledFilteredLogEvent } from "./_FilteredLogEvent";
import { _UnmarshalledSearchedLogStream } from "./_SearchedLogStream";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * FilterLogEventsOutput shape
 */
export interface FilterLogEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The matched events.</p>
   */
  events?: Array<_UnmarshalledFilteredLogEvent>;

  /**
   * <p>Indicates which log streams have been searched and whether each has been searched completely.</p>
   */
  searchedLogStreams?: Array<_UnmarshalledSearchedLogStream>;

  /**
   * <p>The token to use when requesting the next set of items. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
