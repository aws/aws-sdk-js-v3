import { List as _List_ } from "@aws-sdk/types";
import { _UserStackAssociation } from "./_UserStackAssociation";

export const _UserStackAssociationList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _UserStackAssociation
  }
};
