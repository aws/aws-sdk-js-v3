import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceMethod: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceType: {
      shape: {
        type: "string"
      },
      locationName: "deviceType"
    },
    MethodName: {
      shape: {
        type: "string"
      },
      locationName: "methodName"
    }
  }
};
