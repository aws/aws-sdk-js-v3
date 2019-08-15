import { _SourceConfiguration } from "./_SourceConfiguration";
import { _ConfigurationOptionSettingsList } from "./_ConfigurationOptionSettingsList";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateConfigurationTemplateInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "TemplateName"],
  members: {
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
    SourceConfiguration: {
      shape: _SourceConfiguration
    },
    EnvironmentId: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    OptionSettings: {
      shape: _ConfigurationOptionSettingsList
    },
    Tags: {
      shape: _Tags
    }
  }
};
