import { _LicenseSpecifications } from "./_LicenseSpecifications";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLicenseSpecificationsForResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LicenseSpecifications: {
      shape: _LicenseSpecifications
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
