import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDirectConnectGatewayAssociationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    associationId: {
      shape: {
        type: "string"
      }
    },
    associatedGatewayId: {
      shape: {
        type: "string"
      }
    },
    directConnectGatewayId: {
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
    },
    virtualGatewayId: {
      shape: {
        type: "string"
      }
    }
  }
};
