import { _DefaultClusterParameters } from "./_DefaultClusterParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDefaultClusterParametersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DefaultClusterParameters: {
      shape: _DefaultClusterParameters
    }
  }
};
