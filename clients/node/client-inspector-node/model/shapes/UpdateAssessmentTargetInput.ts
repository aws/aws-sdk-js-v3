import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAssessmentTargetInput: _Structure_ = {
  type: "structure",
  required: ["assessmentTargetArn", "assessmentTargetName"],
  members: {
    assessmentTargetArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    assessmentTargetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    resourceGroupArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
