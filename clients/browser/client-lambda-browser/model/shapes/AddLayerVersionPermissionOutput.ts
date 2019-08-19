import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddLayerVersionPermissionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Statement: {
      shape: {
        type: "string"
      }
    },
    RevisionId: {
      shape: {
        type: "string"
      }
    }
  }
};
