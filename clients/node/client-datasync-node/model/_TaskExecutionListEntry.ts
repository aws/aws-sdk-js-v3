import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TaskExecutionListEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TaskExecutionArn: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
