import { List as _List_ } from "@aws-sdk/types";
import { _Channel } from "./_Channel";

export const _InputDataConfig: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Channel
  }
};
