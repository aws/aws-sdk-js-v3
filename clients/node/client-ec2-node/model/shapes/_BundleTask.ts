import { _BundleTaskError } from "./_BundleTaskError";
import { _Storage } from "./_Storage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BundleTask: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BundleId: {
      shape: {
        type: "string"
      },
      locationName: "bundleId"
    },
    BundleTaskError: {
      shape: _BundleTaskError,
      locationName: "error"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    Progress: {
      shape: {
        type: "string"
      },
      locationName: "progress"
    },
    StartTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "startTime"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    Storage: {
      shape: _Storage,
      locationName: "storage"
    },
    UpdateTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "updateTime"
    }
  }
};
