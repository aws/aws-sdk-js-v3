import { _NeighborDetailsList } from "./_NeighborDetailsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListServerNeighborsOutput: _Structure_ = {
  type: "structure",
  required: ["neighbors"],
  members: {
    neighbors: {
      shape: _NeighborDetailsList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    knownDependencyCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
