import { _VpcAttachmentList } from "./_VpcAttachmentList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpnGateway: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    },
    VpcAttachments: {
      shape: _VpcAttachmentList,
      locationName: "attachments"
    },
    VpnGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "vpnGatewayId"
    },
    AmazonSideAsn: {
      shape: {
        type: "integer"
      },
      locationName: "amazonSideAsn"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
