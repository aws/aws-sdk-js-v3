import { _StackSetOperationPreferences } from "./_StackSetOperationPreferences";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackSetOperation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OperationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StackSetId: {
      shape: {
        type: "string"
      }
    },
    Action: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    OperationPreferences: {
      shape: _StackSetOperationPreferences
    },
    RetainStacks: {
      shape: {
        type: "boolean"
      }
    },
    AdministrationRoleARN: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ExecutionRoleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreationTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    EndTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
