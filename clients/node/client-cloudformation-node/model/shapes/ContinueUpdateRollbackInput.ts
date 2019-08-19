import { _ResourcesToSkip } from "./_ResourcesToSkip";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ContinueUpdateRollbackInput: _Structure_ = {
  type: "structure",
  required: ["StackName"],
  members: {
    StackName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleARN: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ResourcesToSkip: {
      shape: _ResourcesToSkip
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
