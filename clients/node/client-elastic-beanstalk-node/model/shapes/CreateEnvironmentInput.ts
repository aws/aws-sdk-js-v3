import { _EnvironmentTier } from "./_EnvironmentTier";
import { _Tags } from "./_Tags";
import { _ConfigurationOptionSettingsList } from "./_ConfigurationOptionSettingsList";
import { _OptionsSpecifierList } from "./_OptionsSpecifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEnvironmentInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
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
    CNAMEPrefix: {
      shape: {
        type: "string",
        min: 4
      }
    },
    Tier: {
      shape: _EnvironmentTier
    },
    Tags: {
      shape: _Tags
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
