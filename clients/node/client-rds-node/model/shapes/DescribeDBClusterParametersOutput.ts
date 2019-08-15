import { _ParametersList } from "./_ParametersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBClusterParametersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Parameters: {
      shape: _ParametersList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
