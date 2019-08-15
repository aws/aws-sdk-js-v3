import { _DBSecurityGroupNameList } from "./_DBSecurityGroupNameList";
import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { _OptionSettingsList } from "./_OptionSettingsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OptionConfiguration: _Structure_ = {
  type: "structure",
  required: ["OptionName"],
  members: {
    OptionName: {
      shape: {
        type: "string"
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
    DBSecurityGroupMemberships: {
      shape: _DBSecurityGroupNameList
    },
    VpcSecurityGroupMemberships: {
      shape: _VpcSecurityGroupIdList
    },
    OptionSettings: {
      shape: _OptionSettingsList
    }
  }
};
