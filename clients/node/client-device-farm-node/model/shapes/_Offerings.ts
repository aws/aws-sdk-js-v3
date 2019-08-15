import { List as _List_ } from "@aws-sdk/types";
import { _Offering } from "./_Offering";

export const _Offerings: _List_ = {
  type: "list",
  member: {
    shape: _Offering
  }
};
