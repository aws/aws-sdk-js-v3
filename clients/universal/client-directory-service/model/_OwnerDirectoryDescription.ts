import { _DnsIpAddrs } from "./_DnsIpAddrs";
import { _DirectoryVpcSettingsDescription } from "./_DirectoryVpcSettingsDescription";
import { _RadiusSettings } from "./_RadiusSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OwnerDirectoryDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    AccountId: {
      shape: {
        type: "string"
      }
    },
    DnsIpAddrs: {
      shape: _DnsIpAddrs
    },
    VpcSettings: {
      shape: _DirectoryVpcSettingsDescription
    },
    RadiusSettings: {
      shape: _RadiusSettings
    },
    RadiusStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
