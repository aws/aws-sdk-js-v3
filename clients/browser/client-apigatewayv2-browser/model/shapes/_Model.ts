import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Model: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
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
