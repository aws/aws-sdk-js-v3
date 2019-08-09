import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstancePatchState: _Structure_ = {
  type: "structure",
  required: [
    "InstanceId",
    "PatchGroup",
    "BaselineId",
    "OperationStartTime",
    "OperationEndTime",
    "Operation"
  ],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    PatchGroup: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BaselineId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    SnapshotId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    InstallOverrideList: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OwnerInformation: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    InstalledCount: {
      shape: {
        type: "integer"
      }
    },
    InstalledOtherCount: {
      shape: {
        type: "integer"
      }
    },
    InstalledRejectedCount: {
      shape: {
        type: "integer"
      }
    },
    MissingCount: {
      shape: {
        type: "integer"
      }
    },
    FailedCount: {
      shape: {
        type: "integer"
      }
    },
    UnreportedNotApplicableCount: {
      shape: {
        type: "integer"
      }
    },
    NotApplicableCount: {
      shape: {
        type: "integer"
      }
    },
    OperationStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    OperationEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    Operation: {
      shape: {
        type: "string"
      }
    }
  }
};
