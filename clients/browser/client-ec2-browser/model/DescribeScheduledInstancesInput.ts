import { _FilterList } from "./_FilterList";
import { _ScheduledInstanceIdRequestSet } from "./_ScheduledInstanceIdRequestSet";
import { _SlotStartTimeRangeRequest } from "./_SlotStartTimeRangeRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScheduledInstancesInput: _Structure_ = {
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
    ScheduledInstanceIds: {
      shape: _ScheduledInstanceIdRequestSet,
      locationName: "ScheduledInstanceId"
    },
    SlotStartTimeRange: {
      shape: _SlotStartTimeRangeRequest
    }
  }
};
