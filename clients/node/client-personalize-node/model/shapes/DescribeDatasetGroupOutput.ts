import { _DatasetGroup } from "./_DatasetGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDatasetGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    datasetGroup: {
      shape: _DatasetGroup
    }
  }
};
