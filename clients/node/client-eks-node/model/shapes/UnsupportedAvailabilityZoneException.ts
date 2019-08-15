import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UnsupportedAvailabilityZoneException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    clusterName: {
      shape: {
        type: "string"
      }
    },
    validZones: {
      shape: _StringList
    }
  },
  exceptionType: "UnsupportedAvailabilityZoneException"
};
