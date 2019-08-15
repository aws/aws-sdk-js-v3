import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssessmentTargetFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    assessmentTargetNamePattern: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
