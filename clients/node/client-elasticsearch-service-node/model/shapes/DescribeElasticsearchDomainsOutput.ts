import { _ElasticsearchDomainStatusList } from "./_ElasticsearchDomainStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeElasticsearchDomainsOutput: _Structure_ = {
  type: "structure",
  required: ["DomainStatusList"],
  members: {
    DomainStatusList: {
      shape: _ElasticsearchDomainStatusList
    }
  }
};
