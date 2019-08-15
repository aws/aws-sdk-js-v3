import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRestApiInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "body"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    mode: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "mode"
    },
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
