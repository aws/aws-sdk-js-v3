import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateModelInput: _Structure_ = {
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
    ContentType: {
      shape: {
        type: "string"
      },
      locationName: "contentType"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    ModelId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "modelId"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    Schema: {
      shape: {
        type: "string"
      },
      locationName: "schema"
    }
  }
};
