import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDatasetContentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    versionId: {
      shape: {
        type: "string",
        min: 7
      }
    }
  }
};
