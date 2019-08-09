import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDBInstanceInput: _Structure_ = {
  type: "structure",
  required: [
    "DBInstanceIdentifier",
    "DBInstanceClass",
    "Engine",
    "DBClusterIdentifier"
  ],
  members: {
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBInstanceClass: {
      shape: {
        type: "string"
      }
    },
    Engine: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
    },
    AutoMinorVersionUpgrade: {
      shape: {
        type: "boolean"
      }
    },
    Tags: {
      shape: _TagList
    },
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    PromotionTier: {
      shape: {
        type: "integer"
      }
    }
  }
};
