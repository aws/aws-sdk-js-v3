import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterUsageInput: _Structure_ = {
  type: "structure",
  required: ["ProductCode", "PublicKeyVersion"],
  members: {
    ProductCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PublicKeyVersion: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Nonce: {
      shape: {
        type: "string"
      }
    }
  }
};
