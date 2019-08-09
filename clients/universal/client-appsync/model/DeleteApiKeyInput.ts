import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteApiKeyInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "id"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    id: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "id"
    }
  }
};
