import { _QualificationRequirementList } from "./_QualificationRequirementList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HIT: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HITId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HITTypeId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HITGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HITLayoutId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    Title: {
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
    Keywords: {
      shape: {
        type: "string"
      }
    },
    HITStatus: {
      shape: {
        type: "string"
      }
    },
    MaxAssignments: {
      shape: {
        type: "integer"
      }
    },
    Reward: {
      shape: {
        type: "string"
      }
    },
    AutoApprovalDelayInSeconds: {
      shape: {
        type: "integer"
      }
    },
    Expiration: {
      shape: {
        type: "timestamp"
      }
    },
    AssignmentDurationInSeconds: {
      shape: {
        type: "integer"
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
    HITReviewStatus: {
      shape: {
        type: "string"
      }
    },
    NumberOfAssignmentsPending: {
      shape: {
        type: "integer"
      }
    },
    NumberOfAssignmentsAvailable: {
      shape: {
        type: "integer"
      }
    },
    NumberOfAssignmentsCompleted: {
      shape: {
        type: "integer"
      }
    }
  }
};
