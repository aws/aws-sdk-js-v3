import { _FleetLaunchTemplateSpecification } from "./_FleetLaunchTemplateSpecification";
import { _FleetLaunchTemplateOverrides } from "./_FleetLaunchTemplateOverrides";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateAndOverridesResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplateSpecification: {
      shape: _FleetLaunchTemplateSpecification,
      locationName: "launchTemplateSpecification"
    },
    Overrides: {
      shape: _FleetLaunchTemplateOverrides,
      locationName: "overrides"
    }
  }
};
