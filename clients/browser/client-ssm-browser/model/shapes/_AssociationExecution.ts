import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssociationExecution: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      }
    },
    AssociationVersion: {
      shape: {
        type: "string"
      }
    },
    ExecutionId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    DetailedStatus: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastExecutionDate: {
      shape: {
        type: "timestamp"
      }
    },
    ResourceCountByStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
