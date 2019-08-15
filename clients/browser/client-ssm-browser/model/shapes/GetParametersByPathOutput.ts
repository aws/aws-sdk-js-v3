import { _ParameterList } from "./_ParameterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetParametersByPathOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Parameters: {
      shape: _ParameterList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
