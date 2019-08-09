import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateQualificationFromWorkerInput: _Structure_ = {
  type: "structure",
  required: ["WorkerId", "QualificationTypeId"],
  members: {
    WorkerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    QualificationTypeId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Reason: {
      shape: {
        type: "string"
      }
    }
  }
};
