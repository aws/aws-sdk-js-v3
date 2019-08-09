import { _ParameterList } from "./_ParameterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeParametersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _ParameterList
    }
  }
};
