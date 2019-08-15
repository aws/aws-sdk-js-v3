import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateTransitGatewayRouteTableInput: _Structure_ = {
  type: "structure",
  required: ["TransitGatewayRouteTableId", "TransitGatewayAttachmentId"],
  members: {
    TransitGatewayRouteTableId: {
      shape: {
        type: "string"
      }
    },
    TransitGatewayAttachmentId: {
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
