import { _LicenseConfigurationAssociations } from "./_LicenseConfigurationAssociations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssociationsForLicenseConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LicenseConfigurationAssociations: {
      shape: _LicenseConfigurationAssociations
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
