import { _PolicyTypes } from "./_PolicyTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Root: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyTypes: {
      shape: _PolicyTypes
    }
  }
};
