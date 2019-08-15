import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Account: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    StackInstanceStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
