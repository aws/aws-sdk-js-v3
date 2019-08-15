import { _DomainNameList } from "./_DomainNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeElasticsearchDomainsInput: _Structure_ = {
  type: "structure",
  required: ["DomainNames"],
  members: {
    DomainNames: {
      shape: _DomainNameList
    }
  }
};
