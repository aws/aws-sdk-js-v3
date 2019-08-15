import { _ParameterNameList } from "./_ParameterNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteParametersInput: _Structure_ = {
  type: "structure",
  required: ["Names"],
  members: {
    Names: {
      shape: _ParameterNameList
    }
  }
};
