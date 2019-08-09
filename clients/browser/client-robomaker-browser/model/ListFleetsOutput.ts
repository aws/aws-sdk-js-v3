import { _Fleets } from "./_Fleets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFleetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    fleetDetails: {
      shape: _Fleets
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
