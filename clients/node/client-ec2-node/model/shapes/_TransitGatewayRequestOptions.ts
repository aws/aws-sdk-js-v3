import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransitGatewayRequestOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AmazonSideAsn: {
      shape: {
        type: "integer"
      }
    },
    AutoAcceptSharedAttachments: {
      shape: {
        type: "string"
      }
    },
    DefaultRouteTableAssociation: {
      shape: {
        type: "string"
      }
    },
    DefaultRouteTablePropagation: {
      shape: {
        type: "string"
      }
    },
    VpnEcmpSupport: {
      shape: {
        type: "string"
      }
    },
    DnsSupport: {
      shape: {
        type: "string"
      }
    }
  }
};
