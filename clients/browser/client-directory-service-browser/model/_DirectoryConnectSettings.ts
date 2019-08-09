import { _SubnetIds } from "./_SubnetIds";
import { _DnsIpAddrs } from "./_DnsIpAddrs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DirectoryConnectSettings: _Structure_ = {
  type: "structure",
  required: ["VpcId", "SubnetIds", "CustomerDnsIps", "CustomerUserName"],
  members: {
    VpcId: {
      shape: {
        type: "string"
      }
    },
    SubnetIds: {
      shape: _SubnetIds
    },
    CustomerDnsIps: {
      shape: _DnsIpAddrs
    },
    CustomerUserName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
