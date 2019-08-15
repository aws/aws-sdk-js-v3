import { _PolicyDetails } from "./_PolicyDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateLifecyclePolicyInput: _Structure_ = {
  type: "structure",
  required: ["PolicyId"],
  members: {
    PolicyId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "policyId"
    },
    ExecutionRoleArn: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    PolicyDetails: {
      shape: _PolicyDetails
    }
  }
};
