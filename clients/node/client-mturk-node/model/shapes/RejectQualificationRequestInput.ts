import { Structure as _Structure_ } from "@aws-sdk/types";

export const RejectQualificationRequestInput: _Structure_ = {
  type: "structure",
  required: ["QualificationRequestId"],
  members: {
    QualificationRequestId: {
      shape: {
        type: "string"
      }
    },
    Reason: {
      shape: {
        type: "string"
      }
    }
  }
};
