import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionContext: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    actionExecutionId: {
      shape: {
        type: "string"
      }
    }
  }
};
