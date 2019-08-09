import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetHostnameSuggestionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LayerId: {
      shape: {
        type: "string"
      }
    },
    Hostname: {
      shape: {
        type: "string"
      }
    }
  }
};
