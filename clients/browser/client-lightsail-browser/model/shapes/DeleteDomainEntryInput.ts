import { _DomainEntry } from "./_DomainEntry";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDomainEntryInput: _Structure_ = {
  type: "structure",
  required: ["domainName", "domainEntry"],
  members: {
    domainName: {
      shape: {
        type: "string"
      }
    },
    domainEntry: {
      shape: _DomainEntry
    }
  }
};
