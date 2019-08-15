import { _ReplicationGroupIdList } from "./_ReplicationGroupIdList";
import { _ServiceUpdateStatusList } from "./_ServiceUpdateStatusList";
import { _TimeRangeFilter } from "./_TimeRangeFilter";
import { _UpdateActionStatusList } from "./_UpdateActionStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUpdateActionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceUpdateName: {
      shape: {
        type: "string"
      }
    },
    ReplicationGroupIds: {
      shape: _ReplicationGroupIdList
    },
    ServiceUpdateStatus: {
      shape: _ServiceUpdateStatusList
    },
    ServiceUpdateTimeRange: {
      shape: _TimeRangeFilter
    },
    UpdateActionStatus: {
      shape: _UpdateActionStatusList
    },
    ShowNodeLevelUpdateStatus: {
      shape: {
        type: "boolean"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
