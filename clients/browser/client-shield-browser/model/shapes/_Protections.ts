import { List as _List_ } from "@aws-sdk/types";
import { _Protection } from "./_Protection";

export const _Protections: _List_ = {
  type: "list",
  member: {
    shape: _Protection
  }
};
