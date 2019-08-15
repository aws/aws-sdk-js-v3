import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeviceMethodsInput: _Structure_ = {
  type: "structure",
  required: ["DeviceId"],
  members: {
    DeviceId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "deviceId"
    }
  }
};
