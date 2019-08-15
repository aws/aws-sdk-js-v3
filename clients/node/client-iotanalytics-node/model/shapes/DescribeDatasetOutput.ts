import { _Dataset } from "./_Dataset";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDatasetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    dataset: {
      shape: _Dataset
    }
  }
};
