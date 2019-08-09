import { _ValueStringList } from "./_ValueStringList";
import { _LaunchTemplateNameStringList } from "./_LaunchTemplateNameStringList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLaunchTemplatesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    LaunchTemplateIds: {
      shape: _ValueStringList,
      locationName: "LaunchTemplateId"
    },
    LaunchTemplateNames: {
      shape: _LaunchTemplateNameStringList,
      locationName: "LaunchTemplateName"
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
