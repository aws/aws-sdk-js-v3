import { _SystemInstanceFilterValues } from "./_SystemInstanceFilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SystemInstanceFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: _SystemInstanceFilterValues
    }
  }
};
