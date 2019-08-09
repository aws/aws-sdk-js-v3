import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeviceEventsInput: _Structure_ = {
  type: "structure",
  required: ["DeviceArn"],
  members: {
    DeviceArn: {
      shape: {
        type: "string"
      }
    },
    EventType: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
