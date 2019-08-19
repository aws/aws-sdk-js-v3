import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PeeringConnectionOptionsRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllowDnsResolutionFromRemoteVpc: {
      shape: {
        type: "boolean"
      }
    },
    AllowEgressFromLocalClassicLinkToRemoteVpc: {
      shape: {
        type: "boolean"
      }
    },
    AllowEgressFromLocalVpcToRemoteClassicLink: {
      shape: {
        type: "boolean"
      }
    }
  }
};
