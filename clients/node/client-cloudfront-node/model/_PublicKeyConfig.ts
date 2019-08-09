import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PublicKeyConfig: _Structure_ = {
  type: "structure",
  required: ["CallerReference", "Name", "EncodedKey"],
  members: {
    CallerReference: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    EncodedKey: {
      shape: {
        type: "string"
      }
    },
    Comment: {
      shape: {
        type: "string"
      }
    }
  }
};
