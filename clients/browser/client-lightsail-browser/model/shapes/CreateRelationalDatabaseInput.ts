import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRelationalDatabaseInput: _Structure_ = {
  type: "structure",
  required: [
    "relationalDatabaseName",
    "relationalDatabaseBlueprintId",
    "relationalDatabaseBundleId",
    "masterDatabaseName",
    "masterUsername"
  ],
  members: {
    relationalDatabaseName: {
      shape: {
        type: "string"
      }
    },
    availabilityZone: {
      shape: {
        type: "string"
      }
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
    masterUsername: {
      shape: {
        type: "string"
      }
    },
    masterUserPassword: {
      shape: {
        type: "string",
        sensitive: true
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
    tags: {
      shape: _TagList
    }
  }
};
