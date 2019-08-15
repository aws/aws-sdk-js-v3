import { _ReviewPolicy } from "./_ReviewPolicy";
import { _HITLayoutParameterList } from "./_HITLayoutParameterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHITWithHITTypeInput: _Structure_ = {
  type: "structure",
  required: ["HITTypeId", "LifetimeInSeconds"],
  members: {
    HITTypeId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxAssignments: {
      shape: {
        type: "integer"
      }
    },
    LifetimeInSeconds: {
      shape: {
        type: "integer"
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
