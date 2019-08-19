import { List as _List_ } from "@aws-sdk/types";
import { _LicenseConfigurationAssociation } from "./_LicenseConfigurationAssociation";

export const _LicenseConfigurationAssociations: _List_ = {
  type: "list",
  member: {
    shape: _LicenseConfigurationAssociation
  }
};
