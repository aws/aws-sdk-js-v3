import { List as _List_ } from "@aws-sdk/types";
import { _LaunchTemplateLicenseConfigurationRequest } from "./_LaunchTemplateLicenseConfigurationRequest";

export const _LaunchTemplateLicenseSpecificationListRequest: _List_ = {
  type: "list",
  member: {
    shape: _LaunchTemplateLicenseConfigurationRequest,
    locationName: "item"
  }
};
