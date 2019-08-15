import { _ParametersFilterValueList } from "./_ParametersFilterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParametersFilter: _Structure_ = {
  type: "structure",
  required: ["Key", "Values"],
  members: {
    Key: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _ParametersFilterValueList
    }
  }
};
