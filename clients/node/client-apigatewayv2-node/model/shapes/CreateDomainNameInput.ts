import { _DomainNameConfigurations } from "./_DomainNameConfigurations";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDomainNameInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string"
      },
      locationName: "domainName"
    },
    DomainNameConfigurations: {
      shape: _DomainNameConfigurations,
      locationName: "domainNameConfigurations"
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    }
  }
};
