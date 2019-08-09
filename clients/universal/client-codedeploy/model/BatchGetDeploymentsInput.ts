import { _DeploymentsList } from "./_DeploymentsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetDeploymentsInput: _Structure_ = {
  type: "structure",
  required: ["deploymentIds"],
  members: {
    deploymentIds: {
      shape: _DeploymentsList
    }
  }
};
