import { _DatastoreStorage } from "./_DatastoreStorage";
import { _RetentionPeriod } from "./_RetentionPeriod";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Datastore: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    storage: {
      shape: _DatastoreStorage
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    retentionPeriod: {
      shape: _RetentionPeriod
    },
    creationTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
