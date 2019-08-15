import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUploadsInput: _Structure_ = {
  type: "structure",
  required: ["arn"],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
