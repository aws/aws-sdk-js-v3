import { _ResourceLocation } from "./_ResourceLocation";
import { _ExportSnapshotRecordSourceInfo } from "./_ExportSnapshotRecordSourceInfo";
import { _DestinationInfo } from "./_DestinationInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExportSnapshotRecord: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    location: {
      shape: _ResourceLocation
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    state: {
      shape: {
        type: "string"
      }
    },
    sourceInfo: {
      shape: _ExportSnapshotRecordSourceInfo
    },
    destinationInfo: {
      shape: _DestinationInfo
    }
  }
};
