import { _Parameter } from "./_Parameter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetParameterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Parameter: {
      shape: _Parameter
    }
  }
};
