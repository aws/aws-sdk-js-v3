import { _InstanceFleetList } from "./_InstanceFleetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInstanceFleetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceFleets: {
      shape: _InstanceFleetList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
