import { _MinimumEngineVersionPerAllowedValueList } from "./_MinimumEngineVersionPerAllowedValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OptionGroupOptionSetting: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SettingName: {
      shape: {
        type: "string"
      }
    },
    SettingDescription: {
      shape: {
        type: "string"
      }
    },
    DefaultValue: {
      shape: {
        type: "string"
      }
    },
    ApplyType: {
      shape: {
        type: "string"
      }
    },
    AllowedValues: {
      shape: {
        type: "string"
      }
    },
    IsModifiable: {
      shape: {
        type: "boolean"
      }
    },
    IsRequired: {
      shape: {
        type: "boolean"
      }
    },
    MinimumEngineVersionPerAllowedValue: {
      shape: _MinimumEngineVersionPerAllowedValueList
    }
  }
};
