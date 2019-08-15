import { _TransitGatewayAttachmentList } from "./_TransitGatewayAttachmentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTransitGatewayAttachmentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayAttachments: {
      shape: _TransitGatewayAttachmentList,
      locationName: "transitGatewayAttachments"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
