import { _VersionStringList } from "./_VersionStringList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLaunchTemplateVersionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    LaunchTemplateId: {
      shape: {
        type: "string"
      }
    },
    LaunchTemplateName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    Versions: {
      shape: _VersionStringList,
      locationName: "LaunchTemplateVersion"
    },
    MinVersion: {
      shape: {
        type: "string"
      }
    },
    MaxVersion: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    }
  }
};
