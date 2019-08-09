import { List as _List_ } from "@aws-sdk/types";
import { _Entity } from "./_Entity";

export const _EntityList: _List_ = {
  type: "list",
  member: {
    shape: _Entity
  }
};
