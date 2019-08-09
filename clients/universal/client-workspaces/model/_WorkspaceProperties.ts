import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkspaceProperties: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RunningMode: {
      shape: {
        type: "string"
      }
    },
    RunningModeAutoStopTimeoutInMinutes: {
      shape: {
        type: "integer"
      }
    },
    RootVolumeSizeGib: {
      shape: {
        type: "integer"
      }
    },
    UserVolumeSizeGib: {
      shape: {
        type: "integer"
      }
    },
    ComputeTypeName: {
      shape: {
        type: "string"
      }
    }
  }
};
