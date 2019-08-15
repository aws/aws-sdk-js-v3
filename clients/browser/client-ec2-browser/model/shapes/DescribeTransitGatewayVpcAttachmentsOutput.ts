import { _TransitGatewayVpcAttachmentList } from "./_TransitGatewayVpcAttachmentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTransitGatewayVpcAttachmentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayVpcAttachments: {
      shape: _TransitGatewayVpcAttachmentList,
      locationName: "transitGatewayVpcAttachments"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
