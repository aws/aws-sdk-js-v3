import { _DomainInfo } from "./_DomainInfo";
import { _DomainConfiguration } from "./_DomainConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDomainOutput: _Structure_ = {
  type: "structure",
  required: ["domainInfo", "configuration"],
  members: {
    domainInfo: {
      shape: _DomainInfo
    },
    configuration: {
      shape: _DomainConfiguration
    }
  }
};
