import { _DatasetSummaries } from "./_DatasetSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDatasetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    datasetSummaries: {
      shape: _DatasetSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
