import { Structure as _Structure_ } from "@aws-sdk/types";

export const AcceptQualificationRequestInput: _Structure_ = {
  type: "structure",
  required: ["QualificationRequestId"],
  members: {
    QualificationRequestId: {
      shape: {
        type: "string"
      }
    },
    IntegerValue: {
      shape: {
        type: "integer"
      }
    }
  }
};
