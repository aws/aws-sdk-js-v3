import { Structure as _Structure_ } from "@aws-sdk/types";

export const SuggestInput: _Structure_ = {
  type: "structure",
  required: ["query", "suggester"],
  members: {
    query: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "q"
    },
    suggester: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "suggester"
    },
    size: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "size"
    }
  }
};
