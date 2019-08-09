import { _DeviceFilters } from "./_DeviceFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceSelectionConfiguration: _Structure_ = {
  type: "structure",
  required: ["filters", "maxDevices"],
  members: {
    filters: {
      shape: _DeviceFilters
    },
    maxDevices: {
      shape: {
        type: "integer"
      }
    }
  }
};
