import { _DatastoreStorage } from "./_DatastoreStorage";
import { _RetentionPeriod } from "./_RetentionPeriod";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDatastoreInput: _Structure_ = {
  type: "structure",
  required: ["datastoreName"],
  members: {
    datastoreName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    datastoreStorage: {
      shape: _DatastoreStorage
    },
    retentionPeriod: {
      shape: _RetentionPeriod
    },
    tags: {
      shape: _TagList
    }
  }
};
