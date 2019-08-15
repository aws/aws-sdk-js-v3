import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportRestApiInput: _Structure_ = {
  type: "structure",
  required: ["body"],
  members: {
    failOnWarnings: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "failonwarnings"
    },
    parameters: {
      shape: _MapOfStringToString,
      location: "querystring"
    },
    body: {
      shape: {
        type: "blob"
      }
    }
  },
  payload: "body"
};
