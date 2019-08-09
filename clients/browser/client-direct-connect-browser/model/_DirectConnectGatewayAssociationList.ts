import { List as _List_ } from "@aws-sdk/types";
import { _DirectConnectGatewayAssociation } from "./_DirectConnectGatewayAssociation";

export const _DirectConnectGatewayAssociationList: _List_ = {
  type: "list",
  member: {
    shape: _DirectConnectGatewayAssociation
  }
};
