import { _ConfigurationOptionSettingsList } from "./_ConfigurationOptionSettingsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateConfigurationTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    ApplicationName: {
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
    Description: {
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
    DeploymentStatus: {
      shape: {
        type: "string"
      }
    },
    DateCreated: {
      shape: {
        type: "timestamp"
      }
    },
    DateUpdated: {
      shape: {
        type: "timestamp"
      }
    },
    OptionSettings: {
      shape: _ConfigurationOptionSettingsList
    }
  }
};
