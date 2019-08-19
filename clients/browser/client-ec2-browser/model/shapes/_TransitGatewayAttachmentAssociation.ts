import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransitGatewayAttachmentAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayRouteTableId: {
      shape: {
        type: "string"
      },
      locationName: "transitGatewayRouteTableId"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    }
  }
};
