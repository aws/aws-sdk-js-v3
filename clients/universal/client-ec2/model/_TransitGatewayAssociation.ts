import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransitGatewayAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayRouteTableId: {
      shape: {
        type: "string"
      },
      locationName: "transitGatewayRouteTableId"
    },
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
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    }
  }
};
