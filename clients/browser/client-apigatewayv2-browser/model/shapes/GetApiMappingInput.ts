import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetApiMappingInput: _Structure_ = {
  type: "structure",
  required: ["ApiMappingId", "DomainName"],
  members: {
    ApiMappingId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiMappingId"
    },
    DomainName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "domainName"
    }
  }
};
