import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TaskDefinitionPlacementConstraint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    expression: {
      shape: {
        type: "string"
      }
    }
  }
};
