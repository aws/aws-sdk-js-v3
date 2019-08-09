import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PublicKeySummary: _Structure_ = {
  type: "structure",
  required: ["Id", "Name", "CreatedTime", "EncodedKey"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
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
