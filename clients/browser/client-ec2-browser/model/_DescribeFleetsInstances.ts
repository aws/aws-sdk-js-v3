import { _LaunchTemplateAndOverridesResponse } from "./_LaunchTemplateAndOverridesResponse";
import { _InstanceIdsSet } from "./_InstanceIdsSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DescribeFleetsInstances: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplateAndOverrides: {
      shape: _LaunchTemplateAndOverridesResponse,
      locationName: "launchTemplateAndOverrides"
    },
    Lifecycle: {
      shape: {
        type: "string"
      },
      locationName: "lifecycle"
    },
    InstanceIds: {
      shape: _InstanceIdsSet,
      locationName: "instanceIds"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    Platform: {
      shape: {
        type: "string"
      },
      locationName: "platform"
    }
  }
};
