import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetQualificationTypeInput: _Structure_ = {
  type: "structure",
  required: ["QualificationTypeId"],
  members: {
    QualificationTypeId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
