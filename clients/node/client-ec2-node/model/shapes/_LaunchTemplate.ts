import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplateId: {
      shape: {
        type: "string"
      },
      locationName: "launchTemplateId"
    },
    LaunchTemplateName: {
      shape: {
        type: "string",
        min: 3
      },
      locationName: "launchTemplateName"
    },
    CreateTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "createTime"
    },
    CreatedBy: {
      shape: {
        type: "string"
      },
      locationName: "createdBy"
    },
    DefaultVersionNumber: {
      shape: {
        type: "integer"
      },
      locationName: "defaultVersionNumber"
    },
    LatestVersionNumber: {
      shape: {
        type: "integer"
      },
      locationName: "latestVersionNumber"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
