import { _OptionsSpecifierList } from "./_OptionsSpecifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationOptionsInput: _Structure_ = {
  type: "structure",
  required: [],
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
    EnvironmentName: {
      shape: {
        type: "string",
        min: 4
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
    Options: {
      shape: _OptionsSpecifierList
    }
  }
};
