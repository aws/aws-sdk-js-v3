import { _DomainNameList } from "./_DomainNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDomainsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DomainNames: {
      shape: _DomainNameList
    }
  }
};
