import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateIdentityProviderConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["FleetArn", "IdentityProviderType"],
  members: {
    FleetArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    IdentityProviderType: {
      shape: {
        type: "string"
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
