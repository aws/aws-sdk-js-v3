import { _NameserverList } from "./_NameserverList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDomainNameserversInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "Nameservers"],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    FIAuthKey: {
      shape: {
        type: "string"
      }
    },
    Nameservers: {
      shape: _NameserverList
    }
  }
};
