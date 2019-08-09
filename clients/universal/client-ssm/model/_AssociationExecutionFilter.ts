import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssociationExecutionFilter: _Structure_ = {
  type: "structure",
  required: ["Key", "Value", "Type"],
  members: {
    Key: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
