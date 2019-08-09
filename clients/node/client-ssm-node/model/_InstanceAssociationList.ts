import { List as _List_ } from "@aws-sdk/types";
import { _InstanceAssociation } from "./_InstanceAssociation";

export const _InstanceAssociationList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceAssociation
  }
};
