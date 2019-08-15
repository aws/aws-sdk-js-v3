import { List as _List_ } from "@aws-sdk/types";
import { _PolicyAttribute } from "./_PolicyAttribute";

export const _PolicyAttributes: _List_ = {
  type: "list",
  member: {
    shape: _PolicyAttribute
  }
};
