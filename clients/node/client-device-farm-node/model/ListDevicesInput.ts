import { _DeviceFilters } from "./_DeviceFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDevicesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    },
    filters: {
      shape: _DeviceFilters
    }
  }
};
