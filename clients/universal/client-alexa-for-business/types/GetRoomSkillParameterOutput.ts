import { _UnmarshalledRoomSkillParameter } from "./_RoomSkillParameter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRoomSkillParameterOutput shape
 */
export interface GetRoomSkillParameterOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The details of the room skill parameter requested. Required.</p>
   */
  RoomSkillParameter?: _UnmarshalledRoomSkillParameter;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
