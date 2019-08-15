import { List as _List_ } from "@aws-sdk/types";
import { _SubnetIpv6CidrBlockAssociation } from "./_SubnetIpv6CidrBlockAssociation";

export const _SubnetIpv6CidrBlockAssociationSet: _List_ = {
  type: "list",
  member: {
    shape: _SubnetIpv6CidrBlockAssociation,
    locationName: "item"
  }
};
