import { _ResourceLocation } from "./_ResourceLocation";
import { _TagList } from "./_TagList";
import { _RelationalDatabaseHardware } from "./_RelationalDatabaseHardware";
import { _PendingModifiedRelationalDatabaseValues } from "./_PendingModifiedRelationalDatabaseValues";
import { _RelationalDatabaseEndpoint } from "./_RelationalDatabaseEndpoint";
import { _PendingMaintenanceActionList } from "./_PendingMaintenanceActionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RelationalDatabase: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    supportCode: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    location: {
      shape: _ResourceLocation
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    },
    relationalDatabaseBlueprintId: {
      shape: {
        type: "string"
      }
    },
    relationalDatabaseBundleId: {
      shape: {
        type: "string"
      }
    },
    masterDatabaseName: {
      shape: {
        type: "string"
      }
    },
    hardware: {
      shape: _RelationalDatabaseHardware
    },
    state: {
      shape: {
        type: "string"
      }
    },
    secondaryAvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    backupRetentionEnabled: {
      shape: {
        type: "boolean"
      }
    },
    pendingModifiedValues: {
      shape: _PendingModifiedRelationalDatabaseValues
    },
    engine: {
      shape: {
        type: "string"
      }
    },
    engineVersion: {
      shape: {
        type: "string"
      }
    },
    latestRestorableTime: {
      shape: {
        type: "timestamp"
      }
    },
    masterUsername: {
      shape: {
        type: "string"
      }
    },
    parameterApplyStatus: {
      shape: {
        type: "string"
      }
    },
    preferredBackupWindow: {
      shape: {
        type: "string"
      }
    },
    preferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
    },
    publiclyAccessible: {
      shape: {
        type: "boolean"
      }
    },
    masterEndpoint: {
      shape: _RelationalDatabaseEndpoint
    },
    pendingMaintenanceActions: {
      shape: _PendingMaintenanceActionList
    }
  }
};
