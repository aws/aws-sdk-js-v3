import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDomainNameInput: _Structure_ = {
  type: "structure",
  required: ["domainName"],
  members: {
    domainName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "domain_name"
    }
  }
};
