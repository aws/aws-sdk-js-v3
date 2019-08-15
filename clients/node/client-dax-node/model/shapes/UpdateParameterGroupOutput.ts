import { _ParameterGroup } from "./_ParameterGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateParameterGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterGroup: {
      shape: _ParameterGroup
    }
  }
};
