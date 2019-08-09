import { _FilterList } from "./_FilterList";
import { _Content } from "./_Content";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendAnnouncementInput: _Structure_ = {
  type: "structure",
  required: ["RoomFilters", "Content", "ClientRequestToken"],
  members: {
    RoomFilters: {
      shape: _FilterList
    },
    Content: {
      shape: _Content
    },
    TimeToLiveInSeconds: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 10
      }
    }
  }
};
