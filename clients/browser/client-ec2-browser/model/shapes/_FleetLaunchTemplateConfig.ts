import { _FleetLaunchTemplateSpecification } from "./_FleetLaunchTemplateSpecification";
import { _FleetLaunchTemplateOverridesList } from "./_FleetLaunchTemplateOverridesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FleetLaunchTemplateConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplateSpecification: {
      shape: _FleetLaunchTemplateSpecification,
      locationName: "launchTemplateSpecification"
    },
    Overrides: {
      shape: _FleetLaunchTemplateOverridesList,
      locationName: "overrides"
    }
  }
};
