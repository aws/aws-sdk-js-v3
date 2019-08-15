import { List as _List_ } from "@aws-sdk/types";
import { _FleetLaunchTemplateConfig } from "./_FleetLaunchTemplateConfig";

export const _FleetLaunchTemplateConfigList: _List_ = {
  type: "list",
  member: {
    shape: _FleetLaunchTemplateConfig,
    locationName: "item"
  }
};
