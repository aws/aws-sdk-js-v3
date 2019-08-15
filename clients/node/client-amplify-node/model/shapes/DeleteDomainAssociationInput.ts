import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDomainAssociationInput: _Structure_ = {
  type: "structure",
  required: ["appId", "domainName"],
  members: {
    appId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "appId"
    },
    domainName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "domainName"
    }
  }
};
