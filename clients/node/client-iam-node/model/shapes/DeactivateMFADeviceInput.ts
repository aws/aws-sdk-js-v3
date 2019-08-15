import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeactivateMFADeviceInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "SerialNumber"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SerialNumber: {
      shape: {
        type: "string",
        min: 9
      }
    }
  }
};
