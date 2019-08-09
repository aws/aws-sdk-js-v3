import { _ElasticsearchDomainStatus } from "./_ElasticsearchDomainStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeElasticsearchDomainOutput: _Structure_ = {
  type: "structure",
  required: ["DomainStatus"],
  members: {
    DomainStatus: {
      shape: _ElasticsearchDomainStatus
    }
  }
};
