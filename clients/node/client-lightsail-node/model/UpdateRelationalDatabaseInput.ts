import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRelationalDatabaseInput: _Structure_ = {
  type: "structure",
  required: ["relationalDatabaseName"],
  members: {
    relationalDatabaseName: {
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
    rotateMasterUserPassword: {
      shape: {
        type: "boolean"
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
    enableBackupRetention: {
      shape: {
        type: "boolean"
      }
    },
    disableBackupRetention: {
      shape: {
        type: "boolean"
      }
    },
    publiclyAccessible: {
      shape: {
        type: "boolean"
      }
    },
    applyImmediately: {
      shape: {
        type: "boolean"
      }
    }
  }
};
