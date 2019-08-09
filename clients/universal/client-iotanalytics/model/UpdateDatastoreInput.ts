import { _RetentionPeriod } from "./_RetentionPeriod";
import { _DatastoreStorage } from "./_DatastoreStorage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDatastoreInput: _Structure_ = {
  type: "structure",
  required: ["datastoreName"],
  members: {
    datastoreName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "datastoreName"
    },
    retentionPeriod: {
      shape: _RetentionPeriod
    },
    datastoreStorage: {
      shape: _DatastoreStorage
    }
  }
};
