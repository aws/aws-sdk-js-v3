import { _OutputSource } from "./_OutputSource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssociationExecutionTarget: _Structure_ = {
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
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceType: {
      shape: {
        type: "string",
        min: 1
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
    LastExecutionDate: {
      shape: {
        type: "timestamp"
      }
    },
    OutputSource: {
      shape: _OutputSource
    }
  }
};
