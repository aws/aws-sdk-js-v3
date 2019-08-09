import { _MaintenanceWindowFilterList } from "./_MaintenanceWindowFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMaintenanceWindowsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _MaintenanceWindowFilterList
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 10
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
