import { _SelfManagedActiveDirectoryConfiguration } from "./_SelfManagedActiveDirectoryConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CreateFileSystemWindowsConfiguration: _Structure_ = {
  type: "structure",
  required: ["ThroughputCapacity"],
  members: {
    ActiveDirectoryId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    SelfManagedActiveDirectoryConfiguration: {
      shape: _SelfManagedActiveDirectoryConfiguration
    },
    ThroughputCapacity: {
      shape: {
        type: "integer",
        min: 8
      }
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
