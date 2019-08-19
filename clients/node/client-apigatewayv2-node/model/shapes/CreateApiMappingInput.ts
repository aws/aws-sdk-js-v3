import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateApiMappingInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "Stage", "ApiId"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      locationName: "apiId"
    },
    ApiMappingKey: {
      shape: {
        type: "string"
      },
      locationName: "apiMappingKey"
    },
    DomainName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "domainName"
    },
    Stage: {
      shape: {
        type: "string"
      },
      locationName: "stage"
    }
  }
};
