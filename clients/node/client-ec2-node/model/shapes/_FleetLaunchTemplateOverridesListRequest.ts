import { List as _List_ } from "@aws-sdk/types";
import { _FleetLaunchTemplateOverridesRequest } from "./_FleetLaunchTemplateOverridesRequest";

export const _FleetLaunchTemplateOverridesListRequest: _List_ = {
  type: "list",
  member: {
    shape: _FleetLaunchTemplateOverridesRequest,
    locationName: "item"
  }
};
