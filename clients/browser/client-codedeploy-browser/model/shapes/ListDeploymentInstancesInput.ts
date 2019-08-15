import { _InstanceStatusList } from "./_InstanceStatusList";
import { _InstanceTypeList } from "./_InstanceTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeploymentInstancesInput: _Structure_ = {
  type: "structure",
  required: ["deploymentId"],
  members: {
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    instanceStatusFilter: {
      shape: _InstanceStatusList
    },
    instanceTypeFilter: {
      shape: _InstanceTypeList
    }
  }
};
