import { _DomainSummaryList } from "./_DomainSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDomainsOutput: _Structure_ = {
  type: "structure",
  required: ["Domains"],
  members: {
    Domains: {
      shape: _DomainSummaryList
    },
    NextPageMarker: {
      shape: {
        type: "string"
      }
    }
  }
};
