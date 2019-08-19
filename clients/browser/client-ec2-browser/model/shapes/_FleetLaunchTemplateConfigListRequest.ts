import { List as _List_ } from "@aws-sdk/types";
import { _FleetLaunchTemplateConfigRequest } from "./_FleetLaunchTemplateConfigRequest";

export const _FleetLaunchTemplateConfigListRequest: _List_ = {
  type: "list",
  member: {
    shape: _FleetLaunchTemplateConfigRequest,
    locationName: "item"
  }
};
