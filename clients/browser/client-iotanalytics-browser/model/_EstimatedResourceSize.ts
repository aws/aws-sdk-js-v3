import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EstimatedResourceSize: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    estimatedSizeInBytes: {
      shape: {
        type: "float"
      }
    },
    estimatedOn: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
