import { _DeviceFilters } from "./_DeviceFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceSelectionResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    filters: {
      shape: _DeviceFilters
    },
    matchedDevicesCount: {
      shape: {
        type: "integer"
      }
    },
    maxDevices: {
      shape: {
        type: "integer"
      }
    }
  }
};
