import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EntityInfo: _Structure_ = {
  type: "structure",
  required: ["Arn", "Name", "Type", "Id"],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string",
        min: 16
      }
    },
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
