import { List as _List_ } from "@aws-sdk/types";
import { _ResourceShareAssociation } from "./_ResourceShareAssociation";

export const _ResourceShareAssociationList: _List_ = {
  type: "list",
  member: {
    shape: _ResourceShareAssociation
  }
};
