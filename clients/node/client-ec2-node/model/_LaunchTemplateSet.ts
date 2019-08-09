import { List as _List_ } from "@aws-sdk/types";
import { _LaunchTemplate } from "./_LaunchTemplate";

export const _LaunchTemplateSet: _List_ = {
  type: "list",
  member: {
    shape: _LaunchTemplate,
    locationName: "item"
  }
};
