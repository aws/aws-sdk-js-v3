import { _DestinationBackup } from "./_DestinationBackup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyBackupToRegionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DestinationBackup: {
      shape: _DestinationBackup
    }
  }
};
