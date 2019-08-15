import { _FilterList } from "./_FilterList";
import { _GroupIdStringList } from "./_GroupIdStringList";
import { _GroupNameStringList } from "./_GroupNameStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSecurityGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    GroupIds: {
      shape: _GroupIdStringList,
      locationName: "GroupId"
    },
    GroupNames: {
      shape: _GroupNameStringList,
      locationName: "GroupName"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    }
  }
};
