import { _DatasetList } from "./_DatasetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDatasetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Datasets: {
      shape: _DatasetList
    },
    Count: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
