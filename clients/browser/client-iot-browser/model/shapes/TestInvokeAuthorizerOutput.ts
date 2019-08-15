import { _PolicyDocuments } from "./_PolicyDocuments";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestInvokeAuthorizerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    isAuthenticated: {
      shape: {
        type: "boolean"
      }
    },
    principalId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    policyDocuments: {
      shape: _PolicyDocuments
    },
    refreshAfterInSeconds: {
      shape: {
        type: "integer"
      }
    },
    disconnectAfterInSeconds: {
      shape: {
        type: "integer"
      }
    }
  }
};
