import { List as _List_ } from "@aws-sdk/types";
import { _LicenseConfiguration } from "./_LicenseConfiguration";

export const _LicenseConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _LicenseConfiguration
  }
};
