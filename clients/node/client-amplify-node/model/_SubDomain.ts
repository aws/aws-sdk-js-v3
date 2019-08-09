import { _SubDomainSetting } from "./_SubDomainSetting";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SubDomain: _Structure_ = {
  type: "structure",
  required: ["subDomainSetting", "verified", "dnsRecord"],
  members: {
    subDomainSetting: {
      shape: _SubDomainSetting
    },
    verified: {
      shape: {
        type: "boolean"
      }
    },
    dnsRecord: {
      shape: {
        type: "string"
      }
    }
  }
};
