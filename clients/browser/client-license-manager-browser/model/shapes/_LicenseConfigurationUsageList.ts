import { List as _List_ } from "@aws-sdk/types";
import { _LicenseConfigurationUsage } from "./_LicenseConfigurationUsage";

export const _LicenseConfigurationUsageList: _List_ = {
  type: "list",
  member: {
    shape: _LicenseConfigurationUsage
  }
};
