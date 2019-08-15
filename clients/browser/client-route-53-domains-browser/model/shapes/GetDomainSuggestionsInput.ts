import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDomainSuggestionsInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "SuggestionCount", "OnlyAvailable"],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    SuggestionCount: {
      shape: {
        type: "integer"
      }
    },
    OnlyAvailable: {
      shape: {
        type: "boolean"
      }
    }
  }
};
