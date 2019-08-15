import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBackupVaultInput: _Structure_ = {
  type: "structure",
  required: ["BackupVaultName"],
  members: {
    BackupVaultName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "backupVaultName"
    }
  }
};
