import { _UnmarshalledRoomData } from "./_RoomData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchRoomsOutput shape
 */
export interface SearchRoomsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The rooms that meet the specified set of filter criteria, in sort order.</p>
   */
  Rooms?: Array<_UnmarshalledRoomData>;

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of rooms returned.</p>
   */
  TotalCount?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
