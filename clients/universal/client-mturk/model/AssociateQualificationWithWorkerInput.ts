import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateQualificationWithWorkerInput: _Structure_ = {
  type: "structure",
  required: ["QualificationTypeId", "WorkerId"],
  members: {
    QualificationTypeId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    WorkerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IntegerValue: {
      shape: {
        type: "integer"
      }
    },
    SendNotification: {
      shape: {
        type: "boolean"
      }
    }
  }
};
