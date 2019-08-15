import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransitGatewayRouteAttachment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceId: {
      shape: {
        type: "string"
      },
      locationName: "resourceId"
    },
    TransitGatewayAttachmentId: {
      shape: {
        type: "string"
      },
      locationName: "transitGatewayAttachmentId"
    },
    ResourceType: {
      shape: {
        type: "string"
      },
      locationName: "resourceType"
    }
  }
};
