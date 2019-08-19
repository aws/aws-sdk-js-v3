import { List as _List_ } from "@aws-sdk/types";
import { _ActiveViolation } from "./_ActiveViolation";

export const _ActiveViolations: _List_ = {
  type: "list",
  member: {
    shape: _ActiveViolation
  }
};
