import { _StringList } from "./_StringList";
import { _AttachedDiskMap } from "./_AttachedDiskMap";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInstancesFromSnapshotInput: _Structure_ = {
  type: "structure",
  required: [
    "instanceNames",
    "availabilityZone",
    "instanceSnapshotName",
    "bundleId"
  ],
  members: {
    instanceNames: {
      shape: _StringList
    },
    attachedDiskMapping: {
      shape: _AttachedDiskMap
    },
    availabilityZone: {
      shape: {
        type: "string"
      }
    },
    instanceSnapshotName: {
      shape: {
        type: "string"
      }
    },
    bundleId: {
      shape: {
        type: "string"
      }
    },
    userData: {
      shape: {
        type: "string"
      }
    },
    keyPairName: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
