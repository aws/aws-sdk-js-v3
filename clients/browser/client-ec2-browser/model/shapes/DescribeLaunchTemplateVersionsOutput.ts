import { _LaunchTemplateVersionSet } from "./_LaunchTemplateVersionSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLaunchTemplateVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplateVersions: {
      shape: _LaunchTemplateVersionSet,
      locationName: "launchTemplateVersionSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
