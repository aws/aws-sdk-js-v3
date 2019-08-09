import { List as _List_ } from "@aws-sdk/types";
import { _ByteMatchTuple } from "./_ByteMatchTuple";

export const _ByteMatchTuples: _List_ = {
  type: "list",
  member: {
    shape: _ByteMatchTuple
  }
};
