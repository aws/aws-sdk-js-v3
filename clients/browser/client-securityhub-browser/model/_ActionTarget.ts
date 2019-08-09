import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionTarget: _Structure_ = {
  type: "structure",
  required: ["ActionTargetArn", "Name", "Description"],
  members: {
    ActionTargetArn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
