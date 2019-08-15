import { _RetentionPeriod } from "./_RetentionPeriod";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDatasetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    datasetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    datasetArn: {
      shape: {
        type: "string"
      }
    },
    retentionPeriod: {
      shape: _RetentionPeriod
    }
  }
};
