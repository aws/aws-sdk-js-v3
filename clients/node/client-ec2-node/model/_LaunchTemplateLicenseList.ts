import { List as _List_ } from "@aws-sdk/types";
import { _LaunchTemplateLicenseConfiguration } from "./_LaunchTemplateLicenseConfiguration";

export const _LaunchTemplateLicenseList: _List_ = {
  type: "list",
  member: {
    shape: _LaunchTemplateLicenseConfiguration,
    locationName: "item"
  }
};
