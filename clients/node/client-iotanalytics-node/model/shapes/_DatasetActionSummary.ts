import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatasetActionSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    actionType: {
      shape: {
        type: "string"
      }
    }
  }
};
