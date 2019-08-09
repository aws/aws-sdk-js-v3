import { _DnsIpAddrs } from "./_DnsIpAddrs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConditionalForwarder: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RemoteDomainName: {
      shape: {
        type: "string"
      }
    },
    DnsIpAddrs: {
      shape: _DnsIpAddrs
    },
    ReplicationScope: {
      shape: {
        type: "string"
      }
    }
  }
};
