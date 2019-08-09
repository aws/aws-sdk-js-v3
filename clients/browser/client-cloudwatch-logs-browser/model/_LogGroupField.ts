import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogGroupField: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    percent: {
      shape: {
        type: "integer"
      }
    }
  }
};
