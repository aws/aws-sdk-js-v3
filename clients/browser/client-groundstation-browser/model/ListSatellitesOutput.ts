import { _SatelliteList } from "./_SatelliteList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSatellitesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    nextToken: {
      shape: {
        type: "string"
      }
    },
    satellites: {
      shape: _SatelliteList
    }
  }
};
