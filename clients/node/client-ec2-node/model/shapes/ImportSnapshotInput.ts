import { _ClientData } from "./_ClientData";
import { _SnapshotDiskContainer } from "./_SnapshotDiskContainer";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportSnapshotInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientData: {
      shape: _ClientData
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DiskContainer: {
      shape: _SnapshotDiskContainer
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    Encrypted: {
      shape: {
        type: "boolean"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    RoleName: {
      shape: {
        type: "string"
      }
    }
  }
};
