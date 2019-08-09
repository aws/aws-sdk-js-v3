import { _GroundStationList } from "./_GroundStationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGroundStationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    groundStationList: {
      shape: _GroundStationList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
