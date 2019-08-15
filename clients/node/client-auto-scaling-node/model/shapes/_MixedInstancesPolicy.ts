import { _LaunchTemplate } from "./_LaunchTemplate";
import { _InstancesDistribution } from "./_InstancesDistribution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MixedInstancesPolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplate: {
      shape: _LaunchTemplate
    },
    InstancesDistribution: {
      shape: _InstancesDistribution
    }
  }
};
