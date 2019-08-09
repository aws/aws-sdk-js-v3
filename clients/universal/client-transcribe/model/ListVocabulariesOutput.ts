import { _Vocabularies } from "./_Vocabularies";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVocabulariesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Vocabularies: {
      shape: _Vocabularies
    }
  }
};
