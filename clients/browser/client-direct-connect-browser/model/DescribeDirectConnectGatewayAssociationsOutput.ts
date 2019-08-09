import { _DirectConnectGatewayAssociationList } from "./_DirectConnectGatewayAssociationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDirectConnectGatewayAssociationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    directConnectGatewayAssociations: {
      shape: _DirectConnectGatewayAssociationList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
