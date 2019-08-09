import { _InstanceSnapshotInfo } from "./_InstanceSnapshotInfo";
import { _DiskSnapshotInfo } from "./_DiskSnapshotInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExportSnapshotRecordSourceInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceType: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    fromResourceName: {
      shape: {
        type: "string"
      }
    },
    fromResourceArn: {
      shape: {
        type: "string"
      }
    },
    instanceSnapshotInfo: {
      shape: _InstanceSnapshotInfo
    },
    diskSnapshotInfo: {
      shape: _DiskSnapshotInfo
    }
  }
};
