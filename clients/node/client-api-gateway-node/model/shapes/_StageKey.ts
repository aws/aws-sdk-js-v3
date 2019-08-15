import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StageKey: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    restApiId: {
      shape: {
        type: "string"
      }
    },
    stageName: {
      shape: {
        type: "string"
      }
    }
  }
};
