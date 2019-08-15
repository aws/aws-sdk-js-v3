import { _LaunchTemplateSet } from "./_LaunchTemplateSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLaunchTemplatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplates: {
      shape: _LaunchTemplateSet,
      locationName: "launchTemplates"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
