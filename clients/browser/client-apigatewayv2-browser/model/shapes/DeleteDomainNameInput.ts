import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDomainNameInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "domainName"
    }
  }
};
