import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRelationalDatabaseFromSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["relationalDatabaseName"],
  members: {
    relationalDatabaseName: {
      shape: {
        type: "string"
      }
    },
    availabilityZone: {
      shape: {
        type: "string"
      }
    },
    publiclyAccessible: {
      shape: {
        type: "boolean"
      }
    },
    relationalDatabaseSnapshotName: {
      shape: {
        type: "string"
      }
    },
    relationalDatabaseBundleId: {
      shape: {
        type: "string"
      }
    },
    sourceRelationalDatabaseName: {
      shape: {
        type: "string"
      }
    },
    restoreTime: {
      shape: {
        type: "timestamp"
      }
    },
    useLatestRestorableTime: {
      shape: {
        type: "boolean"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
