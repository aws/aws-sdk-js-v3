import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateWebsiteAuthorizationProviderOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AuthorizationProviderId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
