import { _DeviceFilterValues } from "./_DeviceFilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    attribute: {
      shape: {
        type: "string"
      }
    },
    operator: {
      shape: {
        type: "string"
      }
    },
    values: {
      shape: _DeviceFilterValues
    }
  }
};
