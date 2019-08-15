import { _RetentionPeriod } from "./_RetentionPeriod";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDatastoreOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    datastoreName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    datastoreArn: {
      shape: {
        type: "string"
      }
    },
    retentionPeriod: {
      shape: _RetentionPeriod
    }
  }
};
