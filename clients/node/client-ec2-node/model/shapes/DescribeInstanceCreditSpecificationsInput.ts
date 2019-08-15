import { _FilterList } from "./_FilterList";
import { _InstanceIdStringList } from "./_InstanceIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstanceCreditSpecificationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
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
        type: "integer",
        min: 5
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
