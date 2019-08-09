import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIdentityProviderConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityProviderType: {
      shape: {
        type: "string"
      }
    },
    ServiceProviderSamlMetadata: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IdentityProviderSamlMetadata: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
