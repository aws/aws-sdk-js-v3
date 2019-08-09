import { _PhysicalResourceIdContext } from "./_PhysicalResourceIdContext";
import { _PropertyDifferences } from "./_PropertyDifferences";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackResourceDrift: _Structure_ = {
  type: "structure",
  required: [
    "StackId",
    "LogicalResourceId",
    "ResourceType",
    "StackResourceDriftStatus",
    "Timestamp"
  ],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    LogicalResourceId: {
      shape: {
        type: "string"
      }
    },
    PhysicalResourceId: {
      shape: {
        type: "string"
      }
    },
    PhysicalResourceIdContext: {
      shape: _PhysicalResourceIdContext
    },
    ResourceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ExpectedProperties: {
      shape: {
        type: "string"
      }
    },
    ActualProperties: {
      shape: {
        type: "string"
      }
    },
    PropertyDifferences: {
      shape: _PropertyDifferences
    },
    StackResourceDriftStatus: {
      shape: {
        type: "string"
      }
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
