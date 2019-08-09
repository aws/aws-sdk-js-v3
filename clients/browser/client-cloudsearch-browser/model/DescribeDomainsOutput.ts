import { _DomainStatusList } from "./_DomainStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDomainsOutput: _Structure_ = {
  type: "structure",
  required: ["DomainStatusList"],
  members: {
    DomainStatusList: {
      shape: _DomainStatusList
    }
  }
};
