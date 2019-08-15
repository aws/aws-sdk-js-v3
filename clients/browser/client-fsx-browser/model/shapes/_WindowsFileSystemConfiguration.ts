import { _SelfManagedActiveDirectoryAttributes } from "./_SelfManagedActiveDirectoryAttributes";
import { _FileSystemMaintenanceOperations } from "./_FileSystemMaintenanceOperations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WindowsFileSystemConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActiveDirectoryId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    SelfManagedActiveDirectoryConfiguration: {
      shape: _SelfManagedActiveDirectoryAttributes
    },
    ThroughputCapacity: {
      shape: {
        type: "integer",
        min: 8
      }
    },
    MaintenanceOperationsInProgress: {
      shape: _FileSystemMaintenanceOperations
    },
    WeeklyMaintenanceStartTime: {
      shape: {
        type: "string",
        min: 7
      }
    },
    DailyAutomaticBackupStartTime: {
      shape: {
        type: "string",
        min: 5
      }
    },
    AutomaticBackupRetentionDays: {
      shape: {
        type: "integer"
      }
    },
    CopyTagsToBackups: {
      shape: {
        type: "boolean"
      }
    }
  }
};
