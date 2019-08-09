import { _AvailabilityZoneList } from "./_AvailabilityZoneList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OrderableDBInstanceOption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Engine: {
      shape: {
        type: "string"
      }
    },
    EngineVersion: {
      shape: {
        type: "string"
      }
    },
    DBInstanceClass: {
      shape: {
        type: "string"
      }
    },
    LicenseModel: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZones: {
      shape: _AvailabilityZoneList
    },
    Vpc: {
      shape: {
        type: "boolean"
      }
    }
  }
};
