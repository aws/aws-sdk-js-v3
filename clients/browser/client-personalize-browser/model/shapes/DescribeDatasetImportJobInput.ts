import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDatasetImportJobInput: _Structure_ = {
  type: "structure",
  required: ["datasetImportJobArn"],
  members: {
    datasetImportJobArn: {
      shape: {
        type: "string"
      }
    }
  }
};
