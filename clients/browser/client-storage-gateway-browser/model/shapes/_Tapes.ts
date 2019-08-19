import { List as _List_ } from "@aws-sdk/types";
import { _Tape } from "./_Tape";

export const _Tapes: _List_ = {
  type: "list",
  member: {
    shape: _Tape
  }
};
