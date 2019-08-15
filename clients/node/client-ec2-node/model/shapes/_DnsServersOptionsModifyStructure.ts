import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DnsServersOptionsModifyStructure: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomDnsServers: {
      shape: _ValueStringList
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
