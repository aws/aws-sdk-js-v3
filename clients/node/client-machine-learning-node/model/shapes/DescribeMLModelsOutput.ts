import { _MLModels } from "./_MLModels";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMLModelsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Results: {
      shape: _MLModels
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
