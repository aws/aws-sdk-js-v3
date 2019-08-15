import { _ParameterList } from "./_ParameterList";
import { _ParameterNameList } from "./_ParameterNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetParametersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Parameters: {
      shape: _ParameterList
    },
    InvalidParameters: {
      shape: _ParameterNameList
    }
  }
};
