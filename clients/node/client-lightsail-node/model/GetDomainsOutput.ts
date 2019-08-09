import { _DomainList } from "./_DomainList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDomainsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    domains: {
      shape: _DomainList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
