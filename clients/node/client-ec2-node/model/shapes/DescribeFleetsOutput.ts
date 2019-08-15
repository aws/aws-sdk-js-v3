import { _FleetSet } from "./_FleetSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    Fleets: {
      shape: _FleetSet,
      locationName: "fleetSet"
    }
  }
};
