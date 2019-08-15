import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvokeDeviceMethodOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceMethodResponse: {
      shape: {
        type: "string"
      },
      locationName: "deviceMethodResponse"
    }
  }
};
