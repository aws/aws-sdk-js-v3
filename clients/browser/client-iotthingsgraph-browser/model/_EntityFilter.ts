import { _EntityFilterValues } from "./_EntityFilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EntityFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: _EntityFilterValues
    }
  }
};
