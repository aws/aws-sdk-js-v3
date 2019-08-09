import { _ValueStringList } from "./_ValueStringList";
import { _TransitGatewayVpcAttachmentOptions } from "./_TransitGatewayVpcAttachmentOptions";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransitGatewayVpcAttachment: _Structure_ = {
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
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    },
    VpcOwnerId: {
      shape: {
        type: "string"
      },
      locationName: "vpcOwnerId"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    SubnetIds: {
      shape: _ValueStringList,
      locationName: "subnetIds"
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "creationTime"
    },
    Options: {
      shape: _TransitGatewayVpcAttachmentOptions,
      locationName: "options"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
