import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateApiMappingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      locationName: "apiId"
    },
    ApiMappingId: {
      shape: {
        type: "string"
      },
      locationName: "apiMappingId"
    },
    ApiMappingKey: {
      shape: {
        type: "string"
      },
      locationName: "apiMappingKey"
    },
    Stage: {
      shape: {
        type: "string"
      },
      locationName: "stage"
    }
  }
};
