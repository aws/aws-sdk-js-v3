import { List as _List_ } from "@aws-sdk/types";
import { _LaunchTemplateOverrides } from "./_LaunchTemplateOverrides";

export const _Overrides: _List_ = {
  type: "list",
  member: {
    shape: _LaunchTemplateOverrides
  }
};
