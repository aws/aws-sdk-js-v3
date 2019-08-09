import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVocabulariesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    StateEquals: {
      shape: {
        type: "string"
      }
    },
    NameContains: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
