import { _LicenseConfigurations } from "./_LicenseConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLicenseConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LicenseConfigurations: {
      shape: _LicenseConfigurations
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
