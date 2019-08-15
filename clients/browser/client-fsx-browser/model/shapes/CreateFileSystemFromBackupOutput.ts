import { _FileSystem } from "./_FileSystem";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFileSystemFromBackupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FileSystem: {
      shape: _FileSystem
    }
  }
};
