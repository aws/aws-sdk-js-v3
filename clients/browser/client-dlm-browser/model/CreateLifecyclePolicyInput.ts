import { _PolicyDetails } from "./_PolicyDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLifecyclePolicyInput: _Structure_ = {
  type: "structure",
  required: ["ExecutionRoleArn", "Description", "State", "PolicyDetails"],
  members: {
    ExecutionRoleArn: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    PolicyDetails: {
      shape: _PolicyDetails
    }
  }
};
