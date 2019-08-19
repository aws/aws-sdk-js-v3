import { _QualificationType } from "./_QualificationType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetQualificationTypeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    QualificationType: {
      shape: _QualificationType
    }
  }
};
