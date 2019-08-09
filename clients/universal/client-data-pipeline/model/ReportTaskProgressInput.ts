import { _fieldList } from "./_fieldList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReportTaskProgressInput: _Structure_ = {
  type: "structure",
  required: ["taskId"],
  members: {
    taskId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    fields: {
      shape: _fieldList
    }
  }
};
