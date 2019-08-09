import { _EnvironmentTier } from "./_EnvironmentTier";
import { _ConfigurationOptionSettingsList } from "./_ConfigurationOptionSettingsList";
import { _OptionsSpecifierList } from "./_OptionsSpecifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateEnvironmentInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EnvironmentId: {
      shape: {
        type: "string"
      }
    },
    EnvironmentName: {
      shape: {
        type: "string",
        min: 4
      }
    },
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Tier: {
      shape: _EnvironmentTier
    },
    VersionLabel: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TemplateName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SolutionStackName: {
      shape: {
        type: "string"
      }
    },
    PlatformArn: {
      shape: {
        type: "string"
      }
    },
    OptionSettings: {
      shape: _ConfigurationOptionSettingsList
    },
    OptionsToRemove: {
      shape: _OptionsSpecifierList
    }
  }
};
