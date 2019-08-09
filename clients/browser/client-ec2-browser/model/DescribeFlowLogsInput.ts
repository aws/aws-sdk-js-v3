import { _FilterList } from "./_FilterList";
import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFlowLogsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    Filter: {
      shape: _FilterList
    },
    FlowLogIds: {
      shape: _ValueStringList,
      locationName: "FlowLogId"
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
    }
  }
};
