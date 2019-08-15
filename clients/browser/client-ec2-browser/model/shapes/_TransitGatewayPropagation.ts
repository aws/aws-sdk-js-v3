import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransitGatewayPropagation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayAttachmentId: {
      shape: {
        type: "string"
      },
      locationName: "transitGatewayAttachmentId"
    },
    ResourceId: {
      shape: {
        type: "string"
      },
      locationName: "resourceId"
    },
    ResourceType: {
      shape: {
        type: "string"
      },
      locationName: "resourceType"
    },
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
