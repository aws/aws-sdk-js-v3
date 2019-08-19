import { List as _List_ } from "@aws-sdk/types";
import { _ModelPackageValidationProfile } from "./_ModelPackageValidationProfile";

export const _ModelPackageValidationProfiles: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ModelPackageValidationProfile
  }
};
