import { _QualificationRequirementList } from "./_QualificationRequirementList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHITTypeInput: _Structure_ = {
  type: "structure",
  required: ["AssignmentDurationInSeconds", "Reward", "Title", "Description"],
  members: {
    AutoApprovalDelayInSeconds: {
      shape: {
        type: "integer"
      }
    },
    AssignmentDurationInSeconds: {
      shape: {
        type: "integer"
      }
    },
    Reward: {
      shape: {
        type: "string"
      }
    },
    Title: {
      shape: {
        type: "string"
      }
    },
    Keywords: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    QualificationRequirements: {
      shape: _QualificationRequirementList
    }
  }
};
