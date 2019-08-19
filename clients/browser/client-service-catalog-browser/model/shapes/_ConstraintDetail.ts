import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConstraintDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConstraintId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Owner: {
      shape: {
        type: "string"
      }
    }
  }
};
