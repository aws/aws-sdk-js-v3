import { _PlacementSummaryList } from "./_PlacementSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPlacementsOutput: _Structure_ = {
  type: "structure",
  required: ["placements"],
  members: {
    placements: {
      shape: _PlacementSummaryList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
