import { _TransitGatewayAttachmentAssociation } from "./_TransitGatewayAttachmentAssociation";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransitGatewayAttachment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayAttachmentId: {
      shape: {
        type: "string"
      },
      locationName: "transitGatewayAttachmentId"
    },
    TransitGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "transitGatewayId"
    },
    TransitGatewayOwnerId: {
      shape: {
        type: "string"
      },
      locationName: "transitGatewayOwnerId"
    },
    ResourceOwnerId: {
      shape: {
        type: "string"
      },
      locationName: "resourceOwnerId"
    },
    ResourceType: {
      shape: {
        type: "string"
      },
      locationName: "resourceType"
    },
    ResourceId: {
      shape: {
        type: "string"
      },
      locationName: "resourceId"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    Association: {
      shape: _TransitGatewayAttachmentAssociation,
      locationName: "association"
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "creationTime"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
