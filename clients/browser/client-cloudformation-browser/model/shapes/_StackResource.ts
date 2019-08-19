import { _StackResourceDriftInformation } from "./_StackResourceDriftInformation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackResource: _Structure_ = {
  type: "structure",
  required: [
    "LogicalResourceId",
    "ResourceType",
    "Timestamp",
    "ResourceStatus"
  ],
  members: {
    StackName: {
      shape: {
        type: "string"
      }
    },
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
    ResourceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ResourceStatus: {
      shape: {
        type: "string"
      }
    },
    ResourceStatusReason: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DriftInformation: {
      shape: _StackResourceDriftInformation
    }
  }
};
