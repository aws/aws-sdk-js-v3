import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetApiKeyInput: _Structure_ = {
  type: "structure",
  required: ["apiKey"],
  members: {
    apiKey: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "api_Key"
    },
    includeValue: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "includeValue"
    }
  }
};
