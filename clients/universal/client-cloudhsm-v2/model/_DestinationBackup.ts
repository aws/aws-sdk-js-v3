import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DestinationBackup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreateTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    SourceRegion: {
      shape: {
        type: "string"
      }
    },
    SourceBackup: {
      shape: {
        type: "string"
      }
    },
    SourceCluster: {
      shape: {
        type: "string"
      }
    }
  }
};
