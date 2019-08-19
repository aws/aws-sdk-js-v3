import { _DocumentSuggesterOptions } from "./_DocumentSuggesterOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Suggester: _Structure_ = {
  type: "structure",
  required: ["SuggesterName", "DocumentSuggesterOptions"],
  members: {
    SuggesterName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DocumentSuggesterOptions: {
      shape: _DocumentSuggesterOptions
    }
  }
};
