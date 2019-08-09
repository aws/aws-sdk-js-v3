import { _DiskInfoList } from "./_DiskInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceSnapshotInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    fromBundleId: {
      shape: {
        type: "string"
      }
    },
    fromBlueprintId: {
      shape: {
        type: "string"
      }
    },
    fromDiskInfo: {
      shape: _DiskInfoList
    }
  }
};
