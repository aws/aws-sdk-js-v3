import { _DnsIpAddrs } from "./_DnsIpAddrs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateConditionalForwarderInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "RemoteDomainName", "DnsIpAddrs"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    RemoteDomainName: {
      shape: {
        type: "string"
      }
    },
    DnsIpAddrs: {
      shape: _DnsIpAddrs
    }
  }
};
