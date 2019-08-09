import { _UnmarshalledChannel } from "./_Channel";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListChannelsOutput shape
 */
export interface ListChannelsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * A list of Channel records.
   */
  Channels?: Array<_UnmarshalledChannel>;

  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
