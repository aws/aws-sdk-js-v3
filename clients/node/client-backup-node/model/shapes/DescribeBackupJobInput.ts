import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBackupJobInput: _Structure_ = {
  type: "structure",
  required: ["BackupJobId"],
  members: {
    BackupJobId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "backupJobId"
    }
  }
};
