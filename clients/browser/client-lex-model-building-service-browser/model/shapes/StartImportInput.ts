import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartImportInput: _Structure_ = {
  type: "structure",
  required: ["payload", "resourceType", "mergeStrategy"],
  members: {
    payload: {
      shape: {
        type: "blob"
      }
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    mergeStrategy: {
      shape: {
        type: "string"
      }
    }
  }
};
