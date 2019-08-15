import { _DataSource } from "./_DataSource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDatasetImportJobInput: _Structure_ = {
  type: "structure",
  required: ["jobName", "datasetArn", "dataSource", "roleArn"],
  members: {
    jobName: {
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
    dataSource: {
      shape: _DataSource
    },
    roleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
