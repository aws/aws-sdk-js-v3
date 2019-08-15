import { _ReplaceContentEntries } from "./_ReplaceContentEntries";
import { _DeleteFileEntries } from "./_DeleteFileEntries";
import { _SetFileModeEntries } from "./_SetFileModeEntries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConflictResolution: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    replaceContents: {
      shape: _ReplaceContentEntries
    },
    deleteFiles: {
      shape: _DeleteFileEntries
    },
    setFileModes: {
      shape: _SetFileModeEntries
    }
  }
};
