import { List as _List_ } from "@aws-sdk/types";
import { _JobFailure } from "./_JobFailure";

export const _JobFailureList: _List_ = {
  type: "list",
  member: {
    shape: _JobFailure
  }
};
