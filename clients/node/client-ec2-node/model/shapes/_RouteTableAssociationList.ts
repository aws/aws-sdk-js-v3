import { List as _List_ } from "@aws-sdk/types";
import { _RouteTableAssociation } from "./_RouteTableAssociation";

export const _RouteTableAssociationList: _List_ = {
  type: "list",
  member: {
    shape: _RouteTableAssociation,
    locationName: "item"
  }
};
