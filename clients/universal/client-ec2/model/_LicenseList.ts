import { List as _List_ } from "@aws-sdk/types";
import { _LicenseConfiguration } from "./_LicenseConfiguration";

export const _LicenseList: _List_ = {
  type: "list",
  member: {
    shape: _LicenseConfiguration,
    locationName: "item"
  }
};
