import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DocumentSuggesterOptions: _Structure_ = {
  type: "structure",
  required: ["SourceField"],
  members: {
    SourceField: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FuzzyMatching: {
      shape: {
        type: "string"
      }
    },
    SortExpression: {
      shape: {
        type: "string"
      }
    }
  }
};
