import { _AvailabilityZoneList } from "./_AvailabilityZoneList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Region: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    continentCode: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    displayName: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    availabilityZones: {
      shape: _AvailabilityZoneList
    },
    relationalDatabaseAvailabilityZones: {
      shape: _AvailabilityZoneList
    }
  }
};
