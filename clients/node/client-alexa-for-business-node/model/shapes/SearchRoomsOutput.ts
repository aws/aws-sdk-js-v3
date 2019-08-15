import { _RoomDataList } from "./_RoomDataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchRoomsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Rooms: {
      shape: _RoomDataList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TotalCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
