import { _LocationList } from "./_LocationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLocationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Locations: {
      shape: _LocationList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
