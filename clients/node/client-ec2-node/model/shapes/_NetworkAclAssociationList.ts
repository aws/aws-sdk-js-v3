import { List as _List_ } from "@aws-sdk/types";
import { _NetworkAclAssociation } from "./_NetworkAclAssociation";

export const _NetworkAclAssociationList: _List_ = {
  type: "list",
  member: {
    shape: _NetworkAclAssociation,
    locationName: "item"
  }
};
