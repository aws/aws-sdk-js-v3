import { _FleetSummaryList } from "./_FleetSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFleetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetSummaryList: {
      shape: _FleetSummaryList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
