import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopContinuousExportInput: _Structure_ = {
  type: "structure",
  required: ["exportId"],
  members: {
    exportId: {
      shape: {
        type: "string"
      }
    }
  }
};
