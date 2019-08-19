import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSuggesterInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "SuggesterName"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    SuggesterName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
