import { _S3Location } from "./_S3Location";
import { _ConfigurationOptionSettingsList } from "./_ConfigurationOptionSettingsList";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePlatformVersionInput: _Structure_ = {
  type: "structure",
  required: ["PlatformName", "PlatformVersion", "PlatformDefinitionBundle"],
  members: {
    PlatformName: {
      shape: {
        type: "string"
      }
    },
    PlatformVersion: {
      shape: {
        type: "string"
      }
    },
    PlatformDefinitionBundle: {
      shape: _S3Location
    },
    EnvironmentName: {
      shape: {
        type: "string",
        min: 4
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
