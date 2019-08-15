import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceActionSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
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
    DefinitionType: {
      shape: {
        type: "string"
      }
    }
  }
};
