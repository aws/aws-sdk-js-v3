import { List as _List_ } from "@aws-sdk/types";
import { _LicenseConfigurationRequest } from "./_LicenseConfigurationRequest";

export const _LicenseSpecificationListRequest: _List_ = {
  type: "list",
  member: {
    shape: _LicenseConfigurationRequest,
    locationName: "item"
  }
};
