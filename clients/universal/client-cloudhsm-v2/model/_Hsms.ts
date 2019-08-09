import { List as _List_ } from "@aws-sdk/types";
import { _Hsm } from "./_Hsm";

export const _Hsms: _List_ = {
  type: "list",
  member: {
    shape: _Hsm
  }
};
