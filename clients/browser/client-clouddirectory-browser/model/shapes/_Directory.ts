import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Directory: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DirectoryArn: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    CreationDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
