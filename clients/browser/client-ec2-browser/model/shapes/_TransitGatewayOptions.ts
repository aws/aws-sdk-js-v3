import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransitGatewayOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AmazonSideAsn: {
      shape: {
        type: "integer"
      },
      locationName: "amazonSideAsn"
    },
    AutoAcceptSharedAttachments: {
      shape: {
        type: "string"
      },
      locationName: "autoAcceptSharedAttachments"
    },
    DefaultRouteTableAssociation: {
      shape: {
        type: "string"
      },
      locationName: "defaultRouteTableAssociation"
    },
    AssociationDefaultRouteTableId: {
      shape: {
        type: "string"
      },
      locationName: "associationDefaultRouteTableId"
    },
    DefaultRouteTablePropagation: {
      shape: {
        type: "string"
      },
      locationName: "defaultRouteTablePropagation"
    },
    PropagationDefaultRouteTableId: {
      shape: {
        type: "string"
      },
      locationName: "propagationDefaultRouteTableId"
    },
    VpnEcmpSupport: {
      shape: {
        type: "string"
      },
      locationName: "vpnEcmpSupport"
    },
    DnsSupport: {
      shape: {
        type: "string"
      },
      locationName: "dnsSupport"
    }
  }
};
