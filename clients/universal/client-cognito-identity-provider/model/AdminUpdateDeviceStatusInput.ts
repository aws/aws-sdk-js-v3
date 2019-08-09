import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminUpdateDeviceStatusInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "Username", "DeviceKey"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    DeviceKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeviceRememberedStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
