import { _DatasetImportJobs } from "./_DatasetImportJobs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDatasetImportJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    datasetImportJobs: {
      shape: _DatasetImportJobs
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
