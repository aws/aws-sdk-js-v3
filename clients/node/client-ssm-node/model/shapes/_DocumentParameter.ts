import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DocumentParameter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DefaultValue: {
      shape: {
        type: "string"
      }
    }
  }
};
