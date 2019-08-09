import { _OptionsDependedOn } from "./_OptionsDependedOn";
import { _OptionsConflictsWith } from "./_OptionsConflictsWith";
import { _OptionGroupOptionSettingsList } from "./_OptionGroupOptionSettingsList";
import { _OptionGroupOptionVersionsList } from "./_OptionGroupOptionVersionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OptionGroupOption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    EngineName: {
      shape: {
        type: "string"
      }
    },
    MajorEngineVersion: {
      shape: {
        type: "string"
      }
    },
    MinimumRequiredMinorEngineVersion: {
      shape: {
        type: "string"
      }
    },
    PortRequired: {
      shape: {
        type: "boolean"
      }
    },
    DefaultPort: {
      shape: {
        type: "integer"
      }
    },
    OptionsDependedOn: {
      shape: _OptionsDependedOn
    },
    OptionsConflictsWith: {
      shape: _OptionsConflictsWith
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
    RequiresAutoMinorEngineVersionUpgrade: {
      shape: {
        type: "boolean"
      }
    },
    VpcOnly: {
      shape: {
        type: "boolean"
      }
    },
    SupportsOptionVersionDowngrade: {
      shape: {
        type: "boolean"
      }
    },
    OptionGroupOptionSettings: {
      shape: _OptionGroupOptionSettingsList
    },
    OptionGroupOptionVersions: {
      shape: _OptionGroupOptionVersionsList
    }
  }
};
