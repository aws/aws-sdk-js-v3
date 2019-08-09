import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminGetDeviceInput: _Structure_ = {
  type: "structure",
  required: ["DeviceKey", "UserPoolId", "Username"],
  members: {
    DeviceKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    }
  }
};
