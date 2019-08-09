import { _FilterList } from "./_FilterList";
import { _InstanceIdStringList } from "./_InstanceIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstanceStatusInput: _Structure_ = {
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
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    IncludeAllInstances: {
      shape: {
        type: "boolean"
      },
      locationName: "includeAllInstances"
    }
  }
};
