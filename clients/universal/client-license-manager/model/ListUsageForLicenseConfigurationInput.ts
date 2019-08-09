import { _Filters } from "./_Filters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUsageForLicenseConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["LicenseConfigurationArn"],
  members: {
    LicenseConfigurationArn: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _Filters
    }
  }
};
