import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApiMappingInput: _Structure_ = {
  type: "structure",
  required: ["ApiMappingId", "ApiId", "DomainName"],
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
      location: "uri",
      locationName: "apiMappingId"
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
