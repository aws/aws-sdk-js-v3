import { List as _List_ } from "@aws-sdk/types";
import { _Hit } from "./_Hit";

export const _HitList: _List_ = {
  type: "list",
  member: {
    shape: _Hit
  }
};
