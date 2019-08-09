import { List as _List_ } from "@aws-sdk/types";
import { _VpcIpv6CidrBlockAssociation } from "./_VpcIpv6CidrBlockAssociation";

export const _VpcIpv6CidrBlockAssociationSet: _List_ = {
  type: "list",
  member: {
    shape: _VpcIpv6CidrBlockAssociation,
    locationName: "item"
  }
};
