import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WebsiteAuthorizationProviderSummary: _Structure_ = {
  type: "structure",
  required: ["AuthorizationProviderType"],
  members: {
    AuthorizationProviderId: {
      shape: {
        type: "string",
        min: 1
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
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
