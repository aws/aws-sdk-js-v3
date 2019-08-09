import { _Datasets } from "./_Datasets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDatasetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    datasets: {
      shape: _Datasets
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
