import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTransitGatewayRouteInput: _Structure_ = {
  type: "structure",
  required: ["TransitGatewayRouteTableId", "DestinationCidrBlock"],
  members: {
    TransitGatewayRouteTableId: {
      shape: {
        type: "string"
      }
    },
    DestinationCidrBlock: {
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
