import { _DocumentKeyValuesFilterValues } from "./_DocumentKeyValuesFilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DocumentKeyValuesFilter: _Structure_ = {
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
      shape: _DocumentKeyValuesFilterValues
    }
  }
};
