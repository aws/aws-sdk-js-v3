import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIdentityProviderConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["FleetArn"],
  members: {
    FleetArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
