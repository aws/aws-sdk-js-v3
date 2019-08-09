import { _ApprovalResult } from "./_ApprovalResult";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutApprovalResultInput: _Structure_ = {
  type: "structure",
  required: ["pipelineName", "stageName", "actionName", "result", "token"],
  members: {
    pipelineName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    stageName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    actionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    result: {
      shape: _ApprovalResult
    },
    token: {
      shape: {
        type: "string"
      }
    }
  }
};
