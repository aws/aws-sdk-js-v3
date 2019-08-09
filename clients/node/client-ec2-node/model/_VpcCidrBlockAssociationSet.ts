import { List as _List_ } from "@aws-sdk/types";
import { _VpcCidrBlockAssociation } from "./_VpcCidrBlockAssociation";

export const _VpcCidrBlockAssociationSet: _List_ = {
  type: "list",
  member: {
    shape: _VpcCidrBlockAssociation,
    locationName: "item"
  }
};
