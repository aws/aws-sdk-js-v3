import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateWebsiteAuthorizationProviderInput: _Structure_ = {
  type: "structure",
  required: ["FleetArn", "AuthorizationProviderType"],
  members: {
    FleetArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    AuthorizationProviderType: {
      shape: {
        type: "string"
      }
    },
    DomainName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
