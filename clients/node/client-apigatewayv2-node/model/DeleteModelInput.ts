import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteModelInput: _Structure_ = {
  type: "structure",
  required: ["ModelId", "ApiId"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    ModelId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "modelId"
    }
  }
};
