import { _Features } from "./_Features";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartDeviceSyncInput: _Structure_ = {
  type: "structure",
  required: ["Features"],
  members: {
    RoomArn: {
      shape: {
        type: "string"
      }
    },
    DeviceArn: {
      shape: {
        type: "string"
      }
    },
    Features: {
      shape: _Features
    }
  }
};
