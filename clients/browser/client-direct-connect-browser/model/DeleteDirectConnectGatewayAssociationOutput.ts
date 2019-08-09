import { _DirectConnectGatewayAssociation } from "./_DirectConnectGatewayAssociation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDirectConnectGatewayAssociationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    directConnectGatewayAssociation: {
      shape: _DirectConnectGatewayAssociation
    }
  }
};
