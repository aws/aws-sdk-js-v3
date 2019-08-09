import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDatasetGroupInput: _Structure_ = {
  type: "structure",
  required: ["datasetGroupArn"],
  members: {
    datasetGroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};
