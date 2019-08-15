import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDeviceStateInput: _Structure_ = {
  type: "structure",
  required: ["DeviceId"],
  members: {
    DeviceId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "deviceId"
    },
    Enabled: {
      shape: {
        type: "boolean"
      },
      locationName: "enabled"
    }
  }
};
