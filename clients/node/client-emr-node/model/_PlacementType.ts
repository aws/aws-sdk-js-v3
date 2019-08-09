import { _XmlStringMaxLen256List } from "./_XmlStringMaxLen256List";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlacementType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZones: {
      shape: _XmlStringMaxLen256List
    }
  }
};
