import { _FleetLaunchTemplateSpecification } from "./_FleetLaunchTemplateSpecification";
import { _LaunchTemplateOverridesList } from "./_LaunchTemplateOverridesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplateSpecification: {
      shape: _FleetLaunchTemplateSpecification,
      locationName: "launchTemplateSpecification"
    },
    Overrides: {
      shape: _LaunchTemplateOverridesList,
      locationName: "overrides"
    }
  }
};
