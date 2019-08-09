import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDatasetInput: _Structure_ = {
  type: "structure",
  required: ["datasetArn"],
  members: {
    datasetArn: {
      shape: {
        type: "string"
      }
    }
  }
};
