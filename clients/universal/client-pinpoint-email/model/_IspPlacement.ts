import { _PlacementStatistics } from "./_PlacementStatistics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IspPlacement: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IspName: {
      shape: {
        type: "string"
      }
    },
    PlacementStatistics: {
      shape: _PlacementStatistics
    }
  }
};
