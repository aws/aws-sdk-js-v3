import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelImportTaskInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CancelReason: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ImportTaskId: {
      shape: {
        type: "string"
      }
    }
  }
};
