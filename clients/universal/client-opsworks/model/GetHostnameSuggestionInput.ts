import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetHostnameSuggestionInput: _Structure_ = {
  type: "structure",
  required: ["LayerId"],
  members: {
    LayerId: {
      shape: {
        type: "string"
      }
    }
  }
};
