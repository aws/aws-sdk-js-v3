import { _ParameterMetadataList } from "./_ParameterMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeParametersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Parameters: {
      shape: _ParameterMetadataList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
