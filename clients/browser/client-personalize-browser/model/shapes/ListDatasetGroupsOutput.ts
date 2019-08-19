import { _DatasetGroups } from "./_DatasetGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDatasetGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    datasetGroups: {
      shape: _DatasetGroups
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
