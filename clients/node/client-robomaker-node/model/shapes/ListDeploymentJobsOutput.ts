import { _DeploymentJobs } from "./_DeploymentJobs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeploymentJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentJobs: {
      shape: _DeploymentJobs
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
