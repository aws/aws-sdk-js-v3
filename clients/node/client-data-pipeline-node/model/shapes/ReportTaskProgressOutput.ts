import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReportTaskProgressOutput: _Structure_ = {
  type: "structure",
  required: ["canceled"],
  members: {
    canceled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
