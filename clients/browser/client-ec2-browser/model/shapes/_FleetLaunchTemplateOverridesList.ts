import { List as _List_ } from "@aws-sdk/types";
import { _FleetLaunchTemplateOverrides } from "./_FleetLaunchTemplateOverrides";

export const _FleetLaunchTemplateOverridesList: _List_ = {
  type: "list",
  member: {
    shape: _FleetLaunchTemplateOverrides,
    locationName: "item"
  }
};
