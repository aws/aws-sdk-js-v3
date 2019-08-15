import { List as _List_ } from "@aws-sdk/types";
import { _Association } from "./_Association";

export const _AssociationList: _List_ = {
  type: "list",
  member: {
    shape: _Association
  }
};
