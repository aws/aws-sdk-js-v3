import { _QualificationRequirementList } from "./_QualificationRequirementList";
import { _ReviewPolicy } from "./_ReviewPolicy";
import { _HITLayoutParameterList } from "./_HITLayoutParameterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHITInput: _Structure_ = {
  type: "structure",
  required: [
    "LifetimeInSeconds",
    "AssignmentDurationInSeconds",
    "Reward",
    "Title",
    "Description"
  ],
  members: {
    MaxAssignments: {
      shape: {
        type: "integer"
      }
    },
    AutoApprovalDelayInSeconds: {
      shape: {
        type: "integer"
      }
    },
    LifetimeInSeconds: {
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
    Question: {
      shape: {
        type: "string"
      }
    },
    RequesterAnnotation: {
      shape: {
        type: "string"
      }
    },
    QualificationRequirements: {
      shape: _QualificationRequirementList
    },
    UniqueRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AssignmentReviewPolicy: {
      shape: _ReviewPolicy
    },
    HITReviewPolicy: {
      shape: _ReviewPolicy
    },
    HITLayoutId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HITLayoutParameters: {
      shape: _HITLayoutParameterList
    }
  }
};
