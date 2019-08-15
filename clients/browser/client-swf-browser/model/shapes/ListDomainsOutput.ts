import { _DomainInfoList } from "./_DomainInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDomainsOutput: _Structure_ = {
  type: "structure",
  required: ["domainInfos"],
  members: {
    domainInfos: {
      shape: _DomainInfoList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
