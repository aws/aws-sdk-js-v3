import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAssessmentTargetInput: _Structure_ = {
  type: "structure",
  required: ["assessmentTargetName"],
  members: {
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
