import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SchemaChangePolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UpdateBehavior: {
      shape: {
        type: "string"
      }
    },
    DeleteBehavior: {
      shape: {
        type: "string"
      }
    }
  }
};
