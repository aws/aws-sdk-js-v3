import { _ParameterNameList } from "./_ParameterNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteParametersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeletedParameters: {
      shape: _ParameterNameList
    },
    InvalidParameters: {
      shape: _ParameterNameList
    }
  }
};
