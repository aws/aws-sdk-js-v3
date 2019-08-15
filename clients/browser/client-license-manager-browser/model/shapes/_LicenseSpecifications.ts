import { List as _List_ } from "@aws-sdk/types";
import { _LicenseSpecification } from "./_LicenseSpecification";

export const _LicenseSpecifications: _List_ = {
  type: "list",
  member: {
    shape: _LicenseSpecification
  }
};
