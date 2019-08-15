import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClassificationTypeUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    oneTime: {
      shape: {
        type: "string"
      }
    },
    continuous: {
      shape: {
        type: "string"
      }
    }
  }
};
