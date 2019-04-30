import { List as _List_ } from "@aws-sdk/types";
import { _Difference } from "./_Difference";

export const _DifferenceList: _List_ = {
  type: "list",
  member: {
    shape: _Difference
  }
};
