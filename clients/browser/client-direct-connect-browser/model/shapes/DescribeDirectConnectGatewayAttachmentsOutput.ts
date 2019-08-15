import { _DirectConnectGatewayAttachmentList } from "./_DirectConnectGatewayAttachmentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDirectConnectGatewayAttachmentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    directConnectGatewayAttachments: {
      shape: _DirectConnectGatewayAttachmentList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
