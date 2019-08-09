import { _InstanceInformationFilterValueSet } from "./_InstanceInformationFilterValueSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceInformationFilter: _Structure_ = {
  type: "structure",
  required: ["key", "valueSet"],
  members: {
    key: {
      shape: {
        type: "string"
      }
    },
    valueSet: {
      shape: _InstanceInformationFilterValueSet
    }
  }
};
