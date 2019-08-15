import { _FleetIdList } from "./_FleetIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFleetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetIds: {
      shape: _FleetIdList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
