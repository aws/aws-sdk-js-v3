import { List as _List_ } from "@aws-sdk/types";
import { _UserType } from "./_UserType";

export const _UsersListType: _List_ = {
  type: "list",
  member: {
    shape: _UserType
  }
};
