import { _DomainNameConfigurations } from "./_DomainNameConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDomainNameInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "domainName"
    },
    DomainNameConfigurations: {
      shape: _DomainNameConfigurations,
      locationName: "domainNameConfigurations"
    }
  }
};
