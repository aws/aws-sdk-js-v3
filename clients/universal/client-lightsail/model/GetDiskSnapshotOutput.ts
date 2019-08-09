import { _DiskSnapshot } from "./_DiskSnapshot";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDiskSnapshotOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    diskSnapshot: {
      shape: _DiskSnapshot
    }
  }
};
