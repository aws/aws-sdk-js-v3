import { _FleetLaunchTemplateSpecificationRequest } from "./_FleetLaunchTemplateSpecificationRequest";
import { _FleetLaunchTemplateOverridesListRequest } from "./_FleetLaunchTemplateOverridesListRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FleetLaunchTemplateConfigRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplateSpecification: {
      shape: _FleetLaunchTemplateSpecificationRequest
    },
    Overrides: {
      shape: _FleetLaunchTemplateOverridesListRequest
    }
  }
};
