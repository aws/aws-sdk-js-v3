import { _DomainNameConfigurations } from "./_DomainNameConfigurations";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainName: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    ApiMappingSelectionExpression: {
      shape: {
        type: "string"
      },
      locationName: "apiMappingSelectionExpression"
    },
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
