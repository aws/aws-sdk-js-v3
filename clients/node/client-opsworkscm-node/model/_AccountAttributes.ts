import { List as _List_ } from "@aws-sdk/types";
import { _AccountAttribute } from "./_AccountAttribute";

export const _AccountAttributes: _List_ = {
  type: "list",
  member: {
    shape: _AccountAttribute
  }
};
