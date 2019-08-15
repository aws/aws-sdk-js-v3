import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Group: _Structure_ = {
  type: "structure",
  required: ["GroupArn", "Name"],
  members: {
    GroupArn: {
      shape: {
        type: "string",
        min: 12
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
