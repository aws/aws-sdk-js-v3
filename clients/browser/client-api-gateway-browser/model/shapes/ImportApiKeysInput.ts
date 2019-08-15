import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportApiKeysInput: _Structure_ = {
  type: "structure",
  required: ["body", "format"],
  members: {
    body: {
      shape: {
        type: "blob"
      }
    },
    format: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "format"
    },
    failOnWarnings: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "failonwarnings"
    }
  },
  payload: "body"
};
