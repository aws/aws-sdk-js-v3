import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDatasetGroupInput: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    roleArn: {
      shape: {
        type: "string"
      }
    },
    kmsKeyArn: {
      shape: {
        type: "string"
      }
    }
  }
};
