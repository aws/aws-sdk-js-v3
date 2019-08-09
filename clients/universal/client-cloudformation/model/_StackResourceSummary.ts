import { _StackResourceDriftInformationSummary } from "./_StackResourceDriftInformationSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackResourceSummary: _Structure_ = {
  type: "structure",
  required: [
    "LogicalResourceId",
    "ResourceType",
    "LastUpdatedTimestamp",
    "ResourceStatus"
  ],
  members: {
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
    LastUpdatedTimestamp: {
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
    DriftInformation: {
      shape: _StackResourceDriftInformationSummary
    }
  }
};
