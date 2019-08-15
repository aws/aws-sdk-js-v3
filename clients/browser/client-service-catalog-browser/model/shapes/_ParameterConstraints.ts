import { _AllowedValues } from "./_AllowedValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterConstraints: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllowedValues: {
      shape: _AllowedValues
    }
  }
};
