import { _OptionSettingConfigurationList } from "./_OptionSettingConfigurationList";
import { _DBSecurityGroupMembershipList } from "./_DBSecurityGroupMembershipList";
import { _VpcSecurityGroupMembershipList } from "./_VpcSecurityGroupMembershipList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Option: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OptionName: {
      shape: {
        type: "string"
      }
    },
    OptionDescription: {
      shape: {
        type: "string"
      }
    },
    Persistent: {
      shape: {
        type: "boolean"
      }
    },
    Permanent: {
      shape: {
        type: "boolean"
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
    },
    OptionVersion: {
      shape: {
        type: "string"
      }
    },
    OptionSettings: {
      shape: _OptionSettingConfigurationList
    },
    DBSecurityGroupMemberships: {
      shape: _DBSecurityGroupMembershipList
    },
    VpcSecurityGroupMemberships: {
      shape: _VpcSecurityGroupMembershipList
    }
  }
};
