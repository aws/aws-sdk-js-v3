import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainSuggestion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    Availability: {
      shape: {
        type: "string"
      }
    }
  }
};
