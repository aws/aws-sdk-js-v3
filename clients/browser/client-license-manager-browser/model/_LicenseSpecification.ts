import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LicenseSpecification: _Structure_ = {
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
