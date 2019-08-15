import { _MaintenanceWindowFilterValues } from "./_MaintenanceWindowFilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MaintenanceWindowFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Values: {
      shape: _MaintenanceWindowFilterValues
    }
  }
};
