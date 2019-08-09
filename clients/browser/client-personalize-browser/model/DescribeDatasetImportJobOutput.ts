import { _DatasetImportJob } from "./_DatasetImportJob";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDatasetImportJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    datasetImportJob: {
      shape: _DatasetImportJob
    }
  }
};
