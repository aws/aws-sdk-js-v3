import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLicenseConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["LicenseConfigurationArn"],
  members: {
    LicenseConfigurationArn: {
      shape: {
        type: "string"
      }
    }
  }
};
