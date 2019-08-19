import { _FilterList } from "./_FilterList";
import { _InstanceIdStringList } from "./_InstanceIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstancesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    InstanceIds: {
      shape: _InstanceIdStringList,
      locationName: "InstanceId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    MaxResults: {
      shape: {
        type: "integer"
      },
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
