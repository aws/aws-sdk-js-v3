import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTransitGatewayRouteTableInput: _Structure_ = {
  type: "structure",
  required: ["TransitGatewayRouteTableId"],
  members: {
    TransitGatewayRouteTableId: {
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
