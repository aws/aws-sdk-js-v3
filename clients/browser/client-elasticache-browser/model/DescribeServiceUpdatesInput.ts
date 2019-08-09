import { _ServiceUpdateStatusList } from "./_ServiceUpdateStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServiceUpdatesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceUpdateName: {
      shape: {
        type: "string"
      }
    },
    ServiceUpdateStatus: {
      shape: _ServiceUpdateStatusList
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
