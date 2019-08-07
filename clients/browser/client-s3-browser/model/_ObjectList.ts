import { List as _List_ } from "@aws-sdk/types";
import { _Object } from "./_Object";

export const _ObjectList: _List_ = {
  type: "list",
  flattened: true,
  member: {
    shape: _Object
  }
};
