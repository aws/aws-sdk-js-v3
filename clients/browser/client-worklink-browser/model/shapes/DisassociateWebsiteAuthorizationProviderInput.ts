import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateWebsiteAuthorizationProviderInput: _Structure_ = {
  type: "structure",
  required: ["FleetArn", "AuthorizationProviderId"],
  members: {
    FleetArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    AuthorizationProviderId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
