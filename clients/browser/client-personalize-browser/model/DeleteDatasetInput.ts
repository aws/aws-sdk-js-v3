import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDatasetInput: _Structure_ = {
  type: "structure",
  required: ["datasetArn"],
  members: {
    datasetArn: {
      shape: {
        type: "string"
      }
    }
  }
};
