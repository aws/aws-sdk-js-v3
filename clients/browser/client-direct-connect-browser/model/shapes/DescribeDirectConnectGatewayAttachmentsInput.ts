import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDirectConnectGatewayAttachmentsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    directConnectGatewayId: {
      shape: {
        type: "string"
      }
    },
    virtualInterfaceId: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
