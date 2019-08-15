import { _DnsIps } from "./_DnsIps";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SelfManagedActiveDirectoryConfigurationUpdates: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Password: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    DnsIps: {
      shape: _DnsIps
    }
  }
};
