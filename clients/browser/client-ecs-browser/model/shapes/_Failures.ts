import { List as _List_ } from "@aws-sdk/types";
import { _Failure } from "./_Failure";

export const _Failures: _List_ = {
  type: "list",
  member: {
    shape: _Failure
  }
};
