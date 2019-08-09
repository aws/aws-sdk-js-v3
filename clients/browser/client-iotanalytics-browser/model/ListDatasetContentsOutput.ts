import { _DatasetContentSummaries } from "./_DatasetContentSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDatasetContentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    datasetContentSummaries: {
      shape: _DatasetContentSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
