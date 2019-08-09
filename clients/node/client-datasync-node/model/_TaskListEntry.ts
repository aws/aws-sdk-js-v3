import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TaskListEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TaskArn: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
