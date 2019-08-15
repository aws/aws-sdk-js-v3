import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateLicenseConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["LicenseConfigurationArn"],
  members: {
    LicenseConfigurationArn: {
      shape: {
        type: "string"
      }
    },
    LicenseConfigurationStatus: {
      shape: {
        type: "string"
      }
    },
    LicenseRules: {
      shape: _StringList
    },
    LicenseCount: {
      shape: {
        type: "integer"
      }
    },
    LicenseCountHardLimit: {
      shape: {
        type: "boolean"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
