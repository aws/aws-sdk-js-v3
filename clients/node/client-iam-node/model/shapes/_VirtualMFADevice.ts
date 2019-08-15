import { _User } from "./_User";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualMFADevice: _Structure_ = {
  type: "structure",
  required: ["SerialNumber"],
  members: {
    SerialNumber: {
      shape: {
        type: "string",
        min: 9
      }
    },
    Base32StringSeed: {
      shape: {
        type: "blob",
        sensitive: true
      }
    },
    QRCodePNG: {
      shape: {
        type: "blob",
        sensitive: true
      }
    },
    User: {
      shape: _User
    },
    EnableDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
