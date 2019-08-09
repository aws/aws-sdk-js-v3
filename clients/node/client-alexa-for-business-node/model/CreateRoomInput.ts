import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRoomInput: _Structure_ = {
  type: "structure",
  required: ["RoomName"],
  members: {
    RoomName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProfileArn: {
      shape: {
        type: "string"
      }
    },
    ProviderCalendarId: {
      shape: {
        type: "string"
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 10
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
