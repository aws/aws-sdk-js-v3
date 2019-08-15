import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateDeviceWithRoomInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceArn: {
      shape: {
        type: "string"
      }
    },
    RoomArn: {
      shape: {
        type: "string"
      }
    }
  }
};
