import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateModelInput: _Structure_ = {
  type: "structure",
  required: ["ApiId", "Schema", "Name"],
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
