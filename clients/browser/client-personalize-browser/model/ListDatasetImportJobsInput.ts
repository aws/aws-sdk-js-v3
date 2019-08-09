import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDatasetImportJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    datasetArn: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
