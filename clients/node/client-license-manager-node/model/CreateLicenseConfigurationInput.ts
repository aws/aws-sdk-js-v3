import { _StringList } from "./_StringList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLicenseConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["Name", "LicenseCountingType"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    LicenseCountingType: {
      shape: {
        type: "string"
      }
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
    LicenseRules: {
      shape: _StringList
    },
    Tags: {
      shape: _TagList
    }
  }
};
