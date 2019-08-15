import { List as _List_ } from "@aws-sdk/types";
import { _LaunchTemplateVersion } from "./_LaunchTemplateVersion";

export const _LaunchTemplateVersionSet: _List_ = {
  type: "list",
  member: {
    shape: _LaunchTemplateVersion,
    locationName: "item"
  }
};
