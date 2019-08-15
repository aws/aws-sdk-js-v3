import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDatasetInput: _Structure_ = {
  type: "structure",
  required: ["name", "schemaArn", "datasetGroupArn", "datasetType"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    schemaArn: {
      shape: {
        type: "string"
      }
    },
    datasetGroupArn: {
      shape: {
        type: "string"
      }
    },
    datasetType: {
      shape: {
        type: "string"
      }
    }
  }
};
