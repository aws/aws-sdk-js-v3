import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyBackupToRegionInput: _Structure_ = {
  type: "structure",
  required: ["DestinationRegion", "BackupId"],
  members: {
    DestinationRegion: {
      shape: {
        type: "string"
      }
    },
    BackupId: {
      shape: {
        type: "string"
      }
    }
  }
};
