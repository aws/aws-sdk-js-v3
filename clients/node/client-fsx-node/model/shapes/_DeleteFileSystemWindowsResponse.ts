import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeleteFileSystemWindowsResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FinalBackupId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    FinalBackupTags: {
      shape: _Tags
    }
  }
};
