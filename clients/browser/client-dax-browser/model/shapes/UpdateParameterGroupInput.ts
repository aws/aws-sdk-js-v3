import { _ParameterNameValueList } from "./_ParameterNameValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateParameterGroupInput: _Structure_ = {
  type: "structure",
  required: ["ParameterGroupName", "ParameterNameValues"],
  members: {
    ParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    ParameterNameValues: {
      shape: _ParameterNameValueList
    }
  }
};
