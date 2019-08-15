import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeleteFileSystemWindowsConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SkipFinalBackup: {
      shape: {
        type: "boolean"
      }
    },
    FinalBackupTags: {
      shape: _Tags
    }
  }
};
