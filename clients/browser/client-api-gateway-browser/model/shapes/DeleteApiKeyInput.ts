import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteApiKeyInput: _Structure_ = {
  type: "structure",
  required: ["apiKey"],
  members: {
    apiKey: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "api_Key"
    }
  }
};
