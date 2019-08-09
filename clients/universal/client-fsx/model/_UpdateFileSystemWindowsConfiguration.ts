import { _SelfManagedActiveDirectoryConfigurationUpdates } from "./_SelfManagedActiveDirectoryConfigurationUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpdateFileSystemWindowsConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    SelfManagedActiveDirectoryConfiguration: {
      shape: _SelfManagedActiveDirectoryConfigurationUpdates
    }
  }
};
