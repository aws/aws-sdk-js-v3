import { _FleetList } from "./_FleetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Fleets: {
      shape: _FleetList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
