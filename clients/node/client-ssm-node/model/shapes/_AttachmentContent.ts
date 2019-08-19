import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttachmentContent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Size: {
      shape: {
        type: "integer"
      }
    },
    Hash: {
      shape: {
        type: "string"
      }
    },
    HashType: {
      shape: {
        type: "string"
      }
    },
    Url: {
      shape: {
        type: "string"
      }
    }
  }
};
