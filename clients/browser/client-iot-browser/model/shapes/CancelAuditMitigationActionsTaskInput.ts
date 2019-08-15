import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelAuditMitigationActionsTaskInput: _Structure_ = {
  type: "structure",
  required: ["taskId"],
  members: {
    taskId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "taskId"
    }
  }
};
