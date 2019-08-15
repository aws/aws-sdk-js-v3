import { _BackupJobsList } from "./_BackupJobsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBackupJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupJobs: {
      shape: _BackupJobsList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
