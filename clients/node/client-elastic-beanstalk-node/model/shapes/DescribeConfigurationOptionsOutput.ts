import { _ConfigurationOptionDescriptionsList } from "./_ConfigurationOptionDescriptionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationOptionsOutput: _Structure_ = {
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
    Options: {
      shape: _ConfigurationOptionDescriptionsList
    }
  }
};
