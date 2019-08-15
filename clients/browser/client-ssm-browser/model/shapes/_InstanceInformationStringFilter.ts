import { _InstanceInformationFilterValueSet } from "./_InstanceInformationFilterValueSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceInformationStringFilter: _Structure_ = {
  type: "structure",
  required: ["Key", "Values"],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Values: {
      shape: _InstanceInformationFilterValueSet
    }
  }
};
