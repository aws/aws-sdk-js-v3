import { _LicenseConfigurationUsageList } from "./_LicenseConfigurationUsageList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUsageForLicenseConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LicenseConfigurationUsageList: {
      shape: _LicenseConfigurationUsageList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
