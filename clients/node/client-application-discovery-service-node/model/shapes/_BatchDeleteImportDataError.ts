import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchDeleteImportDataError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    importTaskId: {
      shape: {
        type: "string"
      }
    },
    errorCode: {
      shape: {
        type: "string"
      }
    },
    errorDescription: {
      shape: {
        type: "string"
      }
    }
  }
};
