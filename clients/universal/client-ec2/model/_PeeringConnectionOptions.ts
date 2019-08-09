import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PeeringConnectionOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllowDnsResolutionFromRemoteVpc: {
      shape: {
        type: "boolean"
      },
      locationName: "allowDnsResolutionFromRemoteVpc"
    },
    AllowEgressFromLocalClassicLinkToRemoteVpc: {
      shape: {
        type: "boolean"
      },
      locationName: "allowEgressFromLocalClassicLinkToRemoteVpc"
    },
    AllowEgressFromLocalVpcToRemoteClassicLink: {
      shape: {
        type: "boolean"
      },
      locationName: "allowEgressFromLocalVpcToRemoteClassicLink"
    }
  }
};
