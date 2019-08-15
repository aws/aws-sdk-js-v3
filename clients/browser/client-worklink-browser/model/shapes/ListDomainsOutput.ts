import { _DomainSummaryList } from "./_DomainSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDomainsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Domains: {
      shape: _DomainSummaryList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
