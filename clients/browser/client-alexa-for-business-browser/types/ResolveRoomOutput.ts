import { _UnmarshalledRoomSkillParameter } from "./_RoomSkillParameter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ResolveRoomOutput shape
 */
export interface ResolveRoomOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the room from which the skill request was invoked.</p>
   */
  RoomArn?: string;

  /**
   * <p>The name of the room from which the skill request was invoked.</p>
   */
  RoomName?: string;

  /**
   * <p>Response to get the room profile request. Required.</p>
   */
  RoomSkillParameters?: Array<_UnmarshalledRoomSkillParameter>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
