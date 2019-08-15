import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReplaceTransitGatewayRouteInput: _Structure_ = {
  type: "structure",
  required: ["DestinationCidrBlock", "TransitGatewayRouteTableId"],
  members: {
    DestinationCidrBlock: {
      shape: {
        type: "string"
      }
    },
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
    Blackhole: {
      shape: {
        type: "boolean"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
