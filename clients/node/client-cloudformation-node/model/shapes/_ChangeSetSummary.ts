import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ChangeSetSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    StackName: {
      shape: {
        type: "string"
      }
    },
    ChangeSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ChangeSetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ExecutionStatus: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusReason: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
