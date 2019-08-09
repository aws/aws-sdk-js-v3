import { _InstancesList } from "./_InstancesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetDeploymentInstancesInput: _Structure_ = {
  type: "structure",
  required: ["deploymentId", "instanceIds"],
  members: {
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    instanceIds: {
      shape: _InstancesList
    }
  }
};
