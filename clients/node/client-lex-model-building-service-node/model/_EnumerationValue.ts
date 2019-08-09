import { _SynonymList } from "./_SynonymList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnumerationValue: _Structure_ = {
  type: "structure",
  required: ["value"],
  members: {
    value: {
      shape: {
        type: "string",
        min: 1
      }
    },
    synonyms: {
      shape: _SynonymList
    }
  }
};
