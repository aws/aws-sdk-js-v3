import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MFADevice: _Structure_ = {
  type: "structure",
  required: ["UserName", "SerialNumber", "EnableDate"],
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
    },
    EnableDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
