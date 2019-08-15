import { List as _List_ } from "@aws-sdk/types";
import { _LaunchTemplateConfig } from "./_LaunchTemplateConfig";

export const _LaunchTemplateConfigList: _List_ = {
  type: "list",
  member: {
    shape: _LaunchTemplateConfig,
    locationName: "item"
  }
};
