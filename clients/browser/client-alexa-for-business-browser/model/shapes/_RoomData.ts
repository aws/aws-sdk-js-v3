import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RoomData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RoomArn: {
      shape: {
        type: "string"
      }
    },
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
    ProviderCalendarId: {
      shape: {
        type: "string"
      }
    },
    ProfileArn: {
      shape: {
        type: "string"
      }
    },
    ProfileName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
