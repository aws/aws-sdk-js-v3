import { _DeploymentStatusList } from "./_DeploymentStatusList";
import { _TimeRange } from "./_TimeRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeploymentsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    deploymentGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    includeOnlyStatuses: {
      shape: _DeploymentStatusList
    },
    createTimeRange: {
      shape: _TimeRange
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
