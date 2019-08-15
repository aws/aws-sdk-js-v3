import { Structure as _Structure_ } from "@aws-sdk/types";

export const AuthorizeClientVpnIngressInput: _Structure_ = {
  type: "structure",
  required: ["ClientVpnEndpointId", "TargetNetworkCidr"],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      }
    },
    TargetNetworkCidr: {
      shape: {
        type: "string"
      }
    },
    AccessGroupId: {
      shape: {
        type: "string"
      }
    },
    AuthorizeAllGroups: {
      shape: {
        type: "boolean"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
