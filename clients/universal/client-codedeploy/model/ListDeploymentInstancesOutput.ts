import { _InstancesList } from "./_InstancesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeploymentInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    instancesList: {
      shape: _InstancesList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
